import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Tabs from '../shared/Tabs';

export default function home() {

    return (
        <View>
            <Tabs pageIndex={0} />
            <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>This is home</Text>
            </View>
        </View>
    )
}