import React from 'react';
import { View } from 'react-native';
import { globalStyles } from '../styles/global';
import Tabs from '../shared/Tabs';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';


export default function postAd({ navigation }) {

    return (
        <View>
            <Tabs pageIndex={2} navigation={navigation} />
            <View style={globalStyles.container}>
                <View style={{display: 'flex', top: 20}}>
                    <Card style={{backgroundColor: "#3d7ee0", borderWidth: 1, borderColor: "#076AE0", overflow: 'hidden'}} onPress={() => navigation.navigate('VehicleAdForm')}>
                        <Card.Content style={{alignItems: 'center'}}>
                            <Title style={{color: '#fff', fontWeight: 'bold', fontSize: 30}}>Post Your Vehicle Ad</Title>
                        </Card.Content>
                        <Card.Cover style={{top: 10}} source={require('../images/vehicles/postVehicle.png')} />
                    </Card>
                    <Divider/>
                    <Card style={{top: 20, backgroundColor: "#3d7ee0", borderWidth: 1, borderColor: "#076AE0", overflow: 'hidden'}} onPress={() => navigation.navigate('SparepartAdForm') }>
                        <Card.Content style={{alignItems: 'center'}}>
                            <Title style={{color: '#fff', fontWeight: 'bold', fontSize: 30}}>Post Your Spare Part</Title>
                            
                        </Card.Content>
                        <Card.Cover style={{top:10}} source={require('../images/spareparts/postSparepart.png')} />
                    </Card>
                </View>

            </View>
        </View>
    )
}