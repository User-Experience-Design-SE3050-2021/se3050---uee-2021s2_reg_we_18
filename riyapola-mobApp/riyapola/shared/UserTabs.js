import React, { useState, useEffect } from 'react'
import { Tab } from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default function UserTabs({ pageIndex, navigation }) {

    const [index, setIndex] = useState(pageIndex);

    const tabSelected = (i) => {
        setIndex(i)
    }

    useEffect(() => {
        switch (index) {
            case 0:
                navigation.navigate('login')
                break;
            case 1:
                navigation.navigate('signup')
                break;
            default:
                break;
        }
    },[index])

    return (
        <Tab value={index} onChange={tabSelected} style={styles.tabContainer}>
            <Tab.Item title="Login" />
            <Tab.Item title="Create" />
        </Tab>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: '#076AE0'
    }
})