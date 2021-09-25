import React from 'react';
import { View } from 'react-native';
import Button from '../shared/button';
import { globalStyles } from '../styles/global';
import Tabs from '../shared/Tabs';

export default function postAd({navigation}) {

    return (
        <View>
            <Tabs pageIndex={2} navigation={navigation} />
            <View style={globalStyles.container}>
            <Button text="Post Vehicle Ad"   onPress={() => navigation.navigate('VehicleAdForm')} />
            <Button text="Post Spare Part Ad" onPress={() => navigation.navigate('SparepartAdForm') }/>
            </View>
        </View>
    )
}