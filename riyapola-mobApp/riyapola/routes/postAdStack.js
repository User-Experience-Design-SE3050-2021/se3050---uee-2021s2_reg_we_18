import { createStackNavigator } from '@react-navigation/stack';
import postVehicleAdForm from '../screens/postVehicleAdForm';
import React from 'react';
import Header from '../shared/header';
import postSparepartsAdForm from '../screens/postSparepartsAdForm';
import updateSparepartsAd from '../screens/updateSparepartsAd';

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
            }} name='VehicleAdForm' component={postVehicleAdForm} />
            <Stack.Screen options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title={'Riyapola'} />
                }
            }} name='SparepartAdForm' component={postSparepartsAdForm} />
            <Stack.Screen options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title={'Riyapola'} />
                }
            }} name='updateSparepartsAd' component={updateSparepartsAd} />
            
        </Stack.Navigator>
    );
}
