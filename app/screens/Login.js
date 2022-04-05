import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions, AsyncStorage } from 'react-native';
import axios from "axios";

import { Root, Popup } from 'popup-ui';
import jwt_decode from 'jwt-decode';
import qs from "qs";
import useAuth from '../hooks/useAuth';

function Login() {
    const win = Dimensions.get('window');

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { auth, setAuth } = useAuth();
    const [errMsg, setErrMsg] = useState('');
    const validateEmail = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");
            setEmail(text);
            return false;
        }
        else {
            setEmail(text);
            console.log("Email is Correct");
        }
    }
    const errRef = useRef();

    let loginIsIncorrect = false;
    let serverError = false;

    const logInCheck = async (e) => {
        e.preventDefault();
        const data = qs.stringify({email, password});
        const config = {
            method: 'post',
            url: 'http://192.168.20.181:8081/authentication/login',
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            },
            data: data
        };
        axios(config).then(function(res){
            const decoded = jwt_decode(res.data.access_token);
            const roles = decoded.roles;
            loginIsIncorrect = false;
            serverError = false;
            setAuth({email,password, roles});
            console.log(res.data.access_token);

            AsyncStorage.setItem("access_token", JSON.stringify(res.data.access_token));
            AsyncStorage.setItem("refresh_token", JSON.stringify(res.data.refresh_token));
            console.log(AsyncStorage.getItem("refresh_token"));

            //navigation

        }).catch(function (error) {
            console.log(error.response?.status)
            if(error.response?.status === 401) {
                setErrMsg('Login Failed');
                loginIsIncorrect = true;
                serverError = false;
            }
            else {
                setErrMsg('No Server Response');
                loginIsIncorrect = false;
                serverError = true;
            }
            //errRef.current.focus();
        });

        if(serverError) {
            Popup.show({
                type: 'Warning',
                title: 'Server Error',
                button: true,
                textBody: 'Server error, try again later ',
                buttontext: 'Ok',
                callback: () => Popup.hide()
            })
        }

        if(loginIsIncorrect) {
            Popup.show({
                type: 'Danger',
                title: 'Password/Username are incorrect',
                button: true,
                textBody: 'Your password and/or username are incorrect. Please try again ',
                buttontext: 'Ok',
                callback: () => Popup.hide()
            })
        }
        else {}
        // console.log('password = ' + password.toString());
        // console.log('email = ' + email.toString());

    }

    return(
        <Root>
            <View style={styles.container}>
                <Image
                    source={require('../../assets/pics/KUL_FullLogo.png')}
                    style={{
                        width: win.width/2,
                        height: (win.width/2646)*670,
                        resizeMode: "contain",
                        alignSelf: "center",
                        borderWidth: 1,
                        backgroundColor: "transparent"
                        //borderRadius: 20,
                    }}
                />

                <View style={styles.inputView}>
                    <TextInput
                        autoComplete={email}
                        type={email}
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#212521"
                        onChangeText={text => validateEmail(text)}
                    />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..."
                        placeholderTextColor="#212521"
                        onChangeText={text => setPassword(text)}/>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn} onPress={logInCheck}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{color: "black"}}>
                        Register as a company?
                    </Text>
                </TouchableOpacity>
            </View>
        </Root>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        //borderTopLeftRadius:25,
        //borderTopRightRadius:25,
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
    },
    inputView:{
        width:"80%",
        backgroundColor:"#fff",
        borderRadius:25,
        borderColor:"#212521",
        borderWidth:2,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:"black"
    },
    forgot:{
        color:"black",
        fontSize:11
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
});

export default Login;