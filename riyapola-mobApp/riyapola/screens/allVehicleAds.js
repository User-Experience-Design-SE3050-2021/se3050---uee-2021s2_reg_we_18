import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Picker } from 'react-native';
import { Card, Title, Headline, ActivityIndicator, Portal, Appbar, Dialog, Provider, RadioButton, Button } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { globalStyles } from '../styles/global';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Filter from '../shared/Fliter';
import axios from 'axios';
import AllAdsTabs from '../shared/allAdsTabs';
import Svg, { Rect } from 'react-native-svg';
import ContentLoader from 'react-native-masked-loader';

function getMaskedElement() {
    return (
      <Svg height={250} width="100%" fill={'black'} >
        <Rect x="20" y="5" rx="9" ry="9" width="90%" height="100%" />
      </Svg>
    );
  }

export default function allVehicleAds({ navigation }) {

    const [vehicleAds, setVehicleAds] = useState([])
    const [fullVehicleAds, setfullVehicleAds] = useState([])
    const [sellers, setAllSellers] = useState([])
    const [visible, setVisible] = useState(false);
    const [condition, setCondition] = useState('registered')
    const showFilter = () => setVisible(true);
    const hideFilter = () => setVisible(false);
    const MaskedElement = getMaskedElement();

    useEffect(() => {

        axios.get('https://riyapola.herokuapp.com/vehicle/published/ads').then((res) => {
            res.status === 200 ? setVehicleAds(res.data.sort((a, b) => a.title.localeCompare(b.title) == 0 ? -1 : a.title.localeCompare(b.title))) : alert('Server error')
        }).catch((err) => {
            console.log(err)
            alert('Connection issue!')
        })
    }, [])

    useEffect(() => {
        if (vehicleAds.length > 0) {
            let arr = [];
            vehicleAds.forEach((elem, index) => {
                axios.get(`https://riyapola.herokuapp.com/vehicle/${elem._id}`).then(res => {
                    arr.push(res.data)
                    index === vehicleAds.length-1 ? setfullVehicleAds(arr) : null
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

    useEffect(() => {
           console.log('set', fullVehicleAds.length)
    }, [fullVehicleAds])

    return (
        <View style={{ flex: 1 }}>
            <Provider>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideFilter}>
                        <Dialog.Actions>
                            <ScrollView contentContainerStyle={{ paddingHorizontal: 25 }}>
                                <Text style={globalStyles.topicForm}>Filter Vehicle</Text>
                                <Text style={globalStyles.label}>Condition</Text>
                                <View style={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center' }} >
                                    <RadioButton value='registered' color='#076AE0' status={condition === 'registered' ? 'checked' : 'unchecked'} style={{ flex: 1 }} />
                                    <Text>Registered</Text>
                                    <RadioButton value='unregistered' color='#076AE0' status={condition === 'unregistered' ? 'checked' : 'unchecked'} style={{ flex: 1 }} />
                                    <Text>UnRegistered</Text>
                                </View>
                                <Text style={globalStyles.label}>Vehicle Category</Text>
                                <Picker
                                    style={globalStyles.select}
                                >
                                    <Picker.Item label="Select Vehicle Category" value="java" />
                                    <Picker.Item label="Car" value="car" />
                                </Picker>
                                <Text style={globalStyles.label}>Location</Text>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                                    <Picker
                                        style={globalStyles.select}
                                    >
                                        <Picker.Item label="Select Your Location" value="" />
                                        <Picker.Item label="Colombo" value="colombo" />
                                        <Picker.Item label="Galle" value="galle" />
                                        <Picker.Item label="Gamapaha" value="gampaha" />
                                    </Picker>
                                </View>
                                <Dialog.Actions>
                                    <Button color="#076AE0" onPress={() => console.log('Cancel')}>Cancel</Button>
                                    <Button color="#076AE0" onPress={() => console.log('Filter')}>Filter</Button>
                                </Dialog.Actions>
                            </ScrollView>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
                <AllAdsTabs pageIndex={0} navigation={navigation} style={{ flex: 1 }} />
                <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'center' }}>
                    <Filter title="SpareParts" />
                    <Icon name="filter" onPress={showFilter} type='font-awesome' color="#076AE0" raised reverse />
                </View>
                <Appbar.Header style={{ height: 10, backgroundColor: "#076AE0" }}>
                    <Appbar.BackAction onPress={() => { navigation.goBack() }} style={{ marginBottom: 40 }} />
                    <Text style={{ marginBottom: 35, color: "#fff", fontWeight: "bold" }}>Vehicles</Text>
                </Appbar.Header>
                <FlatList
                    data={vehicleAds}
                    style={[globalStyles.card, { flex: 1 }]}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('vehicleDetail', item._id)}  >
                            <Card style={globalStyles.cardContent}>
                                {fullVehicleAds.find(elem => elem._id === item._id) ? <Card.Cover source={{ uri: 'data:image/jpeg;base64,' + fullVehicleAds.find(elem => elem._id === item._id).images[0] }} /> :<ContentLoader MaskedElement={MaskedElement}/>}
                                <Card.Content style={globalStyles.cardContainer}>
                                    <Title> {item.title}</Title><View style={{ alignItems: 'flex-end' }}><Text>{item.condition}</Text></View>
                                    <Title style={{ fontSize: 15 }}><Icon iconStyle={{ fontSize: 15 }} color="blue" name="place" />{item.location}</Title>
                                </Card.Content>
                                <Card.Content style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                                    <Headline style={{ fontWeight: "bold" }}>Rs.{item.price.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}/=</Headline>
                                    {fullVehicleAds.find(elem => elem._id === item._id) ? <Title style={{ fontSize: 13 }}>{sellers.length > 0 ? sellers.find(seller => fullVehicleAds.find(elem => elem._id === item._id).userId === seller._id).name : ''} | {fullVehicleAds.find(elem => elem._id === item._id).updatedAt.split('T')[0]} </Title> : <Text>Loading...</Text>}
                                </Card.Content>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            </Provider>
        </View>

    )
    'text'.incl ()

}