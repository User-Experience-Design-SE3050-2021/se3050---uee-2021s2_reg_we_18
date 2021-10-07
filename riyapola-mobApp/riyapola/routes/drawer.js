import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import PostAdStack from './postAdStack';
import HomeStack from './homeStack';
import CategoryStack from './categoryStack';
import React from 'react';
import AdminStack from './AdminStack';
import UserStack from './userStack'
import myAdsStack from './myAdsStack';

const RootDrawerNavigator = createDrawerNavigator();

export default function NavDrawer(){
    return (
    <NavigationContainer>
        <RootDrawerNavigator.Navigator initialRouteName="Home" >
            <RootDrawerNavigator.Screen name="Home" component={HomeStack} />
            <RootDrawerNavigator.Screen name="Post Ad" component={PostAdStack} />
            <RootDrawerNavigator.Screen name="Category" component={CategoryStack} />
            {/* <RootDrawerNavigator.Screen name="Category List" component={CategoryListStack} /> */}
            <RootDrawerNavigator.Screen name="Ads Management" component={AdminStack} />
            <RootDrawerNavigator.Screen name="User Profile" component={UserStack} />
            <RootDrawerNavigator.Screen name="My Ads" component={myAdsStack} />
        </RootDrawerNavigator.Navigator>
    </NavigationContainer>
    )
}

