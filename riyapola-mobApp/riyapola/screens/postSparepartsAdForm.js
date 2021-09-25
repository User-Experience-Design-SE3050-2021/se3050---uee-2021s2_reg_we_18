import React from 'react'
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { globalStyles } from '../styles/global';
import { RadioButton, Button, Divider } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler';



export default function postSparepartsAdForm() {

    const [checked, setChecked] = React.useState('first');
    const [selectedValue, setSelectedValue] = useState("Select Spare Part Category");
    return (
        <ScrollView>
            <View style={globalStyles.container}>
                <Text style={globalStyles.topicForm}>Post Your Spare Part Ad</Text>
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
                    numberOfLines={20}
                    multiline={true}
                />
                <Divider style={{ marginBottom: 20 }} />
                <Text>Delivery Available?</Text>
                <CheckBox title='Yes' style={globalStyles.input}/>
                <CheckBox title='No' style={globalStyles.input}/>
                <Divider style={{ marginBottom: 20 }} />
                <Text>Location</Text>
                <Divider style={{ marginBottom: 20 }} />
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
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
                <Divider style={{ marginBottom: 20 }} />
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                    <View>
                        <Text>Price</Text>
                        <TextInput placeholder="Rs." style={globalStyles.input} />
                    </View>
                    <View>
                        <CheckBox title='Negotiable' style={globalStyles.input}/>
                    </View>
                </View>
                <Divider style={{ marginBottom: 20 }} />
                <Text>Photo</Text>
                <TextInput placeholder="Add Photos" style={globalStyles.input} />
                <Divider style={{ marginBottom: 20 }} />
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
        height: 150,
        borderColor: "#076AE0",
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 20,
        justifyContent: "flex-start"
    }

})