import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import PostAdStack from './postAdStack';
import HomeStack from './homeStack';
import CategoryStack from './categoryStack';
import AdminStack from './AdminStack';
import UserStack from './userStack'
import myAdsStack from './myAdsStack';
import AllAdsStack from './AllAdsStack'
import React, { useState ,useEffect} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
const RootDrawerNavigator = createDrawerNavigator();

export default function NavDrawer(){
    // const [id, setId] = useState("")
    // useEffect(() => {
    //     AsyncStorage.getItem('user', (err, result) => {
    //       console.log(result);
    //       result =JSON.parse(result);
    //       if(result){
              
    //         setId(result._id)
    //       }
          
    //     //   setUser({
    //     //     name : result.name,
    //     //     email :result.email,
    //     //     password : result.password,
    //     //     type : result.type,
    //     //     phoneNumber :result.phoneNumber,
    //     //     wishList:result.wishList,
    //     //     image:result.image
    //     //     })
    //     //     console.log("resultuser",user);
          
    //       // setAccount({
    //       //     ...account,
    //       //     userId:user._id
    //       // })
    //            });
    //           //  AsyncStorage.removeItem("tempUser");
    //   }, [])
    return (
    <NavigationContainer>
        <RootDrawerNavigator.Navigator initialRouteName="Home" >
            <RootDrawerNavigator.Screen name="Home" component={HomeStack} />
            <RootDrawerNavigator.Screen name="Post Ad" component={PostAdStack} />
            <RootDrawerNavigator.Screen name="Category" component={CategoryStack} />
            {/* <RootDrawerNavigator.Screen name="Category List" component={CategoryListStack} /> */}
            <RootDrawerNavigator.Screen name="Ads Management" component={AdminStack} />
          {/* {id} */}
             <RootDrawerNavigator.Screen name="User Profile" component={UserStack} />
             <RootDrawerNavigator.Screen name="My Ads" component={myAdsStack} />
        
           
        </RootDrawerNavigator.Navigator>
    </NavigationContainer>
    )
}

