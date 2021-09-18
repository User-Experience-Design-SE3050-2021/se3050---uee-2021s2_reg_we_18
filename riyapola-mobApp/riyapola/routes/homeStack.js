import { createStackNavigator } from '@react-navigation/stack';
import home from '../screens/home';
import allAds from '../screens/allAds';
import postVehicleAdForm from '../screens/postVehicleAdForm';
import React from 'react';
import Header from '../shared/header';
import postAd from '../screens/postAd';

const Stack = createStackNavigator();

export default function HomeStack() {
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
            }} name='Home' component={home} />
            <Stack.Screen options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title={'Riyapola'} />
                }
            }} name='AllAds' component={allAds} />
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


        </Stack.Navigator>
    );
}
