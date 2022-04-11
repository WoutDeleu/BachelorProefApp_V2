//https://www.youtube.com/watch?v=gPaBicMaib4
//https://reactnavigation.org/docs/tab-based-navigation/

import * as React from 'react';
import {StyleSheet, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ActionScreen from "../screens/ActionScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import SubjectListScreen from "../screens/SubjectListScreen";
import SettingsScreen from "../screens/SettingsScreen";
import {Image} from "react-native-web";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Tabs = () => {
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {backgroundColor: '#AD40AF'},
                tabBarInactiveTintColor: '#fff',
                tabBarActiveTintColor: 'yellow',
            }}
        >
            <Tab.Screen
                name="ActionScreen"
                component={ActionScreen}
                // options={({route}) => ({
                //     tabBarStyle: {
                //         display: getTabBarVisibility(route),
                //         backgroundColor: '#AD40AF',
                //     },
                //     tabBarIcon: ({color, size}) => (
                //         <Ionicons name="home-outline" color={color} size={size} />
                //     ),
                // })}
            />
            <Tab.Screen
                name="PreferencesScreen" component={FavoriteScreen}
            />
            <Tab.Screen
                name="SearchScreen" component={SubjectListScreen}
            />
            <Tab.Screen
                name="SettingsScreen" component={SettingsScreen}
            />
        </Tab.Navigator>
    )
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor:'#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default Tabs;
