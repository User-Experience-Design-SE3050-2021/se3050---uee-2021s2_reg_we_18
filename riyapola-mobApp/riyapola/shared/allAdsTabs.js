import React, { useState, useEffect } from 'react'
import { Tab } from 'react-native-elements';
import { View } from 'react-native'

export default function allAdsTabs({ pageIndex, navigation }) {

    const [index, setIndex] = useState(pageIndex);

    useEffect(() => {
        switch (index) {
            case 0:
                navigation.navigate('allVehicleAds')
                break;
            case 1:
                navigation.navigate('allSparepartAds')
                break;
            default:
                break;
        }
    },[index])

    return (
        <View style={{backgroundColor: '#076AE0'}}>
        <Tab value={index} onChange={setIndex} >
            <Tab.Item title="Vehicles" titleStyle={{color: 'white'}} />
            <Tab.Item title="Spareparts" titleStyle={{color: 'white'}} />
        </Tab>
        </View>
    )
}
