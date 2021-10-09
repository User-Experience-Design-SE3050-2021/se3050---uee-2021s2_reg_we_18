import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Picker,
} from "react-native";
import { globalStyles } from "../styles/global";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import CategoryTabs from "../shared/categoryTabs";
import { Avatar, Paragraph } from "react-native-paper";
import Tabs from "../shared/Tabs";
import axios from "axios";

export default function landingPage({ navigation }) {

  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    axios.get("https://riyapola.herokuapp.com/category").then((res) => {
      setCategories(res.data);
    })
  },[])
  
  console.log('categories: ', categories);


  return (
    <View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Tabs pageIndex={0} navigation={navigation} style={{ flex: 1 }} />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            padding: 5,
          }}
        >
          <ScrollView 
          contentContainerStyle={{ flexGrow: 1 }}
          nestedScrollEnabled={true}
          >
            <Avatar.Text
              style={{
                marginTop: 20,
                alignSelf: "center",
                width: "auto",
                padding: 20,
                backgroundColor:"white",
                borderWidth:1,
                borderColor:"#123875",
                // color:"#123875"
                
              }}
              size={34}
              label=" Vehicles "
            />

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: 15,
              }}
            >
              {
                categories
                  .filter((val) =>
                   val.type == "Vehicles")
                  .slice(0,4)
                  .map((data,index) => 
                    <TouchableOpacity style={style.mainCategories} key={index}>
                    <Text style={style.mainCatText}>{data.mainName}</Text>
                  </TouchableOpacity>
                  )
              }

            </View>  



            <Avatar.Text
              style={{
                marginTop: 20,
                alignSelf: "center",
                width: "auto",
                padding: 20,
                backgroundColor:"white",
                borderWidth:1,
                borderColor:"#123875",
                // color:"#123875"
                
              }}
              size={34}
              label="Spare Parts"
            />

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: 15,
              }}
            >
             {
                categories
                  .filter((val) =>
                   val.type == "Spare Parts")
                  .slice(0,4)
                  .map((data,index) => 
                    <TouchableOpacity style={style.mainCategories} key={index}>
                    <Text style={style.mainCatText}>{data.mainName}</Text>
                  </TouchableOpacity> //#125675 //#751244
                  )
              }
            </View>

            

            {/* <Avatar.Text
          style={{ width: 400, marginTop: 20, marginLeft:20,marginRight:20,height:55 }}
          size={34}
          label="Sometimes dealerships tend to focus more on developing from the inside-out, 
          more so than outside-in. They focus on brand development, inbound marketing, 
          and making the buying process easier and easier for clients. 
          But where is the focus on putting your nose down and actively searching for better leads?
           The only way a successful business can run is by being on the prowl for new customers"
        /> */}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    marginTop: 5,
    width: 300,
    height: 30,
    borderRadius: 5,
    textAlign: "center",
  },
  inputText: {
    marginTop: 15,
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#4d98d1",
    padding: 10,
    borderRadius: 5,
    marginRight: 20,
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    // backgroundColor:black
  },
  scrollview: {
    marginTop: 20,
    maxHeight: 200,
    minHeight: 200,
    width: 300,
    backgroundColor: "#bcd2e3",
    marginBottom: 20,
  },
  mainCategories: {
    borderColor: "#77edaa",
    backgroundColor: "#125675",
    // shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 10,
    // borderWidth:1,
    borderRadius: 10,
    maxWidth:"100%",
    minWidth:"100%",
    height: 50,
  },
  mainCatText: {
    lineHeight: 50,
    letterSpacing:3,
    textAlign: "center",
    fontSize: 23,
    // fontWeight:"bold",
    color: "white",
    // fontFamily:"Cochin",
    // textShadowColor: "white",
    // textShadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
    // textShadowRadius: 6,
  },
});
