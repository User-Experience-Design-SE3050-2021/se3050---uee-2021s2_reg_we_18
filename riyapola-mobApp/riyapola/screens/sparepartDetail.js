import React, { useState,useEffect } from 'react'
import { View } from 'react-native'
import { Headline, Caption, Title, Card, Paragraph, Divider, ActivityIndicator } from 'react-native-paper';
import { Icon, Button } from 'react-native-elements'
import { SliderBox } from 'react-native-image-slider-box';
import { globalStyles } from '../styles/global';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import * as Linking from 'expo-linking';

export default function sparepartDetail({ navigation, route }) {

    const [Ad, setAd] = useState(null)

    useEffect(() => {
        axios.get(`https://riyapola.herokuapp.com/spareparts/${route.params}`).then(res => {
            setAd(res.data)
        }).catch(err => alert('error retirieving ad'))
    }, [])

    useEffect(() => {
        if(Ad && !Ad.seller)
        axios.get(`https://riyapola.herokuapp.com/user/${Ad.userId}`).then(res => {
            setAd({...Ad, seller: res.data})
        }).catch(err => alert('error retirieving ad'))
    }, [Ad])

    const image = [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?tree"
    ]
    return (
        <ScrollView>
 {Ad ? <View>
                <SliderBox images={image}
                    sliderBoxHeight={250}
                    dotColor="#076AE0"
                    inactiveDotColor="#FFFFFF"
                    autoplay
                    circleLoop
                    ImageComponentStyle={{ width: '90%', marginTop: 10 }}
                    imageLoadingColor="#076AE0"
                />
                <View style={globalStyles.container}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Headline style={{ fontWeight: 'bold', fontSize: 30, color: '#076AE0' }}>Rs. {Ad.price}/=</Headline>
                        <Caption style={{ fontSize: 15, paddingTop: 7, left: 6 }}>{Ad.negotiable ? 'Negotiable' : null}</Caption>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Title style={{ fontSize: 17 }}><Icon name='place' color='#076AE0' style={{ fontSize: 10 }} />{Ad.location} | {Ad.seller ? Ad.seller.name : 'Loading...'}</Title>
                        <Caption style={{ fontSize: 13, paddingTop: 9 }}>Posted On: {Ad.updatedAt.split('T')[0]}</Caption>
                    </View>

                    <Card>
                        <Card.Content>
                            <Title>Specifications</Title>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Paragraph>Category</Paragraph>
                                <Paragraph style={{ left: 10 }}>{Ad.category}</Paragraph>
                            </View>
                            <Divider />
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Paragraph>Condition -</Paragraph>
                                    <Paragraph style={{ left: 10 }}>{Ad.condition}</Paragraph>
                                </View>
                        </Card.Content>
                    </Card>

                    <Card style={{ top: 10 }}>
                        <Card.Content>
                            <Title>More Details</Title>
                            <Paragraph style={{ textAlign: 'justify' }}>{Ad.description}</Paragraph>
                        </Card.Content>
                    </Card>
                    <View style={{ display: 'flex', flexDirection: 'row', top: 20 }}>
                        <View>
                            <Button
                                icon={
                                    <Icon
                                        name="phone"
                                        size={20}
                                        color="white"
                                    />
                                }
                                title="Call Now"
                                raised
                                loading={!Ad.seller}
                                onPress={() => {
                                   Ad.seller ? Linking.openURL(`tel:${Ad.seller.phoneNumber}`) : null;
                                }}
                            />
                        </View>
                        <View style={{left: 20}}>
                            <Button
                                icon={
                                    <Icon
                                        name="mail"
                                        size={20}
                                        color="#076AE0"
                                    />
                                }
                                title="Send Email"
                                type="outline"
                                raised
                                loading={!Ad.seller}
                                raised
                                onPress={() => {
                                    Ad.seller ? Linking.openURL(`mailto:${Ad.seller.email}`) : null;
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>: <ActivityIndicator size='large' color='#076AE0' style={{marginVertical: 50}} />}
        </ScrollView>
    )
}