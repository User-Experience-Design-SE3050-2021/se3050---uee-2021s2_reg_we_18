import React from 'react';
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
    return (
        <View style={globalStyles.container}>
            <Card>
                <ScrollView>
            <UserTabs   pageIndex={0} navigation={navigation} />
            <MaterialIcons name='email' size={28} />
            <Text>Email</Text>
            <TextInput placeholder="Email" style={globalStyles.input}   
            
            />
            <MaterialIcons name='lock' size={28} />
            <Text>Password</Text>
            <TextInput placeholder="Password" style={globalStyles.input}   
           
             />
             
            <FlatButton text="login" onPress={()=>{navigation.navigate('Home')}} />   
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



