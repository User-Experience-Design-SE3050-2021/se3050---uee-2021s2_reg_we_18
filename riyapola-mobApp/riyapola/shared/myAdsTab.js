import React, { useState, useEffect } from 'react'
import { Tab } from 'react-native-elements';
import { View } from 'react-native';

export default function myAdsTab({ pageIndex, navigation }) {

    const [index, setIndex] = useState(pageIndex);

    const tabSelected = (i) => {
        setIndex(i)
    }

    useEffect(() => {
        switch (index) {
            case 0:
                navigation.navigate('vehicleMyAds')
                break;
            case 1:
                navigation.navigate('sparePartsMyAds')
                break;
            default:
                break;
        }
    },[index])

    return (
        <View style={{backgroundColor: '#076AE0'}}>
        <Tab value={index} onChange={tabSelected} >
            <Tab.Item title="Vehicle" titleStyle={{color: 'white'}} />
            <Tab.Item title="SpareParts" titleStyle={{color: 'white'}} />
        </Tab>
        </View>
    )
}
