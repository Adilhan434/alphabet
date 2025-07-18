import '@/app/global.css'
import { ICONS } from '@/consonants.js'
import { Link } from 'expo-router'
import { Text, View, Image} from 'react-native'

const HeaderForLesson = ({ header }: { header: string }) => {
  return (
    <View className='w-full bg-primary h-[13vh] px-4 py-3 items-end justify-between flex-row'>
      <Link href='/'>
        <Image
          source={ICONS.backtomenu}
          style={{ width: 40, height: 40 }} // Вместо className
        />
      </Link>

      <View className='flex-row gap-5 justify-center items-center'>
        <Text className='font-extrabold text-[34px] leading-[41px] text-text'>
          {header}
        </Text>
        <Text className='text-text font-noto font-normal text-[20px] leading-[27px]'>
          тамгасы
        </Text>
      </View>

      <View style={{ width: 28, height: 28 }} />
    </View>
  )
}

export default HeaderForLesson
