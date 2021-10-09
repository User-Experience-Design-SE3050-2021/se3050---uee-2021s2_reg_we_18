import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Card, Title, Headline, ActivityIndicator } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { globalStyles } from '../styles/global';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Filter from '../shared/Fliter';
import AllAdsTabs from '../shared/allAdsTabs';
import axios from 'axios';

export default function allSparepartAds({ navigation }) {

    const [sparepartAds, setsparepartAds] = useState([])
    const [fullsparepartAds, setfullsparepartAds] = useState([])
    const [sellers, setAllSellers] = useState([])

    useEffect(() => {

        axios.get('https://riyapola.herokuapp.com/spareparts/published/ads').then((res) => {
            res.status === 200 ? setsparepartAds(res.data.sort((a, b) => a.title.localeCompare(b.title) == 0 ? -1 : a.title.localeCompare(b.title))) : alert('Server error')
        }).catch((err) => {
            console.log(err)
            alert('Connection issue!')
        })
    }, [])

    useEffect(() => {
        let arr = [];
        if (sparepartAds.length > 0) {
            sparepartAds.forEach((elem, index) => {
                axios.get(`https://riyapola.herokuapp.com/spareparts/${elem._id}`).then(res => {
                    arr.push(res.data)
                    index === sparepartAds.length - 1 ? setfullsparepartAds(arr) : null
                }).catch(err => {
                    console.log(err)
                    alert('error retirieving ad')
                })
            });
            axios.get('https://riyapola.herokuapp.com/user/sellers').then((res) => {
                console.log(res.data)
                res.status === 200 ? setAllSellers(res.data) : alert('Server error')
            }).catch((err) => {
                console.log(err)
                alert('Error fetching sellers')
            })
        }
    }, [sparepartAds])

    useEffect(() => {
        console.log('set', fullsparepartAds.length)
    }, [fullsparepartAds])

    return (
        <View style={{ flex: 1 }}>
            <AllAdsTabs pageIndex={1} navigation={navigation} style={{ flex: 1 }} />
            <Filter title="SpareParts" style={{ flex: 1 }} />
            {sparepartAds.length > 0 ? <FlatList
                data={sparepartAds}
                style={globalStyles.card}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('sparepartDetail', item._id)}>
                        <Card style={globalStyles.cardContent}>
                            {fullsparepartAds.find(elem => elem._id === item._id) ? <Card.Cover source={{ uri: 'data:image/jpeg;base64,' + fullsparepartAds.find(elem => elem._id === item._id).images[0] }} /> : <ActivityIndicator />}
                            <Card.Content style={globalStyles.cardContainer}>
                                <Title> {item.title}</Title><View style={{ alignItems: 'flex-end' }}><Text>{item.condition}</Text></View>
                                <Title style={{ fontSize: 15 }}><Icon iconStyle={{ fontSize: 15 }} color="blue" name="place" />{item.location}</Title>
                            </Card.Content>
                            <Card.Content style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                                <Headline style={{ fontWeight: "bold", fontSize: 20 }}>Rs.{item.price}/=</Headline>
                                {fullsparepartAds.find(elem => elem._id === item._id) ? <Title style={{ fontSize: 15 }}>{sellers.length > 0 && sellers.find(seller => fullsparepartAds.find(elem => elem._id === item._id).userId === seller._id) ? sellers.find(seller => fullsparepartAds.find(elem => elem._id === item._id).userId === seller._id).name : ''} | {fullsparepartAds.find(elem => elem._id === item._id).updatedAt.split('T')[0]} </Title> : <Text>Loading...</Text>}
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                )}
            /> : <ActivityIndicator size='large' color='#076AE0' style={{ marginVertical: 50 }} />}
        </View>
    )
}