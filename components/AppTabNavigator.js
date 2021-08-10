import React from "react";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import { Image } from "react-native-elements/dist/image/Image";
import PasswordScreen from "../screens/passwordsScreen";
import AddPassword from "../screens/addPasswordScreen";


export const AppTabNavigator = createMaterialTopTabNavigator
(
    {
        Passwords: {

            screen: PasswordScreen,
            navigationOptions: {
                tabBarLabel: "Passwords",

                tabBarIcon: () => (
                    <Image
                        source={require("../assets/lock.png")}
                    />

                ),
           
            },
        },

        Add: {
            screen: AddPassword,
            navigationOptions: {
                tabBarLabel: "Add Password",
                tabBarIcon: () => (
                    <Image
                        source={require("../assets/addpassword.png")}

                    />
                ),
            },
        },


    },
    {
        tabBarOptions: {
            activeTintColor:'white',
            showIcon: true,

            style: {
                backgroundColor: "#175ddc",
                marginTop: RFValue(30),
            },
        },
      
     
    }
);