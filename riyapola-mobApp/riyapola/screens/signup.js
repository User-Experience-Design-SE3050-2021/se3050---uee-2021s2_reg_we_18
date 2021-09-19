import React from 'react';
import { View, Text,TextInput, ScrollView } from 'react-native';
import Tabs from '../shared/Tabs';
import { globalStyles } from '../styles/global';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons'
import FlatButton from '../shared/button';
import Card from '../shared/card';
// import { Button } from 'react-native-elements/dist/buttons/Button';
// import React, { Component, Fragment } from "react";
// import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image,} from 'react-native';
// import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
// import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
// GoogleSignin.configure({
//     webClientId:'433588545715-a0rf1qdeefuafa8kn13lh9g2v810v9ri.apps.googleusercontent.com',
//     offlineAccess:true
// })
export default function signup({navigation}) {
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
            <Text style={globalStyles.topicForm}>My Account</Text>
            <MaterialIcons name='person' size={28} />
            <Text>Name</Text>
            <TextInput placeholder="Name" style={globalStyles.input}   
            // onChangeText={value => this.setState({ comment: value })}
              />
            <MaterialIcons name='email' size={28} />
            <Text>Email</Text>
            <TextInput placeholder="Email" style={globalStyles.input}   
            // onChangeText={value => this.setState({ comment: value })}  
            />
            <MaterialIcons name='lock' size={28} />
            <Text>Password</Text>
            <TextInput placeholder="Password" style={globalStyles.input}  
            //  onChangeText={value => this.setState({ comment: value })} 
              />
            <MaterialIcons name='lock' size={28} />
            <Text>Repeat Password</Text>
            <TextInput placeholder="Repeat Password" style={globalStyles.input}   
            // onChangeText={value => this.setState({ comment: value })} 
             />
            <FlatButton text="Create" onPress={()=>{navigation.navigate('Home')}} />
            </Card>
            {/* <GoogleSigninButton
            onPress={signIn}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            style={{width:100,height:100}}
            /> */}
            {/* <Button  /> */}
            {/* <Tabs pageIndex={1} />
            <View style={globalStyles.container}> */}
                {/* <Text style={globalStyles.titleText}>All Ads screen</Text> */}
                {/* <Input
                    placeholder='BASIC INPUT'
                />

                <Input
                    placeholder='INPUT WITH ICON'
                    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                />

                <Input
                    placeholder='INPUT WITH CUSTOM ICON'
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />


                <Input
                    placeholder="Comment"
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    // style={styles}
                    // onChangeText={value => this.setState({ comment: value })}
                />


                <Input
                    placeholder='INPUT WITH ERROR MESSAGE'
                    errorStyle={{ color: 'red' }}
                    errorMessage='ENTER A VALID ERROR HERE'
                /> */}

                {/* <Input placeholder="Password" secureTextEntry={true} />
            </View> */}
        </View>

    )
}



