/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';


import { useRestaurantList } from '../hooks'
import AppBar from '../components/common/AppBar';
import * as Colors from '../constants/color'
import MainTemplate from '../components/templates/MainTemplate';
import { FlatList } from 'react-native-gesture-handler';

const RestaurantScreen = () => {
  const { restaurants, clearData } = useRestaurantList();

  return (
    <MainTemplate
      appBarColor={[Colors.YELLOW, Colors.YELLOW]}
      safeAreaBottomColor={Colors.YELLOW}
      safeAreaTopColor={Colors.YELLOW}
      title={'Restaurant'}>
      <View style={styles.container}>
        <FlatList
          data={restaurants}
          renderItem={({ item, index, separators }) => (
            <TouchableHighlight
              onPress={() => alert}
              style={styles.item}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}>
              <View style={{ backgroundColor: 'white' }}>
                <Text>{item.name}</Text>
                {/* <Text>{JSON.stringify(item)}</Text> */}
              </View>
            </TouchableHighlight>)}
        />
      </View>

    </MainTemplate>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  item: {
    height: 85,
    shadowColor: Colors.BLACK,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 2,
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginBottom: 20,
    padding: 0,
    width: '95%',
    alignSelf: 'center'
  },
});

export default RestaurantScreen
