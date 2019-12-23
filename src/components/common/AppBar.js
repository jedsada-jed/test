import React, { useContext } from 'react';
import { StatusBar, View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { NavigationContext } from 'react-navigation'
import * as Colors from '../../constants/color';

export default AppBar = ({
  title,
  fontColor,
  hideBackBtn,
  appBarColor,
  statusBarColor,
}) => {
  const navigation = useContext(NavigationContext);

  return (
    <LinearGradient colors={appBarColor} style={styles.appBar}>
      <StatusBar backgroundColor={statusBarColor} barStyle={statusBarColor == Colors.RED ? "light-content" : "dark-content"} />
      <View style={styles.wrapFlex}>
        {!hideBackBtn &&
          <TouchableOpacity style={styles.btnLeft} onPress={() => navigation.goBack()}>
            <Text style={{ fontFamily: 'Arial', fontSize: 15, color: fontColor }}>
              {'Back'}
            </Text>
          </TouchableOpacity>}
      </View>
      {!!title &&
        <Text style={[styles.title, { color: fontColor }]}>
          {title}
        </Text>}
      <View style={styles.wrapFlex} />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  appBar: {
    height: 70,
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  wrapFlex: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  btnLeft: {
  },
  btnRight: {
  }
});