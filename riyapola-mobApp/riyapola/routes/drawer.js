import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AllAdsStack from './allAdsStack';
import HomeStack from './homeStack';
import CategoryStack from './categoryStack';
import React from 'react';

const RootDrawerNavigator = createDrawerNavigator();

export default function NavDrawer(){
    return (
    <NavigationContainer>
        <RootDrawerNavigator.Navigator>
            <RootDrawerNavigator.Screen name="Home" component={HomeStack} />
            <RootDrawerNavigator.Screen name="All ads" component={AllAdsStack} />
            <RootDrawerNavigator.Screen name="Category" component={CategoryStack} />
        </RootDrawerNavigator.Navigator>
    </NavigationContainer>
    )
}

