import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, Platform, StyleSheet, Picker } from 'react-native';
import { globalStyles } from '../styles/global';
import { Divider, Headline, Button, RadioButton, List } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import {districts} from '../utils/districts';

export default function updateSparepartsAd() {

    const [selectedValue, setSelectedValue] = useState("Select Spare Part Category");
    const [pics, setImages] = useState([]);
    const [isAddPhone, setisAddPhone] = useState(true);
    const [phone, setPhone] = useState(null);
    const [phones, setPhones] = useState([]);
    const [condition, setCondition] = useState();
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
            if (result)
                setUser(JSON.parse(result))
            else {
                alert('Please login to publish advertisements')
                navigation.navigate('login')
            }
        })

        axios.get('https://riyapola.herokuapp.com/spareparts/616181036ebd080004beb816').then((res) => {
            setAd(res.data);
            console.log(res.data.price)
            setCondition(res.data.condition)
            setImages(res.data.images)
            setPhones(res.data.contactNumbers)

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
        axios.put('https://riyapola.herokuapp.com/spareparts/616181036ebd080004beb816', { ...ad, status: "pending" }).then((res) => {
            res.status === 200 ? alert('Ad submitted for reviewing') : alert('Ad submission failed')
            setactionWaiting(false)
        }).catch((err) => {
            console.log(err)
            alert('Rejected')
            setactionWaiting(false)
        })
    }

    const handleDelete = () => {
        setactionWaiting(true)
        axios.delete('https://riyapola.herokuapp.com/spareparts/616181036ebd080004beb816').then((res) => {
            res.status === 200 ? alert('Ad Successfully Deleted!') : alert('Ad deletion fail')
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
                <Text style={globalStyles.topicForm}>Post Your Spare Part Ad</Text>
                <Text style={globalStyles.label}>Condition</Text>
                <View style={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center' }} >
                    <RadioButton value='new' color='#076AE0' status={condition === 'new' ? 'checked' : 'unchecked'} onPress={() => setCondition('new')} style={{ flex: 1 }} />
                    <Text>New</Text>
                    <RadioButton value='used' color='#076AE0' status={condition === 'used' ? 'checked' : 'unchecked'} onPress={() => setCondition('used')} style={{ flex: 1 }} />
                    <Text>Used</Text>
                    <RadioButton value='reconditioned' color='#076AE0' status={condition === 'reconditioned' ? 'checked' : 'unchecked'} onPress={() => setCondition('reconditioned')} style={{ flex: 1 }} />
                    <Text>Recondition</Text>
                </View>
                <Text style={globalStyles.label}>Spare Part Category</Text>
                <Picker
                    selectedValue={ad && ad.category ? ad.category : 'Select Spare Part Category'}
                    style={globalStyles.input}
                    onValueChange={(itemValue, itemIndex) => setAd({ ...ad, category: itemValue })}
                >
                    <Picker.Item label="Select Spare Part Category" value="java" />
                    {/* <Picker.Item label={ad.category ? ad.category : (null)} value={ad.category ? ad.category : (null)} /> */}
                </Picker>
                <Text style={globalStyles.label}>Title</Text>
                <TextInput style={globalStyles.input} value={ad && ad.title ? ad.title : null} placeholder="Post Title" onChangeText={(text) => setAd({ ...ad, title: text })} />
                <Text style={globalStyles.label}>Description</Text>
                <TextInput
                    style={globalStyles.textarea}
                    placeholder="Type something.."
                    placeholderTextColor="grey"
                    value={ad && ad.description ? ad.description : null}
                    numberOfLines={10}
                    multiline={true}
                    onChangeText={(text) => setAd({ ...ad, description: text })}
                />
                <Text style={globalStyles.label}>Delivery Available?</Text>
                <View style={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center' }}  >
                    <RadioButton value='yes' status={ad && ad.delivery ? 'checked' : 'unchecked'} color='#076AE0' onPress={() => setAd({ ...ad, delivery: true })} style={{ flex: 1 }} />
                    <Text>Yes</Text>
                    <RadioButton value='no' status={ad && !ad.delivery ? 'checked' : 'unchecked'} color='#076AE0' onPress={() => setAd({ ...ad, delivery: false })} style={{ flex: 1 }} />
                    <Text>No</Text>
                </View>
                <Text style={globalStyles.label}>Location</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Picker
                        selectedValue={ad && ad.location ? ad.location : null}
                        style={globalStyles.select}
                        onValueChange={(text) => setAd({ ...ad, location: text })}
                    >
                        <Picker.Item label="Select Your Location" value="" />
                        {dist ? dist.map((dist) => {
                            return (
                                <Picker.Item label={dist} value={dist} />
                            )
                        }) : null}
                    </Picker>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                    <View style={{ flex: 1 }}>
                        <Text style={globalStyles.label}>Price</Text>
                        <TextInput style={globalStyles.input} keyboardType="numeric" value={ad && ad.price ? ad.price.toString() : null} onChangeText={(text) => setAd({ ...ad, price: text })} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                        <RadioButton value='negotiable' status={ad && ad.negotiable ? 'checked' : 'unchecked'} color='#076AE0' onPress={() => setAd({ ...ad, negotiable: !ad.negotiable })} />
                        <Text>Negotiable</Text>
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
                <View>
                    <Button style={globalStyles.btn} mode="contained" onPress={handleSubmit} loading={actionWaiting} disabled={actionWaiting} >
                        Update Your Ad
                    </Button>
                </View>
                <View style={{ paddingTop: 5 }}>
                    <Button mode="contained" color="red" onPress={handleDelete} loading={actionWaiting} disabled={actionWaiting} >
                        Delete Your Ad
                    </Button>
                </View>
            </View>
        </ScrollView>
    )

}