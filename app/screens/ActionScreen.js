import { Button, Text, View, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";
import React from "react";
import Login from "./LoginScreen"
import Tabs from "../routes/Tabs";

function ActionScreen({navigation : {navigate}}) {

    async function logOut() {
        try {
            await SecureStore.deleteItemAsync("access_token");
            await SecureStore.deleteItemAsync("refresh_token");
            await SecureStore.deleteItemAsync("access_token_expired");
            await SecureStore.deleteItemAsync("refresh_token_expired");
            console.log("Uitgelogd");
            navigate('Login');
        }
        catch (e) {
            console.log(e.message);
        }
    }

    return(
        <View>
            <Text>test</Text>
            <Button title="LogOut" onPress={() => {logOut()}}
            />
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
    }
})
export default ActionScreen;