import React, { useState } from 'react';
import { View, Text,TextInput, ScrollView } from 'react-native';
import Tabs from '../shared/Tabs';
import { globalStyles } from '../styles/global';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons'
import FlatButton from '../shared/button';
import Card from '../shared/card';
import { Tab,TabView } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import ImagePicker from 'react-native-image-picker';

// import { State } from 'react-native-gesture-handler';
// import { Button } from 'react-native-elements/dist/buttons/Button';
// import React, { Component, Fragment } from "react";
// import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image,} from 'react-native';
// import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
// import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
// GoogleSignin.configure({
//     webClientId:'433588545715-a0rf1qdeefuafa8kn13lh9g2v810v9ri.apps.googleusercontent.com',
//     offlineAccess:true
// })
export default function profile({navigation}) {
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
  
    const [state, setstate] = useState({
      photo:null
    })
    const handleChoosePhoto =()=>{
      ImagePicker.launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 0,
        includeBase64: true
      },(response) => {
        setstate({
          photo:response
        })      
      });
    }
    return (
        <View style={globalStyles.container}>
            <Card>
            <ScrollView>
              {state.photo ?
              <Image
              source={{uri:state.photo}}
              style={{width:50,height:50}}
              />:(
                <MaterialIcons name='person' size={50}  />
              )
            }

        <Button
        title="Chosse Photo"
         onPress={handleChoosePhoto}
        />


  <MaterialIcons name='person' size={28} />
            <Text>Name</Text>
            <TextInput placeholder="Name" style={globalStyles.input}   
              />
            {/* <MaterialIcons name='email' size={28} />
            <Text>Email</Text>
            <TextInput placeholder="Email" style={globalStyles.input}   
            
            /> */}
            <MaterialIcons name='lock' size={28} />
            <Text>Current Password</Text>
            <TextInput placeholder="Current Password" style={globalStyles.input}  
         
              />
              <MaterialIcons name='lock' size={28} />
            <Text>New Password</Text>
            <TextInput placeholder="New Password" style={globalStyles.input}   
           
             />
            <MaterialIcons name='lock' size={28} />
            <Text>Repeat Password</Text>
            <TextInput placeholder="Repeat Password" style={globalStyles.input}   
           
             />
             <MaterialIcons name='phone' size={28} />
            <Text>Phone Number</Text>
            <TextInput placeholder="Phone Number" style={globalStyles.input}   
           
             />
             <MaterialIcons name='lock' size={28} />
            <Text>Region</Text>
            <TextInput placeholder="Region" style={globalStyles.input}   
           
             />
             <MaterialIcons name='lock' size={28} />
            <Text>City</Text>
            <TextInput placeholder="City" style={globalStyles.input}   
           
             />
             <MaterialIcons name='lock' size={28} />
            <Text>Address</Text>
            <TextInput placeholder="Address" style={globalStyles.input}   
           
             />
            <FlatButton text="Create" onPress={()=>{navigation.navigate('Home')}}  />   
            <FlatButton text="Delete" onPress={()=>{navigation.navigate('Home')}} />   
            </ScrollView>
            </Card>        
        </View>
     

    )
}



