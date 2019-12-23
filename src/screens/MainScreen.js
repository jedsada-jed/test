import React, { useContext } from 'react'
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native'
import Config from "react-native-config";
import { NavigationContext } from 'react-navigation'
import MainTemplate from '../components/templates/MainTemplate'
import * as Colors from '../constants/color'

export default MainScreen = () => {

  const navigation = useContext(NavigationContext);

  return (
    <MainTemplate title={'TEST'} hideBackBtn>
      <View style={{ flex: 1 }}>
        <View style={styles.bg} />

        <View style={styles.container}>

          <TouchableHighlight onPress={() => navigation.push('Sequence')} underlayColor={Colors.LIGHT_GRAY} style={styles.btn}>
            <View style={styles.wrapperCover}>
              <Image style={styles.imgCover} source={require('../assets/images/math_cover.jpg')} />
              <View style={styles.wrapperText}>
                <Text style={styles.title}>{'Find next value of sequence'}</Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigation.push('Restaurant')} underlayColor={Colors.LIGHT_GRAY} style={styles.btn}>
            <View style={styles.wrapperCover}>
              <Image style={styles.imgCover} source={require('../assets/images/google_map_cover.png')} />
              <View style={styles.wrapperText}>
                <Text style={styles.title}>{'Place search'}</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </View>

    </MainTemplate >
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 25,
    position: 'absolute',
    top: 10,
  },
  bg: {
    height: 150,
    backgroundColor: Colors.DARK_RED
  },
  title: {
    fontSize: 18,
    alignSelf: 'center',
    color: Colors.BLACK,
  },
  imgCover: {
    width: '100%',
    height: '75%',
    borderRadius: 5,
  },
  wrapperText: {
    flex: 1,
    justifyContent: 'center'
  },
  wrapperCover: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  btn: {
    flex: 1,
    elevation: 14,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    marginBottom: 50,
    shadowRadius: 9.11,
    shadowOpacity: 0.41,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    shadowColor: Colors.BLACK,
    backgroundColor: Colors.WHITE,
  }
})
