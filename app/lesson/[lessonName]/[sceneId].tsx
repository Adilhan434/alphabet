import HeaderForLesson from '@/components/forLesson/HeaderForLesson';
import { lessons } from '@/lessonRelated.js';
import { Ionicons } from '@expo/vector-icons';
import { ResizeMode, Video } from 'expo-av';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';

// Объявление глобальной переменной для управления аудио
declare global {
  var activeAudio: Audio.Sound | null;
}

// Инициализация глобальной переменной
if (!global.activeAudio) {
  global.activeAudio = null;
}

const { width } = Dimensions.get('window');

const SceneId = () => {
  const { lessonName, sceneId } = useLocalSearchParams();
  const id = parseInt(sceneId as string, 10);
  const lessonKey = lessonName as keyof typeof lessons;
  const scene = lessons[lessonKey]?.[id];
  const title = lessons[lessonKey]?.[0] as string;
  
  if (!lessonName || isNaN(id) || !scene) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Неверные параметры сцены или сцена не найдена</Text>
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

const VideoScene = ({ scene, title }) => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    const loadVideo = async () => {
      try {
        setIsLoading(true);
        setError(null);

        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: true,
        });

        await videoRef.current?.loadAsync(scene.video, {}, false);
      } catch (err) {
        console.error('Ошибка загрузки видео:', err);
        setError('Не удалось загрузить видео');
      } finally {
        setIsLoading(false);
      }
    };

    loadVideo();

    return () => {
      const stopVideo = async () => {
        if (videoRef.current) {
          await videoRef.current.stopAsync();
          await videoRef.current.unloadAsync();
        }
      };
      stopVideo();
    };
  }, [scene.video]);

  const handleRetry = () => {
    setIsLoading(true);
    setError(null);
    videoRef.current?.loadAsync(scene.video);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderForLesson header={title} />
      
      <View className="flex-1 justify-center items-center bg-white p-4">
        {isLoading && (
          <View className="w-full aspect-video justify-center items-center bg-gray-100 rounded-lg">
            <ActivityIndicator size="large" color="#6366F1" />
          </View>
        )}

        {error && (
          <View className="w-full aspect-video justify-center items-center space-y-4">
            <Text className="text-red-500 text-lg text-center">{error}</Text>
            <TouchableOpacity
              className="bg-indigo-500 px-6 py-3 rounded-full flex-row items-center"
              onPress={handleRetry}
            >
              <Ionicons name="reload" size={20} color="white" />
              <Text className="text-white ml-2">Попробовать снова</Text>
            </TouchableOpacity>
          </View>
        )}

        {!isLoading && !error && (
          <>
            <Video
              ref={videoRef}
              className="w-full aspect-video bg-black rounded-lg"
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              onPlaybackStatusUpdate={setStatus}
              onError={(error) => {
                console.error('Video playback error:', error);
                setError('Ошибка воспроизведения');
              }}
            />

            <View className="flex-row mt-4 space-x-4">
              <TouchableOpacity
                className="bg-indigo-500 px-4 py-2 rounded-full flex-row items-center"
                onPress={() => 
                  status.isPlaying 
                    ? videoRef.current.pauseAsync() 
                    : videoRef.current.playAsync()
                }
                disabled={!status.isLoaded}
              >
                <Ionicons 
                  name={status.isPlaying ? "pause" : "play"} 
                  size={20} 
                  color="white" 
                />
                <Text className="text-white ml-2">
                  {status.isPlaying ? 'Пауза' : 'Играть'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="bg-gray-500 px-4 py-2 rounded-full flex-row items-center"
                onPress={() => {
                  videoRef.current.setPositionAsync(0);
                  videoRef.current.playAsync();
                }}
                disabled={!status.isLoaded}
              >
                <Ionicons name="refresh" size={20} color="white" />
                <Text className="text-white ml-2">С начала</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
      
      <Footer />
    </SafeAreaView>
  );
};

const AudioScene = ({ scene, title }) => {
  const audioRef = useRef<Audio.Sound | null>(null);  
  const [isEnabled, setIsEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const isMounted = useRef(true);

  const AUTO_PLAY_KEY = 'autoPlayEnabled';

  const loadAutoPlayPreference = async () => {
    try {
      const value = await AsyncStorage.getItem(AUTO_PLAY_KEY);
      if (value !== null) {
        setIsEnabled(JSON.parse(value));
      }
    } catch (error) {
      console.error('Ошибка загрузки предпочтений:', error);
    }
  };

  const saveAutoPlayPreference = async (value) => {
    try {
      await AsyncStorage.setItem(AUTO_PLAY_KEY, JSON.stringify(value));
    } catch (error) {
      console.error('Ошибка сохранения предпочтений:', error);
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

        const { sound } = await Audio.Sound.createAsync(
          { uri: scene.audio },
          { shouldPlay: false }
        );
        
        if (isActive) {
          audioRef.current = sound;
          global.activeAudio = sound;
          console.log('Аудио загружено успешно');
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
      if (isEnabled && !hasError && !isLoading && scene.audio && audioRef.current) {
        try {
          await audioRef.current.playAsync();
          setIsPlaying(true);
          console.log('Автоматическое воспроизведение начато');
        } catch (err) {
          console.error('Ошибка при автоматическом воспроизведении:', err);
          setHasError(true);
        }
      }
    };

    playAudio();
  }, [isEnabled, hasError, isLoading, scene.audio]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.setOnPlaybackStatusUpdate(status => {
        if (status.didJustFinish && isMounted.current) {
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
        const { sound } = await Audio.Sound.createAsync({ uri: scene.audio });
        audioRef.current = sound;
        global.activeAudio = sound;
      }

      const status = await audioRef.current.getStatusAsync();
      
      if (status.isPlaying) {
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

  const handleAutoPlayChange = (value) => {
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
          trackColor={{ false: '#e5e7eb', true: '#a5b4fc' }}
          thumbColor={isEnabled ? '#4f46e5' : '#f3f4f6'}
          value={isEnabled}
          onValueChange={handleAutoPlayChange}
        />
      </View>

      <Footer />
    </SafeAreaView>
  );
};

const Footer = () => {
  const router = useRouter();
  const { lessonName, sceneId } = useLocalSearchParams<{
    lessonName: string;
    sceneId: string;
  }>();

  const currentId = parseInt(sceneId || '1', 10);

  const stopCurrentAudio = async () => {
    try {
      if (global.activeAudio) {
        await global.activeAudio.stopAsync();
        await global.activeAudio.unloadAsync();
        global.activeAudio = null;
      }
    } catch (error) {
      console.error('Ошибка при остановке аудио:', error);
    }
  };

  const handleNext = async () => {
    await stopCurrentAudio();
    if (currentId !== 6) {
      router.push(`/lesson/${lessonName}/${currentId + 1}`);
    } else {
      router.push(`/lesson/${lessonName}/1`);
    }
  };

  const handlePrevious = async () => {
    await stopCurrentAudio();
    if (currentId > 1) {
      router.push(`/lesson/${lessonName}/${currentId - 1}`);
    }
  };

  return (
    <View className='flex-row px-10 py-5 w-full h-[13vh] bg-primary items-center justify-between'>
      <Pressable 
        onPress={handlePrevious} 
        disabled={currentId <= 1}
        style={({ pressed }) => ({
          opacity: pressed || currentId <= 1 ? 0.5 : 1
        })}
      >
        <Image source={require('@/assets/icons/previous.png')} />
      </Pressable>

      <Pressable 
        onPress={handleNext}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1
        })}
      >
        <Image source={require('@/assets/icons/next.png')} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#ef4444',
    textAlign: 'center',
  },
});

export default SceneId;