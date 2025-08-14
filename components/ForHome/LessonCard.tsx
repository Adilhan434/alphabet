import { View, Text } from 'react-native'
import React from 'react'


const LessonCard = ({ letter }: { letter: string }) => {
  return (
    <View className='w-full h-[71px] mb-[5px] bg-primary rounded-[10px] flex-row justify-center items-center'>
      <View className='flex-row gap-[30] justify-center items-center'>
        <Text className='font-extrabold text-[34px]  text-text'>
          {letter}
        </Text>
        <Text className='text-text font-noto font-normal text-[20px] leading-[27px]'>
          тамгасы
        </Text>
      </View>
    </View>
  );
};

export default LessonCard;









