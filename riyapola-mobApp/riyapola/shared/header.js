import React, { useState ,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import AsyncStorage from "@react-native-async-storage/async-storage";
// import {NavigationActions} from '@react-navigation/native';
// import {useNavigation} from '@react-navigation/native';


export default function header({ navigation, title }) {
    const [user, setUser] = useState(null)
     useEffect(() => {
            AsyncStorage.getItem('user', (err, result) => {
                console.log("result in header",result);
                if(result){
                // result=JSON.parse(result)
                console.log("result in header in if",result);
                // setUser({
                //     _id:result._id,
                //     name : result.name,
                //     email :result.email,
                //     password : result.password,
                //     type : result.type,
                //     phoneNumber :result.phoneNumber,
                //     wishList:result.wishList,
                //     image:result.image
                //     })
                setUser(JSON.parse(result))
                console.log("if")
                console.log("useefect in header user ",user)
            }
            else{
                // alert('Please login to publish advertisements')
                // navigation.navigate('login')
                setUser(null)
                console.log("else")
            }
            //    { result ? setUser({...result}) :}
                console.log("useefect in header user ",user)
            })
     }, [])
     useEffect(() => {
         console.log('useEffect user',user)
     }, [user])
    //  const resetAction = NavigationActions.reset({
    //     index: 0,                       
    //     actions: [NavigationActions.navigate({ routeName: 'Home' })],
    //   });
    const openMenu = () => {
        navigation.openDrawer();
    }
    // const resetAction = NavigationAction.reset({
    //     index: 0,                       
    //     actions: [NavigationAction.navigate({ routeName: 'Home' })],
    //   });
    const signOut=()=>{
        AsyncStorage.removeItem("user");
        // navigation.dispatch(resetAction);
        // const navigation = useNavigation();

        // navigation.reset({
        //         index: 0,
        //         routes: [{name: 'Events'}],
        //       });
        //   onPress={() =>  this.props.navigation.dispatch(resetAction)}
        navigation.navigate('login')
        console.log("signout")
        setUser(null)
        console.log("signout user ",user)
    }
  
    return (
        <View style={styles.headerBackground}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            { user ? (<MaterialIcons name='person-remove'  size={28} onPress={signOut} style={styles.signupIcon} />)
            :<MaterialIcons name='person-add' size={28} onPress={() => navigation.navigate('signup')} style={styles.signupIcon}  />
        }
            <View style={styles.header}>
                <Text style={styles.headerText} onPress={() => {
                    navigation.navigate('Home')
                }}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        color: 'white'
    },
    headerBackground: {
        backgroundColor: '#076AE0'
    },
    signupIcon: {
        position: 'absolute',
        right: 16,
        color: 'white'
    },
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: 16,
        color: 'white'
    },
    headerBackground: {
        backgroundColor: '#076AE0'
    },
    signupIcon: {
        position: 'absolute',
        right: 16,
        color: 'white'
    }
})