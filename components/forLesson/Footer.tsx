import { View, Pressable, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'

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

export default Footer;