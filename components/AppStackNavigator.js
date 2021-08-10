import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import PasswordScreen from '../screens/passwordsScreen';

export const AppStackNavigator = createStackNavigator({

  Passwords: {
    screen: PasswordScreen,
    navigationOptions: {
      headerShown: false
    }
  }
},
  {
    initialRouteName: 'Passwords'
  }
);
