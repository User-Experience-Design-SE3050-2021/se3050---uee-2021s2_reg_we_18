import { createStackNavigator } from '@react-navigation/stack';
import home from '../screens/home';
import React from 'react';
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
            <Stack.Navigator 
            headerMode='screen'
            screenOptions={
                    {headerTintColor: '#444'},
                    {headerStyle: { backgroundColor: '#076AE0', height: 80}}
            }>
                <Stack.Screen options={({navigation}) => {
                    return {
                        headerTitle: () => <Header navigation={navigation} title={'Riyapola'} />
                }}} name='GameZone' component={home} />
            </Stack.Navigator>
    );
}
