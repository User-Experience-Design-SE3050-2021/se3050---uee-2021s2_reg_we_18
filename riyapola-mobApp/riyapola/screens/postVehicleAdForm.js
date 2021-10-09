import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, Picker, Image, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/global';
import { Divider, Headline, RadioButton, List, Button } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import { districts } from '../utils/districts';


export default function postVehicleAdForm({ navigation }) {

    const [pics, setImages] = useState([]);
    const [isAddPhone, setisAddPhone] = useState(true);
    const [phone, setPhone] = useState(null);
    const [phones, setPhones] = useState([]);
    const [condition, setCondition] = useState('registered');
    const [ad, setAd] = useState(null);
    const [user, setUser] = useState(null);
    const [actionWaiting, setactionWaiting] = useState(false);
    const [dist, setDist] = useState(districts);

    useEffect(() => {

        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
        AsyncStorage.getItem('user', (err, result) => {
            if (result) {
                setUser(JSON.parse(result))
                console.log("resultuser in vehicle ad form", user);
            }
            else {
                alert('Please login to publish advertisements')
                navigation.navigate('login')
            }
        })
    }, []);

    useEffect(() => {
        setPhone(null)
        ad ? setAd({ ...ad, contactNumbers: phones }) : null
    }, [phones]);

    useEffect(() => {
        ad ? setAd({ ...ad, images: pics }) : null
    }, [pics]);

    useEffect(() => {
        setAd({ ...ad, condition })
    }, [condition]);

    useEffect(() => {
        if (!ad)
            setAd({
                negotiable: true,
                images: [],
                contactNumbers: [],
                title: null,
                description: null,
                status: "pending",
                year: 2001,
                make: null,
                model: null,
                category: null,
                location: null,
                bodyType: null,
                transmission: null,
                condition: "registered",
                engineCapacity: null,
                fuelType: null,
                mileage: null,
                price: null,
                userId: null
            });
        else if (!ad.userId) {
            setAd({ ...ad, userId: user._id })
            setPhones([...phones, user.phoneNumber])
        }
    }, [user]);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            base64: true,
            allowsMultipleSelection: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImages([...pics, result.base64]);
        }
    };

    const removeIcon = (image) => {

        setImages(pics.filter(item => item !== image.base64));
    }

    const handleSubmit = () => {
        setactionWaiting(true)
        axios.post('https://riyapola.herokuapp.com/vehicle', ad).then((res) => {
            res.status === 200 ? alert('Ad submitted for reviewing') : alert('Ad submission failed')
            setactionWaiting(false)
        }).catch((err) => {
            console.log(err)
            alert('Rejected')
            setactionWaiting(false)
        })
    }

    return (
        <ScrollView>
            <View style={globalStyles.container}>
                <Text style={globalStyles.topicForm}>Post Your Vehicle Ad</Text>
                <Text style={globalStyles.label}>Condition</Text>
                <View style={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center' }} >
                    <RadioButton value='registered' color='#076AE0' status={condition === 'registered' ? 'checked' : 'unchecked'} onPress={() => setCondition('registered')} style={{ flex: 1 }} />
                    <Text>Registered</Text>
                    <RadioButton value='unregistered' color='#076AE0' status={condition === 'unregistered' ? 'checked' : 'unchecked'} onPress={() => setCondition('unregistered')} style={{ flex: 1 }} />
                    <Text>Unregistered</Text>
                </View>
                <Text style={globalStyles.label}>Title</Text>
                <TextInput placeholder="Advertisement Title" style={globalStyles.input} onChangeText={(text) => setAd({ ...ad, title: text })} />
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1 }} >
                    <View style={{ flex: 1 }}>
                        <Text style={globalStyles.label}>Vehicle Type</Text>
                        <Picker style={globalStyles.select} selectedValue={ad && ad.category ? ad.category : null} onValueChange={(text) => setAd({ ...ad, category: text })} >
                            <Picker.Item label="Select Type" value="select" />
                            <Picker.Item label="Car" value="Car" />
                            <Picker.Item label="Van" value="Van" />
                        </Picker>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={globalStyles.label}>Vehicle Make</Text>
                        <Picker style={globalStyles.select} selectedValue={ad && ad.make ? ad.make : null} onValueChange={(text) => setAd({ ...ad, make: text })} >
                            <Picker.Item label="Select Make" value="select" />
                            <Picker.Item label="Toyota" value="Toyota" />
                            <Picker.Item label="Nissan" value="Nissan" />
                        </Picker>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1 }} >
                    <View style={{ flex: 1 }}>
                        <Text style={globalStyles.label}>Vehicle Model</Text>
                        <Picker style={globalStyles.select} selectedValue={ad && ad.model ? ad.model : null} onValueChange={(text) => setAd({ ...ad, model: text })} >
                            <Picker.Item label="Select Model" value="select" />
                            <Picker.Item label="Vitz" value="Vitz" />
                            <Picker.Item label="Alto" value="Alto" />
                        </Picker>
                    </View>
                    <View style={globalStyles.label}>
                        <Text style={globalStyles.label}>Body Type</Text>
                        <Picker style={globalStyles.select} selectedValue={ad && ad.bodyType ? ad.bodyType : null} onValueChange={(text) => setAd({ ...ad, bodyType: text })} >
                            <Picker.Item label="Select Body" value="select" />
                            <Picker.Item label="Sedan" value="Sedan" />
                            <Picker.Item label="Hatchback" value="Hatchback" />
                        </Picker>
                    </View>
                </View>
                <Text style={globalStyles.label}>Description</Text>
                <TextInput style={globalStyles.textarea} placeholderTextColor="grey" numberOfLines={10} multiline={true} placeholder='Enter your description' onChangeText={(text) => setAd({ ...ad, description: text })} />
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1 }} >
                    <View style={{ flex: 1 }}>
                        <Text style={globalStyles.label}>Location</Text>
                        <Picker style={globalStyles.select} selectedValue={ad && ad.location ? ad.location : null} onValueChange={(text) => setAd({ ...ad, location: text })} >
                            <Picker.Item label="Select Location" value="select" />
                            {dist ? dist.map((dist) => {
                                return (
                                    <Picker.Item label={dist} value={dist} />
                                )
                            }) : null}
                        </Picker>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={globalStyles.label}>Engine Capacity</Text>
                        <TextInput placeholder="Enter Capacity(cc)" keyboardType="numeric" style={globalStyles.input} onChangeText={(text) => setAd({ ...ad, engineCapacity: text })} />
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1 }} >
                    <View style={{ flex: 1 }}>
                        <Text style={globalStyles.label}>Transmission</Text>
                        <Picker style={globalStyles.select} selectedValue={ad && ad.transmission ? ad.transmission : null} onValueChange={(text) => setAd({ ...ad, transmission: text })}>
                            <Picker.Item label="Select Transmission" value="select" />
                            <Picker.Item label="Automatic" value="Automatic" />
                            <Picker.Item label="Manual" value="Manual" />
                        </Picker>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={globalStyles.label}>Fuel Type</Text>
                        <Picker style={globalStyles.select} selectedValue={ad && ad.fuelType ? ad.fuelType : null} onValueChange={(text) => setAd({ ...ad, fuelType: text })} >
                            <Picker.Item label="Select Fuel Type" value="select" />
                            <Picker.Item label="Petrol" value="Petrol" />
                            <Picker.Item label="Diesel" value="Diesel" />
                        </Picker>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1 }} >
                    <View style={{ flex: 1 }}>
                        <Text style={globalStyles.label}>Price</Text>
                        <TextInput placeholder="Enter Price(Rs.)" keyboardType="numeric" style={globalStyles.input} onChangeText={(text) => setAd({ ...ad, price: text })} />
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                            <RadioButton value='negotiable' status={ad && ad.negotiable ? 'checked' : 'unchecked'} color='#076AE0' onPress={() => setAd({ ...ad, negotiable: !ad.negotiable })} />
                            <Text>Negotiable</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ top: 0, fontWeight: 'bold' }} >Mileage</Text>
                        <TextInput placeholder="Enter Mileage(km)" keyboardType="numeric" style={globalStyles.input} onChangeText={(text) => setAd({ ...ad, mileage: text })} />
                    </View>
                </View>
                <View >
                    <Divider style={{ height: 3 }} />
                    <Headline style={{ fontSize: 18, fontWeight: 'bold' }}>Photos</Headline>
                    <ScrollView horizontal>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            {pics.length > 0 && pics.map(image =>
                                <View style={{ display: 'flex', alignItems: 'flex-end', marginEnd: 10 }} >
                                    <Icon name='clear' color='red' onPress={removeIcon.bind(this, { base64: image })} size={36} />
                                    <Image source={{ uri: 'data:image/jpeg;base64,' + image }} style={{ width: 200, height: 200, padding: 5 }} />
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
                <Divider style={{ height: 3, marginTop: 5 }} />
                <Headline style={{ fontSize: 18, fontWeight: 'bold' }}>Contact Numbers</Headline>
                {!isAddPhone ? <View style={{ flex: 1 }} >
                    <Text style={{ top: 0, fontWeight: 'bold' }} >Phone</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
                        <TextInput placeholder="Enter Phone Number" keyboardType="numeric" onChangeText={setPhone} style={globalStyles.input} />
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
                <List.Section style={{ backgroundColor: '#fff', borderRadius: 12, elevation: 5 }} >
                    {phones ? phones.map((phone) => {
                        return (<List.Item title={phone} style={{ padding: 0, marginBottom: -15 }} left={() => <List.Icon color="#076AE0" icon="phone" />} right={() => <List.Icon color="red" icon="minus-circle" />} onPress={() => setPhones(phones.filter(item => item !== phone))} />)
                    }) : null}
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'flex-end' }} >
                        <Text style={{ color: '#076AE0', marginEnd: 5 }} >Add another phone number</Text>
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
                <Button style={globalStyles.btn} mode="contained" onPress={handleSubmit} loading={actionWaiting} disabled={actionWaiting} >
                    Post Your Ad
                </Button>
            </View>
        </ScrollView>
    )
}