import { useTheme } from "@/app/ThemeContext";
import { ICONS } from "@/consonants.js";
import { lessons } from "@/lessonRelated.js";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEvent } from "expo";
import { Audio } from "expo-av";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// --- расширяем global для хранения активного аудио и видео плееров
declare global {
  var activeAudio: Audio.Sound | null;
  var activeVideoPlayer: any | null;
}

// инициализация
if (!global.activeAudio) {
  global.activeAudio = null;
}
if (!global.activeVideoPlayer) {
  global.activeVideoPlayer = null;
}

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const router = useRouter();
  const { lessonName, sceneId } = useLocalSearchParams<{
    lessonName: string;
    sceneId: string;
  }>();

  const currentId = parseInt(sceneId || "1", 10);

  // универсальная остановка медиа (аудио и видео)
  const stopCurrentMedia = async () => {
    try {
      if (global.activeAudio) {
        try {
          await global.activeAudio.stopAsync();
        } catch {} // ignore
        try {
          await global.activeAudio.unloadAsync();
        } catch {} // ignore
        global.activeAudio = null;
      }

      if (global.activeVideoPlayer) {
        try {
          // pause может быть sync/async в зависимости от реализации — await безопасно
          await global.activeVideoPlayer.pause();
        } catch (e) {
          console.error("Ошибка при паузе видео-плеера:", e);
        }
        // не выгружаем ресурс видео здесь (чтобы не ломать поведение плеера),
        // просто очищаем ссылку: следующая сцена при необходимости создаст/подставит новый плеер
        global.activeVideoPlayer = null;
      }
    } catch (error) {
      console.error("Ошибка при остановке медиа:", error);
    }
  };

  const handleNext = async () => {
    await stopCurrentMedia();
    if (currentId !== 6) {
      router.push(`/lesson/${lessonName}/${currentId + 1}`);
    } else {
      router.push(`/lesson/${lessonName}/1`);
    }
  };

  const handlePrevious = async () => {
    await stopCurrentMedia();
    if (currentId > 1) {
      router.push(`/lesson/${lessonName}/${currentId - 1}`);
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 40,
        paddingVertical: 20,
        width: "100%",
        height: 90,
        backgroundColor: "#6366F1", // primary цвет
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Pressable
        onPress={handlePrevious}
        disabled={currentId <= 1}
        style={({ pressed }) => ({
          opacity: pressed || currentId <= 1 ? 0.5 : 1,
        })}
      >
        <Image
          source={require("@/assets/icons/previous.png")}
          style={{ tintColor: isDark ? "#fff" : undefined }}
        />
      </Pressable>

      <Pressable
        onPress={handleNext}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <Image
          source={require("@/assets/icons/next.png")}
          style={{ tintColor: isDark ? "#fff" : undefined }}
        />
      </Pressable>
    </View>
  );
};

const { width } = Dimensions.get("window");

const SceneId = () => {
  const { lessonName, sceneId } = useLocalSearchParams();
  const id = parseInt(sceneId as string, 10);
  const lessonKey = lessonName as keyof typeof lessons;
  const scene = lessons[lessonKey]?.[id];
  const title = lessons[lessonKey]?.[0] as string;

  if (!lessonName || isNaN(id) || !scene) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>
          Неверные параметры сцены или сцена не найдена
        </Text>
      </View>
    );
  }

  if (id === 1) {
    return <VideoScene scene={scene} title={title} />;
  }

  if (id >= 2 && id <= 6) {
    return <AudioScene scene={scene} title={title} />;
  }

  return (
    <View style={styles.center}>
      <Text style={styles.errorText}>Неизвестная сцена</Text>
    </View>
  );
};

const PreloadNextVideo = ({ video }: { video: any }) => {
  useVideoPlayer(video);
  return null;
};

const VideoScene = ({ scene, title }: { scene: any; title: string }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const preload = async () => {
      try {
        if (scene.video) {
          setIsLoading(false);
        }
      } catch {
        setHasError(true);
        setIsLoading(false);
      }
    };
    preload();
  }, [scene.video, title]);

  const player = useVideoPlayer(scene.video);

  // --- LAZY LOAD: предзагрузка следующего видео в фоне через скрытый компонент ---
  let nextVideo = null;
  const lessonScenes = lessons[title as keyof typeof lessons];
  if (lessonScenes) {
    const sceneIdx = lessonScenes.findIndex(
      (s: any) => s.video === scene.video
    );
    const nextScene = lessonScenes[sceneIdx + 1];
    if (nextScene && typeof nextScene === "object" && "video" in nextScene) {
      nextVideo = nextScene.video;
    }
  }

  // Слушаем изменение статуса (loading, readyToPlay, error)
  const { status } = useEvent(player, "statusChange", {
    status: player.status,
  });

  useEffect(() => {
    if (status === "error") {
      setHasError(true);
      setIsLoading(false);
    } else if (status === "readyToPlay") {
      setIsLoading(false);
      setHasError(false);
    } else if (status === "loading") {
      setIsLoading(true);
    }
  }, [status]);

  // при монтировании сохраняем плеер в global, при размонтировании ставим на паузу
  useEffect(() => {
    global.activeVideoPlayer = player;

    return () => {
      try {
        if (
          player &&
          typeof player === "object" &&
          typeof player.pause === "function"
        ) {
          player.pause();
        }
      } catch {}
      if (global.activeVideoPlayer === player) {
        global.activeVideoPlayer = null;
      }
    };
  }, [player]);

  const handleRetry = async () => {
    setHasError(false);
    setIsLoading(true);
    try {
      await player.replaceAsync(scene.video);
    } catch {
      setHasError(true);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <HeaderForLesson header={title} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {isLoading && (
          <View
            style={{
              width: "100%",
              aspectRatio: 16 / 9,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f3f4f6",
              borderRadius: 12,
            }}
          >
            <ActivityIndicator size="large" color="#6366F1" />
          </View>
        )}
        {hasError && (
          <View
            style={{
              width: "100%",
              aspectRatio: 16 / 9,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "red", marginBottom: 12 }}>
              Ошибка загрузки видео
            </Text>
            <TouchableOpacity
              onPress={handleRetry}
              style={{
                backgroundColor: "#6366F1",
                paddingHorizontal: 16,
                paddingVertical: 10,
                borderRadius: 25,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons name="reload" size={20} color="white" />
              <Text style={{ color: "white", marginLeft: 8 }}>
                Попробовать снова
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {!isLoading && !hasError && (
          <VideoView
            player={player}
            style={{
              width: "100%",
              aspectRatio: 16 / 9,
              backgroundColor: "black",
              borderRadius: 12,
            }}
            contentFit="contain"
            nativeControls
          />
        )}
        {/* Предзагрузка следующего видео */}
        {nextVideo && <PreloadNextVideo video={nextVideo} />}
      </View>
      <Footer />
    </SafeAreaView>
  );
};

const AudioScene = ({ scene, title }: { scene: any; title: string }) => {
  const audioRef = useRef<Audio.Sound | null>(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const isMounted = useRef(true);

  const AUTO_PLAY_KEY = "autoPlayEnabled";

  const loadAutoPlayPreference = async () => {
    try {
      const value = await AsyncStorage.getItem(AUTO_PLAY_KEY);
      if (value !== null) {
        setIsEnabled(JSON.parse(value));
      }
    } catch (error) {
      console.error("Ошибка загрузки предпочтений:", error);
    }
  };

  const saveAutoPlayPreference = async (value: boolean) => {
    try {
      await AsyncStorage.setItem(AUTO_PLAY_KEY, JSON.stringify(value));
    } catch {
      console.error("Ошибка сохранения предпочтений:");
    }
  };

  useEffect(() => {
    loadAutoPlayPreference();
  }, []);

  useEffect(() => {
    let isActive = true;

    const loadAudio = async () => {
      if (!scene.audio) return;

      try {
        setIsLoading(true);

        // Останавливаем и выгружаем предыдущее аудио
        if (audioRef.current) {
          await audioRef.current.stopAsync();
          await audioRef.current.unloadAsync();
          audioRef.current = null;
        }

        const { sound } = await Audio.Sound.createAsync(scene.audio, {
          shouldPlay: false,
        });

        if (isActive) {
          audioRef.current = sound;
          global.activeAudio = sound;
          console.log("Аудио загружено успешно");
        } else {
          sound.unloadAsync();
        }
      } catch (err) {
        if (isActive) setHasError(true);
      } finally {
        if (isActive) setIsLoading(false);
      }
    };

    loadAudio();

    return () => {
      isActive = false;
      const stopAudio = async () => {
        if (audioRef.current) {
          await audioRef.current.stopAsync();
          await audioRef.current.unloadAsync();
          audioRef.current = null;
          if (global.activeAudio === audioRef.current) {
            global.activeAudio = null;
          }
        }
      };
      stopAudio();
    };
  }, [scene.audio]);

  useEffect(() => {
    const playAudio = async () => {
      if (
        isEnabled &&
        !hasError &&
        !isLoading &&
        scene.audio &&
        audioRef.current
      ) {
        try {
          await audioRef.current.playAsync();
          setIsPlaying(true);
          console.log("Автоматическое воспроизведение начато");
        } catch (err) {
          console.error("Ошибка при автоматическом воспроизведении:", err);
          setHasError(true);
        }
      }
    };

    playAudio();
  }, [isEnabled, hasError, isLoading, scene.audio]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.setOnPlaybackStatusUpdate((status) => {
        if (
          "didJustFinish" in status &&
          status.didJustFinish &&
          isMounted.current
        ) {
          setIsPlaying(false);
        }
      });
    }
  }, []);

  const handleManualPlay = async () => {
    if (isLoading || hasError || !scene.audio) return;

    try {
      if (!audioRef.current) {
        setIsLoading(true);
        const { sound } = await Audio.Sound.createAsync(scene.audio);
        audioRef.current = sound;
        global.activeAudio = sound;
      }

      const status = await audioRef.current.getStatusAsync();
      if ("isPlaying" in status && status.isPlaying) {
        await audioRef.current.pauseAsync();
        setIsPlaying(false);
      } else {
        await audioRef.current.playAsync();
        setIsPlaying(true);
      }
    } catch (err) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAutoPlayChange = (value: boolean) => {
    setIsEnabled(value);
    saveAutoPlayPreference(value);
  };

  return (
    <SafeAreaView className="flex-1">
      <HeaderForLesson header={title} />

      <ScrollView contentContainerClassName="flex-1 items-center justify-center">
        {scene.explain && (
          <Text className="text-lg text-center text-gray-700 mb-8 px-4">
            {scene.explain}
          </Text>
        )}

        <Text className="text-black font-noto font-extrabold text-[52px] my-8">
          {scene.text}
        </Text>

        {hasError ? (
          <Text className="text-red-500 text-center mb-4">
            Ошибка загрузки аудио. Пожалуйста, попробуйте снова.
          </Text>
        ) : (
          <TouchableOpacity
            className="bg-indigo-500 w-16 h-16 rounded-full justify-center items-center self-center"
            onPress={handleManualPlay}
            disabled={isLoading || !scene.audio}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Ionicons
                name={isPlaying ? "pause" : "play"}
                size={28}
                color="white"
              />
            )}
          </TouchableOpacity>
        )}
      </ScrollView>

      <View className="flex-row justify-center items-center py-6 border-t border-gray-200">
        <Text className="text-base mr-3">Автовоспроизведение:</Text>
        <Switch
          trackColor={{ false: "#e5e7eb", true: "#a5b4fc" }}
          thumbColor={isEnabled ? "#4f46e5" : "#f3f4f6"}
          value={isEnabled}
          onValueChange={handleAutoPlayChange}
        />
      </View>

      <Footer />
    </SafeAreaView>
  );
};

const HeaderForLesson = ({ header }: { header: string }) => {
  const router = useRouter();

  const stopCurrentMediaAndGoHome = async () => {
    try {
      if (global.activeAudio) {
        try {
          await global.activeAudio.stopAsync();
        } catch {} // ignore
        try {
          await global.activeAudio.unloadAsync();
        } catch {} // ignore
        global.activeAudio = null;
      }

      if (global.activeVideoPlayer) {
        try {
          await global.activeVideoPlayer.pause();
        } catch (e) {
          console.error("Ошибка при паузе видео-плеера:", e);
        }
        global.activeVideoPlayer = null;
      }
    } catch (err) {
      console.error("Ошибка при остановке медиа перед переходом в меню:", err);
    } finally {
      router.push("/");
    }
  };

  return (
    <View className="w-full bg-primary h-[13vh] px-4 py-3 items-end justify-between flex-row">
      <Pressable onPress={stopCurrentMediaAndGoHome}>
        <Image
          source={ICONS.backtomenu}
          style={{ width: 40, height: 40 }} // Вместо className
        />
      </Pressable>

      <View className="flex-row gap-5 justify-center items-center">
        <Text className="font-extrabold text-[34px] leading-[41px] text-text">
          {header}
        </Text>
        <Text className="text-text font-noto font-normal text-[20px] leading-[27px]">
          тамгасы
        </Text>
      </View>

      <View style={{ width: 28, height: 28 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: "#ef4444",
    textAlign: "center",
  },
});

export default SceneId;
