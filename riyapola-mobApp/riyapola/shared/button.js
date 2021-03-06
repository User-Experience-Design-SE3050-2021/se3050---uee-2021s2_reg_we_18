import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 14,
        marginEnd: 10,
        marginStart: 10,
        marginBottom: 10,
        backgroundColor: '#076AE0'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})