import React from 'react';
import { View } from 'react-native';
import { Card, Title, Headline } from 'react-native-paper';
import Tabs from '../shared/Tabs';
import SparepartsAds from './allSparepartAds';
import Filter from '../shared/Fliter';

export default function home({ navigation }) {
    return (
        <View style={{flex:1}}>
            <Tabs pageIndex={0} navigation={navigation} style={{flex:1}}/>
            <Filter title="SpareParts" style={{flex:1}}/>
            <SparepartsAds style={{flex:1}}/>
        </View>
    )
}