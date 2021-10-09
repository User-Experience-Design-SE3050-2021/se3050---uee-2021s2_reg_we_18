import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Card, Title, Headline, ActivityIndicator } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { globalStyles } from '../styles/global';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Filter from '../shared/Fliter';
import axios from 'axios';
import AllAdsTabs from '../shared/allAdsTabs';

export default function allVehicleAds({navigation}) {

    const [vehicleAds, setVehicleAds] = useState([])
    const [fullVehicleAds, setfullVehicleAds] = useState([])
    const [sellers, setAllSellers] = useState([])

    useEffect(() => {

        axios.get('https://riyapola.herokuapp.com/vehicle/published/ads').then((res) => {
            res.status === 200 ? setVehicleAds(res.data.sort((a, b) => a.title.localeCompare(b.title) == 0 ? -1 : a.title.localeCompare(b.title))) : alert('Server error')
        }).catch((err) => {
            console.log(err)
            alert('Connection issue!')
        })
    },[])

    useEffect(() => {
        if (vehicleAds.length > 0) {
            vehicleAds.forEach(elem => {
                axios.get(`https://riyapola.herokuapp.com/vehicle/${elem._id}`).then(res => {
                    setfullVehicleAds([...fullVehicleAds.sort((a, b) => a.title.localeCompare(b.title) == 0 ? -1 : a.title.localeCompare(b.title)), res.data])
            }).catch(err => alert('error retirieving ad'))
            });
            axios.get('https://riyapola.herokuapp.com/user/sellers').then((res) => {
                res.status === 200 ? setAllSellers(res.data) : alert('Server error')
            }).catch((err) => {
                console.log(err)
                alert('Error fetching sellers')
            })
        }
    }, [vehicleAds])

    return (
        <View style={{flex:1}}>
        <AllAdsTabs pageIndex={0} navigation={navigation} style={{flex:1}}/>
        <Filter title="Vehicles" style={{flex:1}} />
        <FlatList
            data={vehicleAds}
            style={[globalStyles.card,{flex: 1}]}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('vehicleDetail', item._id)}  >
                    <Card style={globalStyles.cardContent}>
                    {fullVehicleAds.find(elem => elem._id === item._id) ? <Card.Cover source={{uri:'data:image/jpeg;base64,'+fullVehicleAds.find(elem => elem._id === item._id).images[0]}} /> : <ActivityIndicator />}
                        <Card.Content style={globalStyles.cardContainer}>
                            <Title> {item.title}</Title><View style={{alignItems: 'flex-end'}}><Text>{item.condition}</Text></View>
                            <Title style={{ fontSize: 15 }}><Icon iconStyle={{ fontSize: 15 }} color="blue" name="place" />{item.location}</Title>
                        </Card.Content>
                        <Card.Content style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                            <Headline style={{ fontWeight: "bold" }}>{item.price}</Headline>
                            {fullVehicleAds.find(elem => elem._id === item._id) ? <Title style={{ fontSize: 15 }}>{sellers.length > 0 ? sellers.find(seller => fullVehicleAds.find(elem => elem._id === item._id).userId === seller._id).name: ''} | {fullVehicleAds.find(elem => elem._id === item._id).updatedAt.split('T')[0]} </Title> : <Text>Loading...</Text>}
                        </Card.Content>
                    </Card>
                </TouchableOpacity>
            )}
        />
        </View>
    )
}