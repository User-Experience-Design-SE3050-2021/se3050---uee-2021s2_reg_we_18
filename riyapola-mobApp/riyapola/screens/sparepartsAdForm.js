import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, RadioNodeList } from 'react-native';
import { Divider, Button } from 'react-native-elements'
import { RadioButton } from 'react-native-paper'



export default function sparepartsAdForm() {

    const [checked, setChecked] = React.useState('first');

    return (
        <View style={styles.partsform}>
            <Text style={styles.topic}>Post Your Spare Part Ad</Text>
            <View style={styles.radio}>
                <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                />
                <Text style={{ paddingTop: 6 }}>New</Text>
                <RadioButton
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                />
                <Text style={{ paddingTop: 6 }}>Used</Text>
                <RadioButton
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                />
                <Text style={{ paddingTop: 6 }}>Recondition</Text>

            </View>
            <Text>Spare Part Category</Text>
            <TextInput style={styles.textinput} placeholder="Select Spare Part Category" />
            <Text>Title</Text>
            <TextInput style={styles.textinput} placeholder="Post Title" />
            <Text>Description</Text>
            <TextInput
                style={styles.textarea}
                // underlineColorAndroid="transparent"
                placeholder="Type something.."
                placeholderTextColor="grey"
                numberOfLines={20}
                multiline={true}
            />
            <Button
                title="Clear button"
                type="clear"
            />
        </View>
    )

}

const styles = StyleSheet.create({
    partsform: {
        alignSelf: "stretch"
    },

    topic: {
        fontSize: 24,
        color: '#076AE0',
        marginBottom: 40,
        paddingBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        borderColor: "#076AE0",
        borderWidth: 1,
        paddingLeft: 10,
        fontSize: 16,
        borderRadius: 8,
        marginBottom: 20,
        color: '#000'
    },
    radio: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 50,
        color: "#000"
    },
    textarea: {
        height: 150,
        borderColor: "#076AE0",
        borderRadius: 8,
        borderWidth: 1,
        justifyContent: "flex-start"
    }


})