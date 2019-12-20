import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import Config from "react-native-config";
import { NavigationContext } from 'react-navigation'
import AppBar from '../components/common/AppBar'
import Footer from '../components/common/Footer'
import { useRestaurantList } from '../hooks'

const MainScreen = () => {
  const { restaurants, clearData } = useRestaurantList();
  const navigation = useContext(NavigationContext);

  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <View style={{ flex: 1, }}>
        <View style={{ flex: 1, margin: 35, marginBottom: 0, maxHeight: 200, backgroundColor: 'green' }}>
          <Text>{JSON.stringify(restaurants)}</Text>
          <Text>{JSON.stringify(restaurants)}</Text>

        </View>
        <View style={{ flex: 1, margin: 35, marginBottom: 0, maxHeight: 200, backgroundColor: 'blue' }}>
          <Text>{Config.GOOGLE_API_KEY}</Text>
        </View>
        <View style={{ marginTop: 35 }}>
          <Button onPress={clearData} title={'clearData'} />
          <Button onPress={() => navigation.push('Restaurant')} title={'RestaurantScreen'} />
          <Button onPress={() => navigation.push('Sequence')} title={'SequenceScreen'} />
        </View>
        <Footer />
      </View>
    </View >
  )
}

export default MainScreen
