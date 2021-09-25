import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Appbar } from 'react-native-paper';


export default function Filter({title}) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View>
            <Searchbar
                placeholder="Search"
                style={{marginTop: 10, marginBottom: 10, borderRadius: 50}}
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <Appbar.Header style={{height: 10, backgroundColor: "#076AE0"}}>
                <Appbar.BackAction onPress={() => { }} style={{marginBottom: 40}} />
                <Text style={{marginBottom: 35, color: "#fff", fontWeight: "bold"}}>{title}</Text>
            </Appbar.Header>
        </View>
    )
}