import React from 'react';
import { View } from 'react-native';
import Filter from '../shared/Fliter';
import Tabs from '../shared/Tabs';
import AllVehicleAds from './allVehicleAds';

export default function allAds({navigation}) {
    return (
        <View style={{flex: 1}}>
            <Tabs pageIndex={1} navigation={navigation} style={{flex: 1}} />
            <Filter title="Vehicles" navigation={navigation} style={{flex: 1}}/>
            <AllVehicleAds navigation={navigation} style={{flex: 1}}/>
        </View>

    )
}

