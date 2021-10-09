import React, { useState ,useEffect} from 'react';
import { View, Text,TextInput, ScrollView, StyleSheet, Modal,
  Alert,TouchableOpacity, Picker, Image } from 'react-native';
import Tabs from '../shared/Tabs';
import { globalStyles } from '../styles/global';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons'
import FlatButton from '../shared/button';
import Card from '../shared/card';
import { Tab,TabView } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from 'expo-image-picker';
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
    // }'
    const [id, setId] = useState("")
    const [user, setUser] = useState({
      name : "",
      email : "",
      password : "",
      type : "buyerseller",
      phoneNumber :"",
      wishList:[],
      image:[]
  });
  useEffect(() => {
    AsyncStorage.getItem('user', (err, result) => {
      console.log(result);
      result =JSON.parse(result);
      setUser({
        name : result.name,
        email :result.email,
        password : result.password,
        type : result.type,
        phoneNumber :result.phoneNumber,
        wishList:result.wishList,
        image:result.image
        })
        console.log("resultuser",user);
      setId(result._id)
      // setAccount({
      //     ...account,
      //     userId:user._id
      // })
           });
           (async () => {
            if (Platform.OS !== 'web') {
              const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
              if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
              }
            }
          })();
          //  AsyncStorage.removeItem("tempUser");
  }, [])
  
    const [state, setstate] = useState({
      photo:null
    })
 
  const [modalVisible, setModalVisible] = useState(false)
  const updateUser = ()=>{
    // setUser({
    //   ...user,
    //   image:[state.photo]
    // })
        // console.log("payload",payload)
        // console.log("decodeItem",decodeItem)
          axios.post(`https://riyapola.herokuapp.com/user/update/${id}`, user).then((res) => {
           
              const { token } = res.data;
              console.log('token',token);
              if (token) {
                 
                  // localStorage.setItem('user',token);
                  const userResponds = token;
                  // jwt.decode(token);
                  const userDetails = {
                      _id: userResponds._id,
                      name: userResponds.name,
                      email: userResponds.email,
                      type: userResponds.type,
                      phoneNumber: userResponds.phoneNumber,
                      wishList:userResponds.wishList,
                      image:userResponds.image,
                      password:userResponds.password
                  }
                 
                  console.log("userDetails",userDetails);
                  
                  AsyncStorage.setItem("user", JSON.stringify(token));
                    navigation.navigate('vehicleMyAds');
                  // dispatch({type:ADD_USER,payload:userDetails});
                  // resolve(res.data);
              }
              // else{
                  
              //     resolve(res.data);
              // }
             
             
          }).catch((err) => {
             
                // resolve(err);
          })

  }
  const deleteUser =()=>{
  
          axios.delete(`https://riyapola.herokuapp.com/user/${id}`).then(res=>{
         
          console.log(res.data,"res.data");
    
          // resolve(res.data);
          AsyncStorage.removeItem('user');
          navigation.navigate('signup');
           
      }).catch(err=>{
          console.log(err)
        
          // resolve(err);
      })
 
  }
    

    // useEffect(() => {
    //   (async () => {
    //     if (Platform.OS !== 'web') {
    //       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //       if (status !== 'granted') {
    //         alert('Sorry, we need camera roll permissions to make this work!');
    //       }
    //     }
    //   })();
    // }, []);

const handleChoosePhoto = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    setUser({...user,image: [result.uri]});
   
  }
};

    return (
        <View style={globalStyles.container}>
            <Card>
            <ScrollView>
            <View style={{display: 'flex', alignItems: 'center'}}>
              {user.image ?
              <Image
              source={{ uri: user.image[0] }}
              style={{width:150,height:150,borderRadius:50,shadowRadius:60}}
              />:(
                <MaterialIcons name='person' size={50}  />
              )
            }
        <Icon
        name="camera"
         onPress={handleChoosePhoto}
        />
        </View>


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
      defaultValue={user.name}
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
      defaultValue={user.email}
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
      defaultValue={user.phoneNumber}
      />
            <FlatButton text="Update" onPress={updateUser}  />   
            <FlatButton text="Delete"  style={style.deleteBtn} onPress={()=>setModalVisible(true)} />   
            </ScrollView>
            </Card>   
            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(false);
        }}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={{textAlign:"center", marginBottom:20, fontSize:20,letterSpacing:3}}>Are you sure ?</Text>
            {/* <Pressable
              style={[style.button, style.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={style.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[style.button, style.buttonClose]}
              // onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={style.textStyle}>Yes</Text>
            </Pressable> */}

            <View style={style.twoButtonOuter}>
              <TouchableOpacity
                style={style.updateBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text style={style.updateText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.deleteBtn}>
                <Text style={style.deleteText} onPress={deleteUser}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>     
        </View>
     

    )
}
const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    marginTop: 5,
    width: 200,
    height: 30,
    borderRadius: 5,
  },
  inputText: {
    marginTop: 15,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#4d98d1",
    padding: 10,
    borderRadius: 5,
    marginRight: 20,
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    // backgroundColor:black
  },
  scrollview: {
    //   flex:1,
    marginTop: 20,
    maxHeight: 500,
    width: 320,
    // backgroundColor: "#bcd2e3",
    marginBottom: 20,
    padding: 5,
    // borderColor: "#95ebfc",
    // borderWidth: 1,
  },
  listViewCard: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    // borderWidth:1,
    borderRadius: 10,
    // padding:10,
    borderColor: "#77edaa",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3
  },
  twoButtonOuter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  listTableText: {
    marginBottom: 20,
    marginTop: 5,
    fontSize: 25,
    marginLeft: 10,
  },
  updateBtn: {
    alignItems: "center",
    backgroundColor: "#3388ff",
    padding: 10,
    borderRadius: 5,
    marginRight: 20,
    width: 120,
  },
  updateText: {
    color: "white",
  },
  deleteBtn: {
    alignItems: "center",
    backgroundColor: "#ff3333",
    padding: 10,
    borderRadius: 5,
    marginRight: 20,
    width: 120,
  },
  deleteText: {
    color: "white",
  },
  headerTextCategory: {
    fontSize: 25,
    textAlign: "center",
  },
  addNewBtn: {
    alignItems: "center",
    backgroundColor: "#0d4db5",
    padding: 10,
    borderRadius: 5,
    marginRight: 20,
    marginTop: 10,
    maxWidth: "100%",
    minWidth: "100%",
  },
  addNewOuter: {
    display: "flex",
    flexDirection: "column",
    //   justifyContent:"space-between"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 105,
    borderColor:'#000',
    borderWidth:2
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});



