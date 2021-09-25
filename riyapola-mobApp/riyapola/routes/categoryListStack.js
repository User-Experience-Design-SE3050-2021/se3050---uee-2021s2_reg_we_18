import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/header';
import categoryList from '../screens/categoryList';

const Stack = createStackNavigator();

export default function CategoryListStack() {
    return (
        <Stack.Navigator screenOptions={
            { headerTintColor: '#444' },
            { headerStyle: { backgroundColor: '#076AE0', height: 80 } }
        }>

            <Stack.Screen options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title={'Riyapola'} />
                }
            }} name='List' component={categoryList} />

        </Stack.Navigator>
    );
}
