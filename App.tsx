import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LandingScreen } from './src/screens/LandingScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomeScreen } from './src/screens/HomeScreen';


const switchNavigator = createSwitchNavigator({
  landingStack: {
    screen: createStackNavigator({
      Landing: LandingScreen,
      //экран поиска
    },{
      defaultNavigationOptions: {
        headerShown: false
      }
    })
  },


  homeStack: createBottomTabNavigator({
    //иконка домашней страницы
    home: {
      screen: createStackNavigator({
        HomePage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true ? require('./src/images/icon-home-dark.png') : require('./src/images/icon-home.png')
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },
    //иконка акций
    sale: {
      screen: createStackNavigator({
        SalePage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true ? require('./src/images/icon-sale-dark.png') : require('./src/images/icon-sale.png')
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },
    //иконка корзины
    cart: {
      screen: createStackNavigator({
        CartPage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true ? require('./src/images/icon-shopping-cart-dark.png') : require('./src/images/icon-shopping-cart.png')
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },
    //иконка профиля
    profile: {
      screen: createStackNavigator({
        ProfilePage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true ? require('./src/images/icon-profile-dark.png') : require('./src/images/icon-profile.png')
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },
  })
});

const AppNavigation = createAppContainer(switchNavigator);

export default function App() {
  return (
    <AppNavigation />
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
  }
});
