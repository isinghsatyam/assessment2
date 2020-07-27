import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SignIn from '../screens/SignIn';
import Settings from '../screens/Settings';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import Feeds from '../screens/Feeds';
import AuthResolve from '../navigation/AuthResolve';
import SignOut from '../screens/SignOut'

const TabNavigator = createBottomTabNavigator(
    {
        Home : Home,
        Feeds : Feeds,
        Settings : Settings
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = "home-outline";
                } else if (routeName === 'Feeds') {
                    iconName = "list";
                } else if (routeName === 'Settings') {
                    iconName = "settings-outline";
                }
                return (
                    <Ionicons
                    name={iconName}
                    size={horizontal ? 40 : 30}
                    color={tintColor}
                    />
                );
            }
        })
    }
);

const DrawerNavigator = createDrawerNavigator({
    DashBoard : TabNavigator,
    Settings : Settings,   
    SignOut : SignOut
});

const StackNavigator = createStackNavigator({
    DrawerNavigator : DrawerNavigator,
    SignUp : SignUp
    },{
        defaultNavigationOptions:{
            headerShown: false
        }
    }
);

const SwitchNavigator = createSwitchNavigator(
    { 
        AuthResolve : AuthResolve,
        SignIn : SignIn, 
        Stack : StackNavigator,
        SignOut : SignOut
    },
    {
      initialRouteName: 'AuthResolve',
    },
);

export default createAppContainer(SwitchNavigator);
