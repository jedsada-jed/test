import React from 'react';
import { Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import RestaurantScreen from './Restaurant'
import SequenceScreen from './Sequence'


const TabNavigator = createMaterialTopTabNavigator({
  Restaurant: RestaurantScreen,
  SequenceScreen: SequenceScreen,
});

TabNavigator.navigationOptions = ({ navigation }) => {
  let activeRoute = navigation.state.routes[navigation.state.index];
  if (activeRoute.routeName === '123') { // or whatever the name is
    return {
      headerTitle: () => <LogoTitle />,
      headerRight: () => (
        <Button
          onPress={() => alert('OK')}
          title="+1"
          color="#fff"
        />)

    };
  } else {
    return {};
  }
};


export default createAppContainer(TabNavigator);
