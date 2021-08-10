import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
//import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import { AppTabNavigator } from './components/AppTabNavigator';
import WelcomeScreen from './screens/welcomeScreen';
//import OurHeader from './components/header';

export default function App() {

  return (
    //Displaying The AppContaniner
    <AppContainer />
  );

}
//Creating The SwitchNavigator for Swapping Between Screens
const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  BottomTab: { screen: AppTabNavigator }
  //Drawer: { screen: AppDrawerNavigator }

})
//Creating AppContainer For Displaying The SwitchNavigator
const AppContainer = createAppContainer(switchNavigator)


