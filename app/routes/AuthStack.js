import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/Login";
import TextInput from 'react-native-material-textinput';

const AuthStack = () => {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator>
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
        }}
        />
        <AuthStack.Screen name = "HomeScreen" component={HomeScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStack;