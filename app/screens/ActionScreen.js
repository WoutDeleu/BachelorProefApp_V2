import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import SelectDropdown from 'react-native-select-dropdown'
import * as SecureStore from "expo-secure-store";
import React, {useState} from "react";
import jwt_decode from 'jwt-decode';

function ActionScreen({navigation}) {
    async function logOut() {
        try {
            await SecureStore.deleteItemAsync("access_token");
            await SecureStore.deleteItemAsync("refresh_token");
            await SecureStore.deleteItemAsync("access_token_expired");
            await SecureStore.deleteItemAsync("refresh_token_expired");
            console.log("Uitgelogd");
        } catch (e) {
            console.log(e.message);
        }
    }

    return null;
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    roundedBox: {
        height: 30,
        backgroundColor: '#212521',
        borderRadius: 10,
        width: 120,
        position: 'absolute',
        right: 20,
        top: 40,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#efefef',
        height: 50,
        width: '90%',
        paddingHorizontal: 10,
        zIndex: 1,
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: '#fff',
        top: 50,
    },
})
export default ActionScreen;