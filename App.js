import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './src/screens/Main'
import FirstScreen from './src/screens/First'

const AppNavigator = createStackNavigator({
  // Home: {
  //   screen: MainScreen,
  //   navigationOptions: { title: 'Header title' }
  // },
  First: {
    screen: FirstScreen,
  }
}, {
  headerMode: 'none',
});

export default createAppContainer(AppNavigator);
