import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/header';
import vehicleAdActions from '../screens/vehicleAdsActions';
import sparepartsAdActions from '../screens/sparepartsAdActions';

const Stack = createStackNavigator();

export default function AdminStack() {
    return (
        <Stack.Navigator
            headerMode='screen'
            screenOptions={
                { headerTintColor: '#444' },
                { headerStyle: { backgroundColor: '#076AE0', height: 80 } }
            }>
            <Stack.Screen options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title={'Riyapola'} />
                }
            }} name='vehicleAdActions' component={vehicleAdActions} />
            <Stack.Screen options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title={'Riyapola'} />
                }
            }} name='sparepartsAdActions' component={sparepartsAdActions} />

        </Stack.Navigator>
    );
}
