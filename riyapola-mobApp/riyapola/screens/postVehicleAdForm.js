import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Tabs from '../shared/Tabs';

export default function postVehicleAdForm({navigation}) {

    return (
        <View>
            <Tabs pageIndex={2} navigation={navigation} />
            <View style={globalStyles.container}>
            <Text style={globalStyles.topicForm}>Post Your Vehicle Ad</Text>
            <Text>Title</Text>
            <TextInput placeholder="Advertisement Title" style={globalStyles.input}   onChangeText={value => this.setState({ comment: value })}  />
            </View>
        </View>
    )
}