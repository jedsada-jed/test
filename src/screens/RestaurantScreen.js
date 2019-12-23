import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  StyleSheet,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';

import { useRestaurantList } from '../hooks'
import * as Colors from '../constants/color'
import { SystemContext } from '../providers'
import MainTemplate from '../components/templates/MainTemplate';
import { FlatList } from 'react-native-gesture-handler';
import { GOOGLE_MAP_URL } from '../constants/url'
import { GOOGLE_API_KEY } from '../../configs/google';

const RestaurantScreen = () => {
  const { restaurants } = useRestaurantList();
  const { systemState } = useContext(SystemContext);
  const { isLoading } = systemState;

  return (
    <MainTemplate
      title={'Restaurant'}
      fontColor={Colors.BLACK}
      statusBarColor={Colors.YELLOW}
      safeAreaTopColor={Colors.YELLOW}
      safeAreaBottomColor={Colors.YELLOW}
      appBarColor={[Colors.YELLOW, Colors.YELLOW]}>
      <View style={styles.container}>
        {isLoading && <ActivityIndicator size="large" color={Colors.RED} />}
        <FlatList
          data={restaurants}
          renderItem={({ item, separators }) => (
            <TouchableHighlight
              onPress={() => Linking.openURL('https://www.google.co.th/maps')}
              style={styles.item}
              underlayColor={Colors.LIGHT_GRAY}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}>
              <View style={styles.wrapperItem}>
                <View style={styles.wrapperImg}>
                  <Image
                    style={styles.img}
                    source={
                      (item.photos && item.photos.length) > 0
                        ? { uri: `${GOOGLE_MAP_URL}/maps/api/place/photo?photoreference=${item.photos[0].photo_reference}&maxwidth=100&key=${GOOGLE_API_KEY}` }
                        : require('../assets/images/image_default.png')
                    }
                  />
                </View>
                <View style={styles.wrapperText}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text numberOfLines={2} style={styles.address}>
                    {item.formatted_address}
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    </MainTemplate>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
  },
  wrapperText: {
    flex: 1,
  },
  wrapperImg: {
    width: 120,
    justifyContent: 'center',
  },
  address: {
    fontSize: 12,
    color: Colors.SILVER,
  },
  img: {
    width: 100,
    height: 75,
  },
  wrapperItem: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 6,
  },
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
    marginBottom: 15,
    paddingVertical: 5,
    marginTop: 3,
    width: '95%',
    alignSelf: 'center',
  },
});

export default RestaurantScreen;
