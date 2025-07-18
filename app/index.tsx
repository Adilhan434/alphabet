import {SafeAreaView} from 'react-native-safe-area-context'
import React from 'react'
import './global.css'
import Header from '@/components/ForHome/Header'
import Cards from '@/components/ForHome/Cards'

const index = () => {
  return (
    <SafeAreaView className='flex-1'>  
        <Header/>
        <Cards/>
    </SafeAreaView>
  )
}

export default index