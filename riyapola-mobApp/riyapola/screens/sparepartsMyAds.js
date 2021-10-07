import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Card, Title, Headline } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { globalStyles } from '../styles/global';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import MyAdsTab from '../shared/myAdsTab';
import FlatButton from '../shared/button';

export default function sparepartsMyAds({navigation}) {

    const [sparepartsAds, setSparepartsAd] = useState([
        { title: 'Radio For Sale', condition: 'Used', location: 'Colombo', price: 'Rs. 13,000', seller: 'Saman', date: '2021-09-12', image: '../images/spareparts/radio.jpg', key: '1' ,status:'approved' },
        { title: 'JBL Car Audio', condition: 'New', location: 'Gampaha', price: 'Rs. 30,000', seller: 'Rohan', date: '2021-09-13', image: '../images/spareparts/radio2.jpg', key: '2' ,status:'approved' },
        { title: 'Used Radio Set', condition: 'Recondition', location: 'Kandy', price: 'Rs. 12,300', seller: 'Eranda', date: '2021-09-12', image: '../images/spareparts/radio.jpg', key: '3',status:'Not approved'  }
    ])

    return (
        <View>
            <MyAdsTab pageIndex={1} navigation={navigation}  />
        <FlatList
            data={sparepartsAds}
            style={globalStyles.card}
            renderItem={({ item }) => (
                <View>
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
                        <Card.Content style={{ flexDirection: 'row', display: 'flex' }}>
                            <Headline style={{ fontWeight: "bold" }}>Status:</Headline>
                            <Title style={{ fontSize: 18 }}>  {item.status} </Title>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>
                <FlatButton text="Edit" onPress={()=>{navigation.navigate('Home')}}  />
                {/* <FlatButton text="Delete" onPress={()=>{navigation.navigate('Home')}}  /> */}
                </View>
            )}
        />
        </View>
    )
}