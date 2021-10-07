import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, Picker, Image, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/global';
import { Divider, Headline, RadioButton } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import CustButton from '../shared/button';
import * as ImagePicker from 'expo-image-picker';

export default function postVehicleAdForm() {

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

      const [images, setImages] = useState([]);

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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
        setImages([...images,result.uri]);
    }
  };

  const removeIcon = (image) => {

      setImages(images.filter(item => item !== image.uri));
  }

    return (
        <ScrollView>
            <View style={globalStyles.container}>
                <Text style={globalStyles.topicForm}>Post Your Vehicle Ad</Text>
                <Text style={globalStyles.label}>Condition</Text>
                <View style={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center' }} >
                    <RadioButton value='Registered' color='#076AE0' status='checked'  style={{flex:1}} />
                    <Text>Registered</Text>
                    <RadioButton value='Unregistered' color='#076AE0' status='unchecked' style={{flex:1}} />
                    <Text>Unregistered</Text>
                </View>
                <Text style={globalStyles.label}>Title</Text>
                <TextInput placeholder="Advertisement Title" style={globalStyles.input} />
                <View style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-between', flex:1 }} >
                    <View style={{flex:1}}>
                        <Text style={globalStyles.label}>Vehicle Type</Text>
                        <Picker style={globalStyles.select}  >
                            <Picker.Item label="Select Type" value="select" /> 
                            <Picker.Item label="Car" value="Car" /> 
                            <Picker.Item label="Van" value="Van" /> 
                        </Picker>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={globalStyles.label}>Vehicle Make</Text>
                        <Picker style={globalStyles.select}  >
                            <Picker.Item label="Select Make" value="select" /> 
                            <Picker.Item label="Toyota" value="Toyota" /> 
                            <Picker.Item label="Nissan" value="Nissan" /> 
                        </Picker>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-between', flex:1 }} >
                    <View style={{flex:1}}>
                        <Text style={globalStyles.label}>Vehicle Model</Text>
                        <Picker style={globalStyles.select}  >
                            <Picker.Item label="Select Model" value="select" /> 
                            <Picker.Item label="Vitz" value="Vitz" /> 
                            <Picker.Item label="Alto" value="Alto" /> 
                        </Picker>
                    </View>
                    <View style={globalStyles.label}>
                        <Text style={globalStyles.label}>Body Type</Text>
                        <Picker style={globalStyles.select}  >
                            <Picker.Item label="Select Body" value="select" /> 
                            <Picker.Item label="Sedan" value="Sedan" /> 
                            <Picker.Item label="Hatchback" value="Hatchback" /> 
                        </Picker>
                    </View>
                </View>
                <Text style={globalStyles.label}>Description</Text>
                <TextInput style={globalStyles.input} placeholder='Enter your description' />
                <View style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-between', flex: 1 }} >
                    <View style={{flex:1}}>
                        <Text style={globalStyles.label}>Location</Text>
                        <Picker style={globalStyles.select}  >
                            <Picker.Item label="Select Location" value="select" /> 
                            <Picker.Item label="Kandy" value="Kandy" /> 
                            <Picker.Item label="Colombo" value="Colombo" /> 
                        </Picker>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={globalStyles.label}>Engine Capacity</Text>
                        <TextInput placeholder="Enter Capacity(cc)" style={globalStyles.input} />
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-between', flex: 1 }} >
                    <View style={{flex:1}}>
                        <Text style={globalStyles.label}>Transmission</Text>
                        <Picker style={globalStyles.select}  >
                            <Picker.Item label="Select Transmission" value="select" /> 
                            <Picker.Item label="Automatic" value="Automatic" /> 
                            <Picker.Item label="Manual" value="Manual" /> 
                        </Picker>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={globalStyles.label}>Fuel Type</Text>
                        <Picker style={globalStyles.select}  >
                            <Picker.Item label="Select Fuel Type" value="select" /> 
                            <Picker.Item label="Petrol" value="Petrol" /> 
                            <Picker.Item label="Diesel" value="Diesel" /> 
                        </Picker>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-between', flex:1 }} >
                    <View style={{flex:1}}>
                        <Text style={globalStyles.label}>Price</Text>
                        <TextInput placeholder="Enter Price(Rs.)" style={globalStyles.input} />
                        <View style={{display:'flex',flexDirection:'row',alignItems: 'center',flex: 1}}>
                            <RadioButton value='Negotiable' color='#076AE0' />
                            <Text>Negotiable</Text>
                        </View>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{top: 0, fontWeight: 'bold'}}>Mileage</Text>
                        <TextInput placeholder="Enter Mileage(km)" style={globalStyles.input} />
                    </View>
                </View>
                <View >
                    <Divider style={{height: 3}} />
                    <Headline style={{fontSize: 18, fontWeight: 'bold'}}>Photos</Headline>
                <ScrollView horizontal>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    {images.length > 0 && images.map(image => 
                    <View style={{display: 'flex', alignItems: 'flex-end', marginEnd: 10}} >
                    <Icon name='clear' color='red' onPress={removeIcon.bind(this,{ uri: image })} size={36} />
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
            </View>
            <CustButton text='Post Ad' />
        </ScrollView>
    )
}