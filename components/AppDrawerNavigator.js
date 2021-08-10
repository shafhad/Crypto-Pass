import React, { Component } from "react";
import customSideBarMenu from './CustomSideBarMenu'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { AppTabNavigator } from './AppTabNavigator'
import settings from "../SideBarScreens/SettingsScreen";
//import MyDonationScreen from "../SideBarScreens/MyDonationScreen"
//import NotificationScreen from "../screens/notificationscreen";
import { Icon } from 'react-native-elements'

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator,
        navigationOptions: {
            drawerIcon: <Icon name="home"
                type='fontawesome5'
            />,
            drawerLabel: 'Home'
        }
    },
    Setting: {
        screen: settings,
        navigationOptions: {
            drawerIcon: <Icon
                name="settings"
                type="fontawesome5"
            />,
            drawerLabel: 'Settings'
        }
    },
    
},
    {
        contentComponent: customSideBarMenu
    },
    {
        initialRouteName: 'Home'
    }


)