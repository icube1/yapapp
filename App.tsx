import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LandingScreen } from './src/screens/LandingScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


const switchNavigator = createSwitchNavigator({
  landingsStack: {
    screen: createStackNavigator({
      Landing: LandingScreen,
      //экран поиска
    })
  }
})

export default function App() {
  return (
    <LandingScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
