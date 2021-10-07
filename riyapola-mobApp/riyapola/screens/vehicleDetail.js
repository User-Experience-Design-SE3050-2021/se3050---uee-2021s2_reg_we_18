import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Headline, Caption, Title, Card, Paragraph, Divider } from 'react-native-paper';
import { Icon, Button } from 'react-native-elements'
import { SliderBox } from 'react-native-image-slider-box';
import { globalStyles } from '../styles/global';
import { ScrollView } from 'react-native-gesture-handler';

export default function sparepartDetail() {

    const image = [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?tree"
    ]
    return (
        <ScrollView>
            <View>
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
                        <Headline style={{ fontWeight: 'bold', fontSize: 30, color: '#076AE0' }}>Rs. 3,560,000/=</Headline>
                        <Caption style={{ fontSize: 15, paddingTop: 7, left: 6 }}>Negotiable</Caption>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Title style={{ fontSize: 17 }}><Icon name='place' color='#076AE0' style={{ fontSize: 10 }} />Kandy | Naveen</Title>
                        <Caption style={{ fontSize: 13, paddingTop: 9 }}>Posted On: 2021-09-13</Caption>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Card>
                            <Card.Content>
                                <Title>Specifications</Title>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Paragraph>Make -</Paragraph>
                                    <Paragraph style={{ left: 10 }}>Suzuki</Paragraph>
                                </View>
                                <Divider />
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Paragraph>Model -</Paragraph>
                                    <Paragraph style={{ left: 10 }}>Alto 800</Paragraph>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Paragraph>Body Type -</Paragraph>
                                    <Paragraph style={{ left: 10 }}>Hatchback</Paragraph>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Paragraph>Condition -</Paragraph>
                                    <Paragraph style={{ left: 10 }}>Registerd</Paragraph>
                                </View>
                            </Card.Content>
                        </Card>
                        <Card style={{ left: 3, width: 200 }}>
                            <Card.Content>
                                <Title>More Details</Title>
                                <Paragraph style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</Paragraph>
                            </Card.Content>
                        </Card>
                    </View>
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
                            />
                        </View>
                        <View style={{ left: 20 }}>
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
                            />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}