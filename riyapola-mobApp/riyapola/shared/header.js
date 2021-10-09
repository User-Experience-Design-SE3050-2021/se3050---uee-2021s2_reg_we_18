import React, { useState ,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function header({ navigation, title }) {
    const [user, setUser] = useState({})
     useEffect(() => {
            AsyncStorage.getItem('user', (err, result) => {
                console.log("result in header",result);
                result =JSON.parse(result);
                setUser({...result})
            })
     }, [])
    const openMenu = () => {
        navigation.openDrawer();
    }
    const signOut=()=>{
        AsyncStorage.removeItem("user");
        navigation.navigate('login')
        console.log("signout")
        setUser({})
        console.log("signout user ",user)
    }
  
    return (
        <View style={styles.headerBackground}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            { user ? (<MaterialIcons name='person-remove'  size={28} onPress={signOut} style={styles.signupIcon} />):<MaterialIcons name='person-add' size={28} onPress={() => navigation.navigate('signup')} style={styles.signupIcon}  />
            
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