import { createStackNavigator } from '@react-navigation/stack';
import sparePartsList from '../screens/sparePartsList';
import allAds from '../screens/allAds';
import postAd from '../screens/postAd';
import React from 'react';
import Header from '../shared/header';
import signup from '../screens/signup';
import landingPage from '../screens/landingPage';
import login from '../screens/login';
import postVehicleAdForm from '../screens/postVehicleAdForm';
import postSparepartsAdForm from '../screens/postSparepartsAdForm';
import sparepartDetail from '../screens/sparepartDetail';
import vehicleDetail from '../screens/vehicleDetail';

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
            }} name='Home' component={landingPage} />
            <Stack.Screen options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title={'Riyapola'} />
                }
            }} name='allSparepartAds' component={sparePartsList} />
            <Stack.Screen options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title={'Riyapola'} />
                }
            }} name='sparepartDetail' component={sparepartDetail} />
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
            }} name='vehicleDetail' component={vehicleDetail} />
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
            }} name='signup' component={signup} />
            <Stack.Screen options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title={'Riyapola'} />
                }
            }} name='login' component={login} />
            
        </Stack.Navigator>
    );
}
