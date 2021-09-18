import { createStackNavigator } from '@react-navigation/stack';
import allAds from '../screens/allAds';
import React from 'react';
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function AboutStack() {
    return (
            <Stack.Navigator screenOptions={
                    {headerTintColor: '#444'},
                    {headerStyle: { backgroundColor: '#076AE0', height: 80}}
            }>
                <Stack.Screen options={({navigation}) => {
                    return {
                        headerTitle: () => <Header navigation={navigation} title={'Riyapola'} />
                }}} name='About' component={allAds} />
            </Stack.Navigator>
    );
}
