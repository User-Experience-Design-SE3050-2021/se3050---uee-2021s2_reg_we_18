import React,{useState} from 'react';
import { View, Text,TextInput, ScrollView } from 'react-native';
import Tabs from '../shared/Tabs';
import { globalStyles } from '../styles/global';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons'
import FlatButton from '../shared/button';
import Card from '../shared/card';
import { Tab,TabView } from 'react-native-elements';
import UserTabs from '../shared/UserTabs';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { SocialIcon } from 'react-native-elements'
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Button } from 'react-native-elements/dist/buttons/Button';
// import React, { Component, Fragment } from "react";
// import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image,} from 'react-native';
// import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
// import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
// GoogleSignin.configure({
//     webClientId:'433588545715-a0rf1qdeefuafa8kn13lh9g2v810v9ri.apps.googleusercontent.com',
//     offlineAccess:true
// })
export default function login({navigation}) {
    // const signIn = async()=>{
    //     try{
    //         await GoogleSignin.hasPlayServices()
    //         const userInfo = await GoogleSignin.signIn();
    //         navigation.navigate('Home')
            
    //     }
    //     catch(error){
    //         console.log(error.message);
    //     }
    // }
    const [user, setUser] = useState({
        email : "",
        password : "",
        
    });
const loginUser =()=>{
    if(user){
            axios.post('https://riyapola.herokuapp.com/user/getUser', user).then((res) => {
                console.log('in dispathc');
              
                console.log('res.data', res.data);
                
                const { token } = res.data;
                  console.log('token', token)
                  const userResponds =token;
                //    jwt.decode(token)
                if (userResponds.email){
                  
                    const userResponds =token;
                //   jwt.decode(token);
                  const userDetails ={
                    _id:userResponds._id,
                    name :userResponds.name,
                    email : userResponds.email,
                    type : userResponds.type,
                    phoneNumber :userResponds.phoneNumber,
                    password:userResponds.password,
                    wishList:userResponds.wishList ? userResponds.wishList: [],
                    image:userResponds.image ? userResponds.image: []
                  }
                  AsyncStorage.setItem("user", JSON.stringify(token));
                  console.log('set item login', token)
                  navigation.navigate('Home');
                //   dispatch({type:ADD_USER,payload:userDetails})
               
                //   console.log('decode token userRespond', userResponds);
                //   dispatch({type:ADD_USER,payload: userResponds})
                //   localStorage.setItem('user', token);
                //   console.log('in findUser');
                //   resolve(res.data)
                 
                }
                // else {
               
                // resolve(res.data)
                // }
                // resolve(res.data)
                
              }).catch((err) => {
             
            // resolve(err)
          
              })
            }
  
}
    return (
        <View style={globalStyles.container}>
            <Card>
                <ScrollView>
            <UserTabs   pageIndex={0} navigation={navigation} />
            <MaterialIcons name='email' size={28} />
            <Text>Email</Text>
            <TextInput placeholder="Email" style={globalStyles.input}   
            // onChangeText={value => this.setState({ comment: value })}  
            onChangeText={(val)=>{
                setUser({
                    ...user,
                    email:val
                })
            }}
            keyboardType='email-address'
            />
            <MaterialIcons name='lock' size={28} />
            <Text>Password</Text>
            <TextInput placeholder="Password" style={globalStyles.input}  
            //  onChangeText={value => this.setState({ comment: value })} 
            onChangeText={(val)=>{
                setUser({
                    ...user,
                    password:val
                })
            }}
            // keyboardType='jp'
              />
             
            <FlatButton text="login" onPress={loginUser} />   
            <Text style={globalStyles.topicForm}>OR</Text>
              <SocialIcon
                title='Sign In With google'
                button
                type='google'
                />
                </ScrollView>
            </Card>        
        </View>
     

    )
}



