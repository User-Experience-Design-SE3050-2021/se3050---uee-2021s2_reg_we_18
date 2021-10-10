import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/header';
import profile from '../screens/profile';
import vehicleMyAds from '../screens/vehicleMyAds';
import sparepartsMyAds from '../screens/sparepartsMyAds';
import signup from '../screens/signup';
import AllAdsStack from './AllAdsStack';

const Stack = createStackNavigator();

export default function userStack() {
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
            }} name='profile' component={profile} />
            <Stack.Screen options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title={'Riyapola'} />
                }
            }} name='signup' component={signup} />
            {/* <Stack.Screen options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title={'Riyapola'} />
                }
            }} name='login' component={login} /> */}
             <Stack.Screen options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title={'Riyapola'} />
                }
            }} name='vehicleMyAds' component={vehicleMyAds} />
            <Stack.Screen options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title={'Riyapola'} />
                }
            }} name='sparePartsMyAds' component={sparepartsMyAds} />
               <Stack.Screen options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title={'Riyapola'} />
                }
            }} name='allads' component={AllAdsStack} />

        </Stack.Navigator>
    );
}
