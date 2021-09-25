import { createStackNavigator } from '@react-navigation/stack';
import addCategory from '../screens/categoryAdd';
import React from 'react';
import Header from '../shared/header';
import categoryList from '../screens/categoryList';
import updateCategory from '../screens/updateCategory';

const Stack = createStackNavigator();

export default function CategoryStack() {
    return (
        <Stack.Navigator 

        screenOptions={
            { headerTintColor: '#444' },
            { headerStyle: { backgroundColor: '#076AE0', height: 80 } }
        }>
            <Stack.Screen options={({ navigation }) => {
                return {
                    headerTitle:'Add New Category' //() => <Header navigation={navigation} title={'Riyapola'} />} />
                }
            }} name='Add' component={addCategory} /> 

            <Stack.Screen options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title={'Riyapola'} />
                }
            }} name='List' component={categoryList} />

            <Stack.Screen options={({ navigation }) => {
                return {
                    headerTitle:'Update New Category' //() => <Header navigation={navigation} title={'Riyapola'} />} />
                }
            }} name='Update' component={updateCategory} /> 

           
        </Stack.Navigator>
    );
}
