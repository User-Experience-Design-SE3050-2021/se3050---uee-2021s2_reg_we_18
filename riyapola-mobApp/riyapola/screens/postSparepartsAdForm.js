import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, Platform, StyleSheet, Picker } from 'react-native';
import { globalStyles } from '../styles/global';
import { Divider, Headline, Button, RadioButton, List } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

export default function postSparepartsAdForm() {

    const [selectedValue, setSelectedValue] = useState("Select Spare Part Category");
    const [images, setImages] = useState([]);
    const [isAddPhone, setisAddPhone] = useState(true);
    const [phone, setPhone] = useState(null);
    const [phones, setPhones] = useState([
        '077-1234567',
        '077-2132311',
    ]);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    
    useEffect(() => {
        setPhone(null)
      }, [phones]);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            base64: true,
            allowsMultipleSelection: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImages([...images, result.uri]);
        }
    };

    const removeIcon = (image) => {

        setImages(images.filter(item => item !== image.uri));
    }

    return (
        <ScrollView>
            <View style={globalStyles.container}>
                <Text style={globalStyles.topicForm}>Post Your Spare Part Ad</Text>
                <Text style={globalStyles.label}>Condition</Text>
                <View style={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center' }} >
                    <RadioButton color='#076AE0' status='checked' style={{ flex: 1 }} value='New' />
                    <Text>New</Text>
                    <RadioButton color='#076AE0' status='unchecked' style={{ flex: 1 }} value='Used' />
                    <Text>Used</Text>
                    <RadioButton color='#076AE0' status='unchecked' style={{ flex: 1 }} value='Recondition' />
                    <Text>Recondition</Text>
                </View>
                <Text style={globalStyles.label}>Spare Part Category</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={globalStyles.input}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Select Spare Part Category" value="java" />
                    <Picker.Item label="Doors" value="doors" />
                </Picker>
                <Text style={globalStyles.label}>Title</Text>
                <TextInput style={globalStyles.input} placeholder="Post Title" />
                <Text style={globalStyles.label}>Description</Text>
                <TextInput
                    style={styles.textarea}
                    placeholder="Type something.."
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                />
                <Text style={globalStyles.label}>Delivery Available?</Text>
                <View style={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center' }}  >
                    <RadioButton value='Yes' status='checked' style={{ flex: 1 }} color='#076AE0' />
                    <Text>Yes</Text>
                    <RadioButton value='No' status='unchecked' style={{ flex: 1 }} color='#076AE0' />
                    <Text>No</Text>
                </View>
                <Text style={globalStyles.label}>Location</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                    <View>
                        <Text style={globalStyles.label}>District</Text>
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
                        <Text style={globalStyles.label}>Area</Text>
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
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                    <View style={{ flex: 1 }}>
                        <Text style={globalStyles.label}>Price</Text>
                        <TextInput placeholder="Rs." style={globalStyles.input} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                        <RadioButton value='Negotiable' color='#076AE0' status='checked' />
                        <Text>Negotiable</Text>
                    </View>
                </View>
                <View >
                    <Divider style={{ height: 3 }} />
                    <Headline style={{ fontSize: 18, fontWeight: 'bold' }}>Photos</Headline>
                    <ScrollView horizontal>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            {images.length > 0 && images.map(image =>
                                <View style={{ display: 'flex', alignItems: 'flex-end', marginEnd: 10 }} >
                                    <Icon name='clear' color='red' onPress={removeIcon.bind(this, { uri: image })} size={36} />
                                    <Image source={{ uri: image }} style={{ width: 200, height: 200, padding: 5 }} />
                                </View>)}
                            <Icon
                                name='plus-circle'
                                type='font-awesome'
                                color='#076AE0'
                                size={36}
                                onPress={pickImage} />
                        </View>
                    </ScrollView>
                </View>
                <Divider style={{height: 3, marginTop: 5}} />
                <Headline style={{ fontSize: 18, fontWeight: 'bold' }}>Contact Numbers</Headline>
                {!isAddPhone ? <View style={{ flex: 1 }} >
                    <Text style={{ top: 0, fontWeight: 'bold' }} >Phone</Text>
                    <View style={{display:'flex', flexDirection: 'row', alignItems: 'baseline'}}>
                    <TextInput placeholder="Enter Phone Number" onChangeText={setPhone} style={globalStyles.input} />
                        <Icon
                            name='plus-square'
                            type='font-awesome'
                            color='#076AE0'
                            size={44}
                            onPress={() => {
                                if (phone && phone.length >= 10) {
                                    setisAddPhone(true)
                                    setPhones([...phones, phone])
                                }
                                else
                                    alert('Invalid Phone Number')
                            }}
                            style={{ alignSelf: '' }}
                        />
                    </View>
                </View> : null}
                <List.Section style={{backgroundColor: '#fff', borderRadius: 12, elevation: 5 }} >
                    {phones ? phones.map((phone) => {
                        return (<List.Item title={phone}  style={{padding: 0, marginBottom: -15}} left={() => <List.Icon color="#076AE0" icon="phone" />} right={() => <List.Icon color="red" icon="minus-circle" />} onPress={() => setPhones(phones.filter(item => item !== phone))} />)
                    }): null}
                    <View style={{display: 'flex',flexDirection: 'row',alignItems: 'center', padding: 10, justifyContent: 'flex-end'} } >
                    <Text style={{color: '#076AE0', marginEnd: 5}} >Add another phone number</Text>
                    <Icon
                        name='plus-circle'
                        type='font-awesome'
                        color='#076AE0'
                        size={36}
                        onPress={() => setisAddPhone(false)}
                        disabled={!isAddPhone}
                        />
                    </View>
                </List.Section>
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