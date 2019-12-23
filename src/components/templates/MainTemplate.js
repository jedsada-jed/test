
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import AppBar from '../common/AppBar'
import Footer from '../common/Footer'
import * as Colors from '../../constants/color';

const MainTemplate = ({
  title,
  children,
  hideBackBtn,
  fontColor = Colors.WHITE,
  statusBarColor = Colors.RED,
  safeAreaTopColor = Colors.RED,
  backgroundColor = Colors.WHITE,
  safeAreaBottomColor = Colors.DARK_RED,
  appBarColor = [Colors.RED, Colors.DARK_RED],
}) => {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: safeAreaTopColor }} />
      <View style={[styles.container, { backgroundColor }]}>
        <AppBar
          title={title}
          fontColor={fontColor}
          appBarColor={appBarColor}
          hideBackBtn={hideBackBtn}
          statusBarColor={statusBarColor}
        />
        {children}
        <Footer />
      </View>
      <SafeAreaView style={{ flex: 0, backgroundColor: safeAreaBottomColor }} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainTemplate;
