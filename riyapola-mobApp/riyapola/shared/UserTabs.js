import React, { useState, useEffect } from 'react'
import { Tab } from 'react-native-elements';
import { View } from 'react-native'

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
        <View style={{backgroundColor: '#076AE0'}}>
        <Tab value={index} onChange={tabSelected} >
            <Tab.Item title="Login" titleStyle={{color: 'white'}} />
            <Tab.Item title="Create" titleStyle={{color: 'white'}} />
        </Tab>
        </View>
    )
}
