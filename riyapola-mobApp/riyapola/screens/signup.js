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
import { SocialIcon } from 'react-native-elements/dist/social/SocialIcon';
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
    const [user, setUser] = useState({
        name : "",
        email : "",
        password : "",
        type : "buyerseller",
        phoneNumber :"",
        wishList:[],
        image:[]
    });
    const [rePassowrd, setRePassowrd] = useState("");
    const addUser =()=>{
        // axios.
      
           if(user.password === rePassowrd){

           
                axios.post('https://riyapola.herokuapp.com/user/add',user).then(res=>{
                
                const {token} = res.data;
                console.log(token,"token");
                
              
                 if(token){
                
                    // const userResponds = token;
                    // const userDetails ={
                    //     _id:userResponds._id,
                    //     name :userResponds.name,
                    //     email : userResponds.email,
                    //     type : userResponds.type,
                    //     phoneNumber :userResponds.phoneNumber,
                    //     password:userResponds.password,
                    //     wishList:userResponds.wishList ? userResponds.wishList: [],
                    //     image:userResponds.image ? userResponds.image: []
                    // }
        
                    // console.log('decode token userRespond',userResponds);
                    // console.log('send details to redux',userDetails)
                    // localStorage.setItem('user',token);
                    AsyncStorage.setItem("user", JSON.stringify(token));
                    navigation.navigate('Home');
                    // dispatch({type:ADD_USER,payload:userDetails})
                    // resolve(res.data);
                }
               
                // resolve(res.data);
                 
            }).catch(err=>{
                console.log(err)
              
                // resolve(err);
            })
           }
      
        // AsyncStorage.setItem("tempUser", JSON.stringify(user));
    }
    return (
        <View style={globalStyles.container}>
            <Card>
                <ScrollView>
<UserTabs   pageIndex={1} navigation={navigation} />
        

  <MaterialIcons name='person' size={28} />

            <Text>Name</Text>
            <TextInput placeholder="Name" style={globalStyles.input}   
            // onChangeText={value => this.setState({ comment: value })}
            onChangeText={(val)=>{
                setUser({
                    ...user,
                    name:val
                })
            }}
            // keyboardType='numeric'
              />
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
            <MaterialIcons name='smartphone' size={28} />
            <Text>Phone Number</Text>
            <TextInput placeholder="Phone Number" style={globalStyles.input}   
            // onChangeText={value => this.setState({ comment: value })}  
            onChangeText={(val)=>{
                setUser({
                    ...user,
                    phoneNumber:val
                })
            }}
            keyboardType='phone-pad'
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
            <MaterialIcons name='lock' size={28} />
            <Text>Repeat Password</Text>
            <TextInput placeholder="Repeat Password" style={globalStyles.input}   
            onChangeText={(val)=>{
                setRePassowrd(val)
            }}
            // keyboardType='numeric'
            // onChangeText={value => this.setState({ comment: value })} 
             />
            <FlatButton text="Create" onPress={addUser} />
             <Text style={globalStyles.topicForm}>OR</Text>
             <SocialIcon
                title='Sign Up With google'
                button
                type='google'
                />
  {/* <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
    <Text h1>Cart</Text>
  </TabView.Item> */}

            {/* <Text style={globalStyles.topicForm}>My Account</Text> */}
            </ScrollView>
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



