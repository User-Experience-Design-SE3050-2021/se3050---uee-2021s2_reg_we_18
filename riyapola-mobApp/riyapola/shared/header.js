import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.headerBackground}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <MaterialIcons name='person-add' size={28} onPress={() => navigation.navigate('signup')} style={styles.signupIcon}  />
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