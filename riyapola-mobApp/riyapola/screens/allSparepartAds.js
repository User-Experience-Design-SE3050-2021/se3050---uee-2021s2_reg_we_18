import React, { useState } from 'react';
import { Text, View, ScrollView, Picker } from 'react-native';
import { Card, Title, Headline, Portal, Appbar, Dialog, Provider, RadioButton, Button } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { globalStyles } from '../styles/global';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Filter from '../shared/Fliter';
import AllAdsTabs from '../shared/allAdsTabs';

export default function allSparepartAds({ navigation }) {

    const [sparepartsAds, setSparepartsAd] = useState([
        { title: 'Radio For Sale', condition: 'Used', location: 'Colombo', price: 'Rs. 13,000', seller: 'Saman', date: '2021-09-12', image: '../images/spareparts/radio.jpg', key: '1' },
        { title: 'JBL Car Audio', condition: 'New', location: 'Gampaha', price: 'Rs. 30,000', seller: 'Rohan', date: '2021-09-13', image: '../images/spareparts/radio2.jpg', key: '2' },
        { title: 'Used Radio Set', condition: 'Recondition', location: 'Kandy', price: 'Rs. 12,300', seller: 'Eranda', date: '2021-09-12', image: '../images/spareparts/radio.jpg', key: '3' }
    ])

    const [visible, setVisible] = useState(false);
    const [condition, setCondition] = useState('new')

    const showFilter = () => setVisible(true);

    const hideFilter = () => setVisible(false);

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
                <FlatList
                    data={sparepartsAds}
                    style={globalStyles.card}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('sparepartDetail')}>
                            <Card style={globalStyles.cardContent}>
                                <Card.Cover source={require('../images/spareparts/radio.jpg')} />
                                <Card.Content style={globalStyles.cardContainer}>
                                    <Title> {item.title}</Title><View><Text> | {item.condition}</Text></View>
                                    <Title style={{ fontSize: 15 }}><Icon iconStyle={{ fontSize: 15 }} color="blue" name="place" />{item.location}</Title>
                                </Card.Content>
                                <Card.Content style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                                    <Headline style={{ fontWeight: "bold" }}>{item.price.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Headline>
                                    <Title style={{ fontSize: 15 }}>{item.seller} | {item.date} </Title>
                                </Card.Content>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            </Provider>
        </View>
    )
}