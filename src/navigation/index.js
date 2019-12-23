
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainScreen from '../screens/MainScreen'
import SequenceScreen from '../screens/SequenceScreen'
import RestaurantScreen from '../screens/RestaurantScreen'

const RootStack = createStackNavigator({
  Main: {
    screen: MainScreen,
  },
  Sequence: {
    screen: SequenceScreen,
  },
  Restaurant: {
    screen: RestaurantScreen,
  }
}, {
  headerMode: 'none',
  initialRouteName: 'Main'
});

export default createAppContainer(RootStack);