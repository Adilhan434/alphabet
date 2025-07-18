import '@/app/global.css'
import { ICONS } from '@/consonants.js'
import { Image } from 'react-native'
import { Link } from 'expo-router'
import { Text, View,  } from 'react-native'

const Header = () => {
  return (
      <View  className='w-full h-[13vh] bg-primary  px-2 py-5 items-end justify-between flex-row'>
        <Link href='/settings'>
          <Image
            source={ICONS.burgermenu} 
            className='w-7 h-7'/>
        </Link>
            <Text className='font-extrabold text-[19px] text-header'>АРАБ АЛФАВИТИ</Text>
           <View className="w-7 h-7" />           
    </View>
  )
}

export default Header