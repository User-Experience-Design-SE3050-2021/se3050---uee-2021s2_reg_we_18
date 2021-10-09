import React, { useState,useEffect } from 'react';
import { Text, View } from 'react-native';
import { Card, Title, Headline } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { globalStyles } from '../styles/global';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import MyAdsTab from '../shared/myAdsTab';
import FlatButton from '../shared/button';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function vehicleMyAds({navigation}) {

    const [vehicleAds, setVehicleAds] = useState([
        // { title: 'Axio For Sale', condition: 'Registered', location: 'Colombo', price: 'Rs. 5,000,000', seller: 'Saman', date: '2021-09-12', image: '../images/vehicles/axio.jpg', key:'1',status:'approved' },
        // { title: 'Allion For Sale', condition: 'Unregistered', location: 'Gampaha', price: 'Rs. 6,500,000', seller: 'Rohan', date: '2021-09-12', image: '../images/spareparts/radio.jpg', key: '2' ,status:'approved' },
        // { title: 'Vitz For Sale', condition: 'Registered', location: 'Kandy', price: 'Rs. 3,000,000', seller: 'Saman', date: '2021-09-12', image: '../images/spareparts/radio.jpg', key: '3',status:'Not approved'  }
    ])
    const [user, setUser] = useState({
        _id:"",
        name : "",
        email : "",
        password : "",
        type : "buyerseller",
        phoneNumber :"",
        wishList:[],
        image:[]
    });
useEffect(() => {
    AsyncStorage.getItem('user', (err, result) => {
        console.log(result);
        result =JSON.parse(result);
        setUser({
            _id:result._id,
          name : result.name,
          email :result.email,
          password : result.password,
          type : result.type,
          phoneNumber :result.phoneNumber,
          wishList:result.wishList,
          image:result.image
          })
          console.log("result._id",result._id);
          console.log("resultuser",user);
        // setId(result._id)
        // setAccount({
        //     ...account,
        //     userId:user._id
        // })
             });
  
            axios.get('https://riyapola.herokuapp.com/vehicle').then((res) => {
                if (res.status == 200) {
                    // dispatch({
                    //     type: GET_All_VEHICLE_ADS,
                    //     payload: res.data
                    // })
                    // resolve(res.data)
                    // setVehicleAds(res.data)
                    console.log("res.data",res.data);
                    setVehicleAds(
                        res.data.filter(vehicle=>vehicle.userId === user._id)
                    )
                    console.log("vehicleAds",vehicleAds);
                }
                // else
                //     resolve(res)
            }).catch((err) => {
                // reject(err);
            })
        
}, [])
    return (
        <View>
            <MyAdsTab  pageIndex={0} navigation={navigation} />
        <FlatList
            data={vehicleAds}
            style={globalStyles.card}
            // key={item._id}
            // getItem={Item._id === user.id}
            renderItem={({ item }) => (
                <View key={item._id}>
                <TouchableOpacity onPress={() => console.log("ad pressed")} >
                    <Card style={globalStyles.cardContent} >
                        <Card.Cover source={require('../images/vehicles/axio.jpg')} />
                        <Card.Content style={globalStyles.cardContainer}>
                            <Title> {item.title}</Title><View><Text> | {item.condition}</Text></View>
                            <Title style={{ fontSize: 15 }}><Icon iconStyle={{ fontSize: 15 }} color="blue" name="place" />{item.location}</Title>
                        </Card.Content>
                        <Card.Content style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                            <Headline style={{ fontWeight: "bold" }}>{item.price}</Headline>
                            <Title style={{ fontSize: 15 }}>{item.seller} | {item.date} </Title>
                        </Card.Content>
                        <Card.Content style={{ flexDirection: 'row', display: 'flex' }}>
                            <Headline style={{ fontWeight: "bold" }}>Status:</Headline>
                            <Title style={{ fontSize: 18 }}>  {item.status} </Title>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>
                <FlatButton text="Edit" onPress={()=>{navigation.navigate('Home')}} />
                {/* <FlatButton text="Delete" onPress={()=>{navigation.navigate('Home')}}  /> */}
                </View>
                
            )}
        />
        </View>
    )
}