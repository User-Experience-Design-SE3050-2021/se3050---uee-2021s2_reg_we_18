import React from 'react'
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { globalStyles } from '../styles/global';
import { RadioButton, Button, Divider } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler';



export default function postSparepartsAdForm() {

    const [selectedValue, setSelectedValue] = useState("Select Spare Part Category");
    return (
        <ScrollView>
            <View style={globalStyles.container}>
                <Text style={globalStyles.topicForm}>Post Your Spare Part Ad</Text>
                <Text>Condition</Text>
                <View style={{ display: 'flex', flexDirection: 'row', right: 20 }} >
                    <CheckBox title='New' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={true} />
                    <CheckBox title='Used' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={false} />
                    <CheckBox title='Recondition' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={false} />
                </View>
                <Text>Spare Part Category</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={globalStyles.input}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Select Spare Part Category" value="java" />
                    <Picker.Item label="Doors" value="doors" />
                </Picker>
                <Text>Title</Text>
                <TextInput style={globalStyles.input} placeholder="Post Title" />
                <Text>Description</Text>
                <TextInput
                    style={styles.textarea}
                    placeholder="Type something.."
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                />
                <Text>Delivery Available?</Text>
                <View style={{ display: 'flex', flexDirection: 'row', right: 20 }} >
                    <CheckBox title='Yes' style={globalStyles.input} />
                    <CheckBox title='No' style={globalStyles.input} />
                </View>
                <Text>Location</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
                    <View>
                        <Text>District</Text>
                        <Picker
                            selectedValue={selectedValue}
                            style={globalStyles.select}
                        >
                            <Picker.Item label="Your District" value="" />
                            <Picker.Item label="Colombo" value="colombo" />
                            <Picker.Item label="Galle" value="galle" />
                            <Picker.Item label="Gamapaha" value="gampaha" />
                        </Picker>
                    </View>
                    <View>
                        <Text>Area</Text>
                        <Picker
                            selectedValue={selectedValue}
                            style={globalStyles.select}
                        >
                            <Picker.Item label="Your Area" value="" />
                            <Picker.Item label="Kadana" value="kadana" />
                            <Picker.Item label="Wattala" value="wattala" />
                            <Picker.Item label="Ja-ela" value="jaela" />
                        </Picker>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                    <View>
                        <Text>Price</Text>
                        <TextInput placeholder="Rs." style={globalStyles.input} />
                    </View>
                    <View>
                        <CheckBox title='Negotiable' style={globalStyles.input} />
                    </View>
                </View>
                <Text>Photo</Text>
                <TextInput placeholder="Add Photos" style={globalStyles.input} />
                <Text h4>Contact Details</Text>
                <Text>Email</Text>
                <TextInput placeholder="sample@gmail.com" style={globalStyles.input} />
                <Button icon="camera" style={globalStyles.btn} mode="contained" onPress={() => console.log('Pressed')}>
                    Post Your Ad
                </Button>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    radio: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
        color: "#000"
    },
    textarea: {
        height: 100,
        borderColor: "#076AE0",
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 10,
        justifyContent: 'flex-start',
        textAlignVertical: 'top'
    }

})