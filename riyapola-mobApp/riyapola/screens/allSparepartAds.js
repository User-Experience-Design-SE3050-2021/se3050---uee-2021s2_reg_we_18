import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Card, Title, Headline } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { globalStyles } from '../styles/global';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default function allSparepartAds() {

    const [sparepartsAds, setSparepartsAd] = useState([
        { title: 'Radio For Sale', condition: 'Used', location: 'Colombo', price: 'Rs. 13,000', seller: 'Saman', date: '2021-09-12', image: '../images/spareparts/radio.jpg', key: '1' },
        { title: 'JBL Car Audio', condition: 'New', location: 'Gampaha', price: 'Rs. 30,000', seller: 'Rohan', date: '2021-09-13', image: '../images/spareparts/radio2.jpg', key: '2' },
        { title: 'Used Radio Set', condition: 'Recondition', location: 'Kandy', price: 'Rs. 12,300', seller: 'Eranda', date: '2021-09-12', image: '../images/spareparts/radio.jpg', key: '3' }
    ])

    return (
        <FlatList
            data={sparepartsAds}
            style={globalStyles.card}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('sparepart detail', item)}  >
                    <Card style={globalStyles.cardContent}>
                        <Card.Cover source={require('../images/spareparts/radio.jpg')} />
                        <Card.Content style={globalStyles.cardContainer}>
                            <Title> {item.title}</Title><View><Text> | {item.condition}</Text></View>
                            <Title style={{ fontSize: 15 }}><Icon iconStyle={{ fontSize: 15 }} color="blue" name="place" />{item.location}</Title>
                        </Card.Content>
                        <Card.Content style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                            <Headline style={{ fontWeight: "bold" }}>{item.price}</Headline>
                            <Title style={{ fontSize: 15 }}>{item.seller} | {item.date} </Title>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>
            )}
        />
    )
}