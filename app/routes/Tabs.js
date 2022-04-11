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
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: '#ffffff',
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                },
                tabBarInactiveTintColor: '#9b9b9b',
                tabBarActiveTintColor: '#000000',


            }}
        >
            <Tab.Screen
                name="Actions"
                component={ActionScreen}
                options={({route}) => ({
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="checkmark-circle-outline" color={color} size={size} />
                    ),
                })}
            />
            <Tab.Screen
                name="Preferences"
                component={FavoriteScreen}
                options={({route}) => ({
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="heart-outline" color={color} size={size} />
                    ),
                })}
            />
            <Tab.Screen
                name="List" component={SubjectListScreen}
                options={({route}) => ({
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="list-circle-outline" color={color} size={size} />
                    ),
                })}
            />
            <Tab.Screen
                name="Personal" component={SettingsScreen}
                options={({route}) => ({
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="person-outline" color={color} size={size} />
                    ),
                })}
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
