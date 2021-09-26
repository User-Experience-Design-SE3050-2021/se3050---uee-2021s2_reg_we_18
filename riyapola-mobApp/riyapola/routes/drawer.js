import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import PostAdStack from './postAdStack';
import HomeStack from './homeStack';
import CategoryStack from './categoryStack';
import React from 'react';
import CategoryListStack from './categoryListStack';
import AdminStack from './AdminStack';
import UserStack from './userStack'

const RootDrawerNavigator = createDrawerNavigator();

export default function NavDrawer(){
    return (
    <NavigationContainer>
        <RootDrawerNavigator.Navigator>
            <RootDrawerNavigator.Screen name="Home" component={HomeStack} />
            <RootDrawerNavigator.Screen name="Post Ad" component={PostAdStack} />
            <RootDrawerNavigator.Screen name="Category" component={CategoryStack} />
            {/* <RootDrawerNavigator.Screen name="Category List" component={CategoryListStack} /> */}
            <RootDrawerNavigator.Screen name="Ads Management" component={AdminStack} />
            <RootDrawerNavigator.Screen name="User Profile" component={UserStack} />
        </RootDrawerNavigator.Navigator>
    </NavigationContainer>
    )
}

