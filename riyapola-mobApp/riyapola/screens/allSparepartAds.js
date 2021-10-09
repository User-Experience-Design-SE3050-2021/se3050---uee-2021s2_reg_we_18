import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Picker } from 'react-native';
import { Card, Title, Headline, Portal, Appbar, Dialog, Provider, RadioButton, Button, ActivityIndicator } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { globalStyles } from '../styles/global';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Filter from '../shared/Fliter';
import AllAdsTabs from '../shared/allAdsTabs';
import axios from 'axios';
import Svg, { Rect } from 'react-native-svg';
import ContentLoader from 'react-native-masked-loader';

function getMaskedElement() {
    return (
      <Svg height={250} width="100%" fill={'black'} >
        <Rect x="20" y="5" rx="9" ry="9" width="90%" height="100%" />
      </Svg>
    );
  }

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

    const [visible, setVisible] = useState(false);
    const [condition, setCondition] = useState('new')

    const showFilter = () => setVisible(true);

    const hideFilter = () => setVisible(false);
    const MaskedElement = getMaskedElement();

    return (
        <View style={{ flex: 1 }}>
            <Provider>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideFilter}>
                        <Dialog.Actions>
                            <ScrollView contentContainerStyle={{ paddingHorizontal: 25 }}>
                                <Text style={globalStyles.topicForm}>Filter Spare Parts</Text>
                                <Text style={globalStyles.label}>Condition</Text>
                                <View style={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center' }} >
                                    <RadioButton value='new' color='#076AE0' status={condition === 'new' ? 'checked' : 'unchecked'} style={{ flex: 1 }} />
                                    <Text>New</Text>
                                    <RadioButton value='used' color='#076AE0' status={condition === 'used' ? 'checked' : 'unchecked'} style={{ flex: 1 }} />
                                    <Text>Used</Text>
                                    <RadioButton value='reconditioned' color='#076AE0' status={condition === 'reconditioned' ? 'checked' : 'unchecked'} style={{ flex: 1 }} />
                                    <Text>Recondition</Text>
                                </View>
                                <Text style={globalStyles.label}>Spare Part Category</Text>
                                <Picker
                                    style={globalStyles.select}
                                >
                                    <Picker.Item label="Select Spare Part Category" value="java" />
                                    <Picker.Item label="Doors" value="doors" />
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
                <AllAdsTabs pageIndex={1} navigation={navigation} style={{ flex: 1 }} />
                <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'center' }}>
                    <Filter title="SpareParts" />
                    <Icon name="filter" onPress={showFilter} type='font-awesome' color="#076AE0" raised reverse />
                </View>

                <Appbar.Header style={{ height: 10, backgroundColor: "#076AE0" }}>
                    <Appbar.BackAction onPress={() => { navigation.goBack() }} style={{ marginBottom: 40 }} />
                    <Text style={{ marginBottom: 35, color: "#fff", fontWeight: "bold" }}>Spare Parts</Text>
                </Appbar.Header>
                {sparepartAds.length > 0 ? <FlatList
                    data={sparepartAds}
                    style={globalStyles.card}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('sparepartDetail', item._id)}>
                            <Card style={globalStyles.cardContent}>
                                {fullsparepartAds.find(elem => elem._id === item._id) ? <Card.Cover source={{ uri: 'data:image/jpeg;base64,' + fullsparepartAds.find(elem => elem._id === item._id).images[0] }} /> : <ContentLoader MaskedElement={MaskedElement}/>}
                                <Card.Content style={globalStyles.cardContainer}>
                                    <Title> {item.title}</Title><View style={{ alignItems: 'flex-end' }}><Text>{item.condition}</Text></View>
                                    <Title style={{ fontSize: 15 }}><Icon iconStyle={{ fontSize: 15 }} color="blue" name="place" />{item.location}</Title>
                                </Card.Content>
                                <Card.Content style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                                    <Headline style={{ fontWeight: "bold", fontSize: 20 }}>Rs.{item.price.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}/=</Headline>
                                    {fullsparepartAds.find(elem => elem._id === item._id) ? <Title style={{ fontSize: 15 }}>{sellers.length > 0 && sellers.find(seller => fullsparepartAds.find(elem => elem._id === item._id).userId === seller._id) ? sellers.find(seller => fullsparepartAds.find(elem => elem._id === item._id).userId === seller._id).name : ''} | {fullsparepartAds.find(elem => elem._id === item._id).updatedAt.split('T')[0]} </Title> : <Text>Loading...</Text>}
                                </Card.Content>
                            </Card>
                        </TouchableOpacity>
                    )}
                /> : <ActivityIndicator size='large' color='#076AE0' style={{ marginVertical: 50 }} />}
            </Provider>
        </View>
    )
}