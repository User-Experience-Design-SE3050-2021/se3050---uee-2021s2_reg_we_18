import React, { useState, useEffect } from 'react'
import { Tab } from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default function Tabs({ pageIndex, navigation }) {

    const [index, setIndex] = useState(pageIndex);

    const tabSelected = (i) => {
        setIndex(i)
    }

    useEffect(() => {
        switch (index) {
            case 0:
                navigation.navigate('Home')
                break;
            case 1:
                navigation.navigate('AllAds')
                break;
            case 2:
                navigation.navigate('postAd')
                break;
            default:
                break;
        }
    },[index])

    return (
        <Tab value={index} onChange={tabSelected} variant='primary' >
            <Tab.Item title="Home" />
            <Tab.Item title="All Ads" />
            <Tab.Item title="Post Ad" />
        </Tab>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: '#076AE0',
    }
})