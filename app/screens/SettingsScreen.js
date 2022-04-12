import {Button, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import * as SecureStore from "expo-secure-store";
import React from "react";
import Swiper from 'react-native-swiper'
import * as Updates from "expo-updates";

function SettingsScreen() {

    async function reloadApp () {
        await Updates.reloadAsync();
    }

    async function logOut() {
        try {
            await SecureStore.deleteItemAsync("access_token");
            await SecureStore.deleteItemAsync("refresh_token");
            await SecureStore.deleteItemAsync("access_token_expired");
            await SecureStore.deleteItemAsync("refresh_token_expired");
            console.log("Uitgelogd");
            await reloadApp();

        } catch (e) {
            console.log(e.message);
        }
    }

    async function reloadApp () {
        await Updates.reloadAsync();
    }


    return(

        <View style={{
                alignItems: 'center'
            }}
        >
            <TouchableOpacity style={styles.loginBtn} onPress={logOut}>
                <Text style={styles.loginText}>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#212521",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    loginText:{
        color:"white"
    }
})
export default SettingsScreen;