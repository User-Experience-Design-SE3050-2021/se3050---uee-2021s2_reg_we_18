import React from 'react';
import { View } from 'react-native';
import Filter from '../shared/Fliter';
import Tabs from '../shared/Tabs';
import AllVehicleAds from './allVehicleAds';

export default function allAds({navigation}) {
    return (
        <View>
            <Tabs pageIndex={1} navigation={navigation} />
            <Filter title="Vehicles" />
            <AllVehicleAds />
        </View>

    )
}

