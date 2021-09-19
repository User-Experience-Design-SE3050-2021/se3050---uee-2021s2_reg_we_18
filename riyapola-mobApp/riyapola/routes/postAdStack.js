import { createStackNavigator } from '@react-navigation/stack';
import postAd from '../screens/postAd';
import postVehicleAdForm from '../screens/postVehicleAdForm';
import home from '../screens/home';
import allAds from '../screens/allAds';
import React from 'react';
import Header from '../shared/header';
import postSparepartsAdForm from '../screens/postSparepartsAdForm';

const Stack = createStackNavigator();

export default function AboutStack() {
    return (
        <Stack.Navigator screenOptions={
            { headerTintColor: '#444' },
            { headerStyle: { backgroundColor: '#076AE0', height: 80 } }
        }>
            <Stack.Screen options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title={'Riyapola'} />
                }
            }} name='postAd' component={postAd} />
            <Stack.Screen options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title={'Riyapola'} />
                }
            }} name='VehicleAdForm' component={postVehicleAdForm} />
            <Stack.Screen options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title={'Riyapola'} />
                }
            }} name='SparepartAdForm' component={postSparepartsAdForm} />
        </Stack.Navigator>
    );
}
