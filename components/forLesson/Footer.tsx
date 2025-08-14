import { View, Pressable, Image } from 'react-native'
import { useTheme } from "@/app/ThemeContext";
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'

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
    if (currentId !== 14) {
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

export default Footer;