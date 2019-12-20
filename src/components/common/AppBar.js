import React from 'react'
import { StatusBar, View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { RED, RED_DARK } from '../../constants/color'

export default AppBar = ({
  statusBarColor = RED
}) => {
  return (
    <LinearGradient colors={[RED, RED_DARK]} style={{ height: 230 }}>
      <StatusBar backgroundColor={statusBarColor} barStyle="light-content" />
      <Text>{'OK'}</Text>
    </LinearGradient>
  )
}
