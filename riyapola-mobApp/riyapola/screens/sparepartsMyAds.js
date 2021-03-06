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
export default function sparepartsMyAds({navigation}) {

    const [sparepartsAds, setSparepartsAd] = useState(null)
    const [user, setUser] = useState({
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
        // result =JSON.parse(result);
        if(result){
            setUser(JSON.parse(result))
            // setUser({
            //     _id:result._id,
            //   name : result.name,
            //   email :result.email,
            //   password : result.password,
            //   type : result.type,
            //   phoneNumber :result.phoneNumber,
            //   wishList:result.wishList,
            //   image:result.image
            //   })
              console.log("result._id",result._id);
              console.log("resultuser",user);
            }
            else{
                setUser(null)
                alert('Please login to see you Ads advertisements')
                navigation.navigate('login')
            }
        // setId(result._id)
        // setAccount({
        //     ...account,
        //     userId:user._id
        // })
             });
   
            axios.get('https://riyapola.herokuapp.com/spareparts/').then((res) => {
                if(res.status == 200){
                    // dispatch({
                    //     type: actionType.GET_ALL_SPAREPARTS_ADS,
                    //     payload: res.data
                    // })
                    setSparepartsAd(
                       res.data.filter(spareParts=>spareParts.userId === user._id)
                    )
                    console.log("sparepartsMyAds",sparepartsMyAds);
                }
                // else    
                //     resolve(res.data)
            }).catch((err) => {
                // reject(err);
            })
       
           
        
}, [])
useEffect(() => {
    console.log('useEffect user',user)
    console.log('useEffect sparepartsMyAds',sparepartsMyAds)
    axios.get('https://riyapola.herokuapp.com/spareparts/').then((res) => {
        if(res.status == 200){
            // dispatch({
            //     type: actionType.GET_ALL_SPAREPARTS_ADS,
            //     payload: res.data
            // })
            setSparepartsAd(
               res.data.filter(spareParts=>spareParts.userId === user._id)
            )
            console.log("sparepartsMyAds",sparepartsMyAds);
        }
        // else    
        //     resolve(res.data)
    }).catch((err) => {
        // reject(err);
    })

}, [user])
    return (
        <View style={{flex: 1}}>
            <MyAdsTab pageIndex={1} navigation={navigation}  />
        <FlatList
            data={sparepartsAds}
            style={globalStyles.card}
            // getItem={item._id === user.id}
            renderItem={({ item }) => (
                <View key={item._id} style={{flex:1}}>
                <TouchableOpacity  key={item._id}>
                    <Card style={globalStyles.cardContent} key={item._id} onPress={() => navigation.navigate('sparepartDetail',item._id)}>
                        <Card.Cover source={{ uri: 'data:image/jpeg;base64,' + item.images[0] }} />
                        <Card.Content style={globalStyles.cardContainer}>
                            <Title> {item.title}</Title><View><Text>  {item.condition}</Text></View>
                            <Title style={{ fontSize: 15 }}><Icon iconStyle={{ fontSize: 15 }} color="blue" name="place" />{item.location}</Title>
                        </Card.Content>
                        <Card.Content style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                            <Headline style={{ fontWeight: "bold" }}>Rs.{item.price.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}/=</Headline>
                            <Title style={{ fontSize: 15 }}>{user.name} | {item.updatedAt.split('T')[0]} </Title>
                        </Card.Content>
                        <Card.Content style={{ flexDirection: 'row', display: 'flex' }}>
                            <Headline style={{ fontWeight: "bold" }}>Status:</Headline>
                            <Title style={{ fontSize: 18 }}>  {item.status} </Title>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>
                <FlatButton text="Edit" onPress={()=>{navigation.navigate('updateSparepartsAd',item._id)}}  />
                {/* <FlatButton text="Delete" onPress={()=>{navigation.navigate('Home')}}  /> */}
                </View>
            )}
        />
        </View>
    )
}