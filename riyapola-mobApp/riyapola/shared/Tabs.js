import React, { useState, useEffect } from 'react'
import { Tab } from 'react-native-elements';
import { View } from 'react-native'

export default function Tabs({ pageIndex, navigation }) {

    const [index, setIndex] = useState(pageIndex);

    useEffect(() => {
        switch (index) {
            case 0:
                navigation.navigate('Home')
                break;
            case 1:
                navigation.navigate('allads')
                break;
            case 2:
                navigation.navigate('postAd')
                break;
            default:
                break;
        }
    },[index])

    return (
        <View style={{backgroundColor: '#076AE0'}}>
        <Tab value={index} onChange={setIndex}  >
            <Tab.Item title="Home" titleStyle={{color: 'white'}} />
            <Tab.Item title="All Ads" titleStyle={{color: 'white'}} />
            <Tab.Item title="Post Ad" titleStyle={{color: 'white'}} />
        </Tab>
        </View>
    )
}
