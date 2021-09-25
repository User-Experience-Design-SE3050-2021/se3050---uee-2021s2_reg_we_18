import React, { useState, useEffect } from 'react'
import { Tab } from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default function CategoryTabs({ pageIndex, navigation }) {

    const [index, setIndex] = useState(pageIndex);

    const tabSelected = (i) => {
        setIndex(i)
    }

    useEffect(() => {
        switch (index) {
            case 0:
                navigation.navigate('Add')
                break;
            case 1:
                navigation.navigate('List')
                break;
            default:
                break;
        }
    },[index])

    return (
        <Tab value={index} onChange={tabSelected} style={styles.tabContainer}>
            <Tab.Item title="Add" />
            <Tab.Item title="List" />
        </Tab>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: '#076AE0'
    }
})