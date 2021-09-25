import React, { useState, useEffect } from 'react'
import { Tab } from 'react-native-elements';
import { StyleSheet } from 'react-native';

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
        <Tab value={index} onChange={tabSelected} style={styles.tabContainer}>
            <Tab.Item title="Vehicle Ads" />
            <Tab.Item title="Spare Parts Ads" />
        </Tab>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: '#076AE0'
    }
})