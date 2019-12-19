import React from 'react'
import { View, Text } from 'react-native'
import AppBar from '../components/common/AppBar'
import Footer from '../components/common/Footer'

const FirstScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <View style={{ flex: 1, }}>
        <View style={{ flex: 1, margin: 35, marginBottom: 0, maxHeight: 200, backgroundColor: 'green' }}>

        </View>
        <View style={{ flex: 1, margin: 35, marginBottom: 0, maxHeight: 200, backgroundColor: 'blue' }}>

        </View>
        <View style={{ marginTop: 35 }}>

        </View>
        <Footer />
      </View>
    </View >
  )
}




export default FirstScreen
