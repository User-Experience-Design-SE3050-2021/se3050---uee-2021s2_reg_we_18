import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import PostAdStack from './postAdStack';
import HomeStack from './homeStack';
import CategoryStack from './categoryStack';
import React from 'react';

const RootDrawerNavigator = createDrawerNavigator();

export default function NavDrawer(){
    return (
    <NavigationContainer>
        <RootDrawerNavigator.Navigator>
            <RootDrawerNavigator.Screen name="Home" component={HomeStack} />
            <RootDrawerNavigator.Screen name="Post Ad" component={PostAdStack} />
            <RootDrawerNavigator.Screen name="Category" component={CategoryStack} />
        </RootDrawerNavigator.Navigator>
    </NavigationContainer>
    )
}

