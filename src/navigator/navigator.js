import React from 'react';
import {
  Platform
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import MenuScreen from '../screens/menu';
import MainScreen from '../screens/main';



const RootStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
          header: null,
          gestureEnabled: false,
      }   
    },
    Register:{
      screen: RegisterScreen,
      navigationOptions: {
          header: null,
          gestureEnabled: false,
      }   
    },
    Menu: {
      screen: MenuScreen,
      navigationOptions: {
          header: null,
          gestureEnabled: false,
      }   
    },
    Main:{
      screen: MainScreen,
      navigationOptions: {
          header: null,
          gestureEnabled: false,
      }   
    }
  }
);

const AppNavigator = createAppContainer(RootStack);
export default AppNavigator;

