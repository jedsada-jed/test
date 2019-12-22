import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, TouchableNativeFeedback, StyleSheet } from 'react-native'
import Config from "react-native-config";
import { NavigationContext } from 'react-navigation'
import { useRestaurantList } from '../hooks'
import MainTemplate from '../components/templates/MainTemplate'
import * as Colors from '../constants/color'

const MainScreen = () => {

  const navigation = useContext(NavigationContext);

  return (
    <MainTemplate title={'TEST'} hideBackBtn>
      <View style={{ flex: 1 }}>
        <View style={{ height: 150, backgroundColor: Colors.RED_DARK }}>
        </View>

        <View style={{ width: '100%', height: '100%', padding: 25, position: 'absolute', top: 10, }}>

          <TouchableOpacity onPress={() => navigation.push('Sequence')} activeOpacity={0.95} style={styles.btn}>
            <Text>{'test'}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.push('Restaurant')} activeOpacity={0.95} style={styles.btn}>
            <Text>{'test'}</Text>
          </TouchableOpacity>
        </View>
      </View>

    </MainTemplate>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    color: Colors.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    shadowColor: Colors.BLACK,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,

    flex: 1, backgroundColor: Colors.WHITE, marginBottom: 50,
  }
})
