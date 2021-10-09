import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/header';
import AllVehicleAds from '../screens/allVehicleAds';
import AllSparepartAds from '../screens/allSparepartAds';
import vehicleDetail from '../screens/vehicleDetail';
import sparepartDetail from '../screens/sparepartDetail';

const Stack = createStackNavigator();

export default function AllAdsStack() {
    return (
        <Stack.Navigator
            headerMode='none'>
            <Stack.Screen name='allVehicleAds' component={AllVehicleAds} />
            <Stack.Screen name='allSparepartAds' component={AllSparepartAds} />
            <Stack.Screen name='vehicleDetail' component={vehicleDetail} />
            <Stack.Screen name='sparepartDetail' component={sparepartDetail} />
        </Stack.Navigator>
    );
}
