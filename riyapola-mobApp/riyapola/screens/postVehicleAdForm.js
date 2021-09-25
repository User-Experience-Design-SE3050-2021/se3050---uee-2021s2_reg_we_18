import React from 'react';
import { View, TextInput, Text, Picker } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/global';
import { CheckBox } from 'react-native-elements';
import Button from '../shared/button'

export default function postVehicleAdForm() {

    return (
        <ScrollView>
            <View style={globalStyles.container}>
                <Text style={globalStyles.topicForm}>Post Your Vehicle Ad</Text>
                <Text>Condition</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }} >
                    <CheckBox title='Registered' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={true} />
                    <CheckBox title='Unregistered' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={false} />
                </View>
                <Text>Title</Text>
                <TextInput placeholder="Advertisement Title" style={globalStyles.input} />
                <View style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-between' }} >
                    <View>
                        <Text>Vehicle Type</Text>
                        <Picker style={globalStyles.select}  >
                            <Picker.Item label="Select Type" value="select" /> 
                            <Picker.Item label="Car" value="Car" /> 
                            <Picker.Item label="Van" value="Van" /> 
                        </Picker>
                    </View>
                    <View>
                        <Text>Vehicle Make</Text>
                        <Picker style={globalStyles.select}  >
                            <Picker.Item label="Select Make" value="select" /> 
                            <Picker.Item label="Toyota" value="Toyota" /> 
                            <Picker.Item label="Nissan" value="Nissan" /> 
                        </Picker>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-between' }} >
                    <View>
                        <Text>Vehicle Model</Text>
                        <Picker style={globalStyles.select}  >
                            <Picker.Item label="Select Model" value="select" /> 
                            <Picker.Item label="Vitz" value="Vitz" /> 
                            <Picker.Item label="Alto" value="Alto" /> 
                        </Picker>
                    </View>
                    <View>
                        <Text>Body Type</Text>
                        <Picker style={globalStyles.select}  >
                            <Picker.Item label="Select Body" value="select" /> 
                            <Picker.Item label="Sedan" value="Sedan" /> 
                            <Picker.Item label="Hatchback" value="Hatchback" /> 
                        </Picker>
                    </View>
                </View>
                <Text>Description</Text>
                <TextInput style={globalStyles.input} placeholder='Enter your description' />
                <View style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-between' }} >
                    <View>
                        <Text>Location</Text>
                        <Picker style={globalStyles.select}  >
                            <Picker.Item label="Select Location" value="select" /> 
                            <Picker.Item label="Kandy" value="Kandy" /> 
                            <Picker.Item label="Colombo" value="Colombo" /> 
                        </Picker>
                    </View>
                    <View>
                        <Text>Engine Capacity</Text>
                        <TextInput placeholder="Enter Capacity(cc)" style={globalStyles.input} />
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-between' }} >
                    <View>
                        <Text>Transmission</Text>
                        <Picker style={globalStyles.select}  >
                            <Picker.Item label="Select Transmission" value="select" /> 
                            <Picker.Item label="Automatic" value="Automatic" /> 
                            <Picker.Item label="Manual" value="Manual" /> 
                        </Picker>
                    </View>
                    <View>
                        <Text>Fuel Type</Text>
                        <Picker style={globalStyles.select}  >
                            <Picker.Item label="Select Fuel Type" value="select" /> 
                            <Picker.Item label="Petrol" value="Petrol" /> 
                            <Picker.Item label="Diesel" value="Diesel" /> 
                        </Picker>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-between' }} >
                    <View>
                        <Text>Price</Text>
                        <TextInput placeholder="Enter Price(Rs.)" style={globalStyles.input} />
                        <CheckBox title='Negotiable' />
                    </View>
                    <View>
                        <Text>Mileage</Text>
                        <TextInput placeholder="Enter Mileage(km)" style={globalStyles.input} />
                    </View>
                </View>
            </View>
            <Button text='Post Ad' />
        </ScrollView>
    )
}