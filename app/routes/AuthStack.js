import React, { useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen";
import * as SecureStore from 'expo-secure-store';
import Tabs from './Tabs'

const AuthStack = () => {
  const AuthStack = createNativeStackNavigator();
  const [isSignedIn, setSignedIn] = useState();
  const [loading, setLoading] = useState();

  React.useEffect(() => {
    const loggedIn = async () => {
      const t = await SecureStore.getItemAsync("access_token")
      console.log(t);
      setSignedIn(t !== null ? true : false)
    }
    loggedIn()
  }, [])

  if (isSignedIn === undefined) {
    //Maak hier een loading van
    return null;
  }


  return (
    <AuthStack.Navigator>
        {
          isSignedIn? (
              <>
                <AuthStack.Screen name = "Tabs" component={Tabs}/>
              </>
            ) : (
              <>
                <AuthStack.Screen
                    name = "LoginScreen"
                    component={LoginScreen}
                    options={{
                      title: 'Log In',
                      headerStyle: {
                        backgroundColor: '#212521'
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                      animationTypeForReplace: isSignedIn ? 'pop' : 'push',
                    }}
                />

              </>
            )
        }
    </AuthStack.Navigator>
  );
};

export default AuthStack;