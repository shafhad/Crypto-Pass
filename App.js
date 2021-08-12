import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { View,StyleSheet } from 'react-native';
//import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import { AppTabNavigator } from './components/AppTabNavigator';
import WelcomeScreen from './screens/welcomeScreen';
//import OurHeader from './components/header';
import { Header } from "react-native-elements";
export default function App() {

  return (
    //Displaying The AppContaniner
    <View style={{ flex:0.8 }}>
    <Header backgroundColor="#175ddc"
            centerComponent={{ text: 'Crypto Pass', style: { color: 'white', fontSize: 20, } }}
            
          />
		   
          <View style={{ flex:1 }}>
          
    <AppContainer />
</View>
</View>
   
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



