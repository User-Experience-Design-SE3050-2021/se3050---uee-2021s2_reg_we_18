import React, { useState, useEffect } from 'react'
import { Tab } from 'react-native-elements';
import { StyleSheet,View } from 'react-native';

export default function AdminTabs({ pageIndex, navigation }) {

    const [index, setIndex] = useState(pageIndex);

    const tabSelected = (i) => {
        setIndex(i)
    }

    useEffect(() => {
        switch (index) {
            case 0:
                navigation.navigate('vehicleAdActions')
                break;
            case 1:
                navigation.navigate('sparepartsAdActions')
                break;
            default:
                break;
        }
    },[index])

    return (
        <View style={{backgroundColor: '#076AE0'}}>
        <Tab value={index} onChange={tabSelected} >
            <Tab.Item title="Vehicle Ads" titleStyle={{color: 'white'}} />
            <Tab.Item title="Spare Parts Ads" titleStyle={{color: 'white'}} />
        </Tab>
        </View>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: '#076AE0'
    }
})