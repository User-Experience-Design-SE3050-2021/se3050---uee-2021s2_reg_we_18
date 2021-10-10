import { createStackNavigator } from '@react-navigation/stack';
// import allAds from '../screens/allAds';
// import postAd from '../screens/postAd';
import React from 'react';
import Header from '../shared/header';
import sparepartsMyAds from '../screens/sparepartsMyAds';
import vehicleMyAds from '../screens/vehicleMyAds';
import AllAdsStack from './AllAdsStack';
// import signup from '../screens/signup';
// import login from '../screens/login';
// import postVehicleAdForm from '../screens/postVehicleAdForm';
// import postSparepartsAdForm from '../screens/postSparepartsAdForm';
// import vehicleMyAds from '../screens/vehicleMyAds';
// import sparepartsMyAds from '../screens/sparepartsMyAds';

const Stack = createStackNavigator();

export default function myAdsStack() {
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
