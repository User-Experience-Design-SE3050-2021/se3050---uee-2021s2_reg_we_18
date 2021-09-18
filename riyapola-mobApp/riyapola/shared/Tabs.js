import React,{useState} from 'react'
import { Tab } from 'react-native-elements';
import { StyleSheet } from 'react-native'

export default function Tabs({pageIndex}) {
    
    const [index,setIndex] = useState(pageIndex ? pageIndex : 0);

    return (
        <Tab value={index} onChange={setIndex} style={styles.tabContainer}>
            <Tab.Item title="Home" />
            <Tab.Item title="All Ads" />
            <Tab.Item title="Post Ad" />
        </Tab>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: '#076AE0'
    }
})