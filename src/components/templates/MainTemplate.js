
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import AppBar from '../common/AppBar'
import Footer from '../common/Footer'
import * as Colors from '../../constants/color';

// create a component
const MainTemplate = ({
  title,
  children,
  hideBackBtn,
  appBarColor,
  safeAreaTopColor = Colors.RED,
  backgroundColor = Colors.WHITE,
  safeAreaBottomColor = Colors.RED_DARK,
}) => {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: safeAreaTopColor }} />
      <View style={[styles.container, { backgroundColor }]}>
        <AppBar appBarColor={appBarColor} title={title} hideBackBtn={hideBackBtn} />
        {children}
        <Footer />
      </View>
      <SafeAreaView style={{ flex: 0, backgroundColor: safeAreaBottomColor }} />
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default MainTemplate;
