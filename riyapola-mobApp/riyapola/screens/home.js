import React from 'react';
import { View} from 'react-native';
import Tabs from '../shared/Tabs';
import SparepartsAds from './allSparepartAds';
import Filter from '../shared/Fliter';

export default function home({ navigation }) {
    return (

        <View>
            <Tabs pageIndex={0} navigation={navigation} />
            <Filter title="SpareParts"/>
            <SparepartsAds/>
        </View>
    )
}