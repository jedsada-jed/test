import React from 'react'
import { StatusBar, View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default AppBar = () => {
  return (
    <LinearGradient colors={['#e7262b', '#b20000']} style={{ height: 230 }}>
      <StatusBar backgroundColor={'#e7262b'} barStyle="light-content" />
      <Text>{'OK'}</Text>
    </LinearGradient>
  )
}
