import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Headline } from 'react-native-paper';
import Tabs from '../shared/Tabs';
import { Icon } from 'react-native-elements';
import { globalStyles } from '../styles/global';
import { ScrollView } from 'react-native-gesture-handler';
import Filter from '../shared/Fliter';

export default function home({ navigation }) {
    return (
        <View>
            <Tabs pageIndex={0} navigation={navigation} />
            <Filter/>
            <ScrollView>
                <Card style={{ marginTop: 20 }}>
                    <Card.Cover source={require('../images/spareparts/radio.jpg')} />
                    <Card.Content style={globalStyles.cardContainer}>
                        <Title>Radio For Sale | Used</Title>
                        <Title style={{ fontSize: 15 }}><Icon iconStyle={{ fontSize: 15 }} color="blue" name="place" />Colombo</Title>
                    </Card.Content>
                    <Card.Content style={globalStyles.cardContainer}>
                        <Headline style={{ fontWeight: "bold" }}>Rs. 15,000</Headline>
                        <Title style={{ fontSize: 15 }}>Saman | 2021-09-12</Title>
                    </Card.Content>
                </Card>
                <Card style={{ marginTop: 20 }}>
                    <Card.Cover source={require('../images/spareparts/radio2.jpg')} />
                    <Card.Content style={globalStyles.cardContainer}>
                        <Title>JABL Car Radio | New</Title>
                        <Title style={{ fontSize: 15 }}><Icon iconStyle={{ fontSize: 15 }} color="blue" name="place" />Gampaha</Title>
                    </Card.Content>
                    <Card.Content style={globalStyles.cardContainer}>
                        <Headline style={{ fontWeight: "bold" }}>Rs. 35,000</Headline>
                        <Title style={{ fontSize: 15 }}>Rohan | 2021-09-11</Title>
                    </Card.Content>
                </Card>
                <Card style={{ marginTop: 20 }}>
                    <Card.Cover source={require('../images/spareparts/radio.jpg')} />
                    <Card.Content style={globalStyles.cardContainer}>
                        <Title>Radio For Sale | Used</Title>
                        <Title style={{ fontSize: 15 }}><Icon iconStyle={{ fontSize: 15 }} color="blue" name="place" />Colombo</Title>
                    </Card.Content>
                    <Card.Content style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                        <Headline style={{ fontWeight: "bold" }}>Rs. 85,000</Headline>
                        <Title style={{ fontSize: 15 }}>Saman | 2021-09-12</Title>
                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    )
}