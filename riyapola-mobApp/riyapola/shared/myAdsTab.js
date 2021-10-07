import React, { useState, useEffect } from 'react'
import { Tab } from 'react-native-elements';
import { StyleSheet } from 'react-native';

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
        <Tab value={index} onChange={tabSelected} style={styles.tabContainer}>
            <Tab.Item title="Vehicle" />
            <Tab.Item title="SpareParts" />
        </Tab>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: '#076AE0'
    }
})