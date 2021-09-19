import React from 'react';
import { View, Text } from 'react-native';
import Tabs from '../shared/Tabs';
import { globalStyles } from '../styles/global';

export default function allAds({navigation}) {
    return (
        <View>
            <Tabs pageIndex={1} navigation={navigation} />
            <View style={globalStyles.container}>
                <Text style={globalStyles.titleText}>All Ads screen</Text>
            </View>
        </View>

    )
}

