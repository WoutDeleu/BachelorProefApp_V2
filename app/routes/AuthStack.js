import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/Login";
import * as SecureStore from 'expo-secure-store';

const AuthStack = () => {
  const AuthStack = createNativeStackNavigator();

  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      alert("🔐 Here's your value 🔐 \n" + result);
    } else {
      alert('No values stored under that key.');
    }
  }


  return (
    <AuthStack.Navigator>
        {
            getValueFor("access_token") == null ? (
              <>
                  <AuthStack.Screen name = "HomeScreen" component={HomeScreen} />
              </>
            ) : (
              <>
                  <AuthStack.Screen
                      name = "Login"
                      component={Login}
                      options={{
                          title: 'Log In',
                          headerStyle: {
                              backgroundColor: '#212521'
                          },
                          headerTintColor: '#fff',
                          headerTitleStyle: {
                              fontWeight: 'bold',
                          },
                      }}/>
              </>
            )
        }
    </AuthStack.Navigator>
  );
};

export default AuthStack;