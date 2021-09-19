import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { CheckBox } from 'react-native-elements';
import Button from '../shared/button'

export default function postVehicleAdForm() {

    return (
        <View>
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
                        <TextInput placeholder="Select Vehicle Type" style={globalStyles.input} />
                    </View>
                    <View>
                        <Text>Vehicle Make</Text>
                        <TextInput placeholder="Select Vehicle Make" style={globalStyles.input} />
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-between' }} >
                    <View>
                        <Text>Vehicle Model</Text>
                        <TextInput placeholder="Select Vehicle Model" style={globalStyles.input} />
                    </View>
                    <View>
                        <Text>Body Type</Text>
                        <TextInput placeholder="Select Vehicle Body" style={globalStyles.input} />
                    </View>
                </View>
                <Text>Description</Text>
                <TextInput style={globalStyles.input} placeholder='Enter your description' />
                <View style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-between' }} >
                    <View>
                        <Text>Location</Text>
                        <TextInput placeholder="Select Location" style={globalStyles.input} />
                    </View>
                    <View>
                        <Text>Engine Capacity</Text>
                        <TextInput placeholder="Select Capacity (cc)" style={globalStyles.input} />
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-between' }} >
                    <View>
                        <Text>Transmission</Text>
                        <TextInput placeholder="Select Transmission" style={globalStyles.input} />
                    </View>
                    <View>
                        <Text>Fuel Type</Text>
                        <TextInput placeholder="Select Fuel Type" style={globalStyles.input} />
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-between' }} >
                    <View>
                        <Text>Price</Text>
                        <TextInput placeholder="Enter Price (Rs.)" style={globalStyles.input} />
                    </View>
                    <View>
                        <Text>Mieage</Text>
                        <TextInput placeholder="Enter Mileage (cc)" style={globalStyles.input} />
                    </View>
                </View>
            </View>
            <Button text='Post Ad' />
        </View>
    )
}