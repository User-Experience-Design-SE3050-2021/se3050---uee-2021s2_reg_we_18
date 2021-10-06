import React, { useState } from "react";
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
import { Avatar, Paragraph  } from "react-native-paper";

export default function landingPage() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 5,
      }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Avatar.Text
          style={{ width: 200, marginTop: 20, marginLeft: "20%"}}
          size={34}
          label="Select a Vehicle Category"
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 15,
          }}
        >
          <TouchableOpacity style={style.mainCategories}>
            <Text style={style.mainCatText}>Car</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.mainCategories}>
            <Text style={style.mainCatText}>Bus</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 15,
          }}
        >
          <TouchableOpacity style={style.mainCategories}>
            <Text style={style.mainCatText}>Van</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.mainCategories}>
            <Text style={style.mainCatText}>Lorry</Text>
          </TouchableOpacity>
        </View>

        <Avatar.Text
          style={{ width: 250, marginTop: 20, marginLeft: "15%" }}
          size={34}
          label="Select a Spare Parts Category"
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 15,
          }}
        >
          <TouchableOpacity style={style.mainCategories}>
            <Text style={style.mainCatText}>Headlight</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.mainCategories}>
            <Text style={style.mainCatText}>Brakepad</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 15,
          }}
        >
          <TouchableOpacity style={style.mainCategories}>
            <Text style={style.mainCatText}>Water Pump</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.mainCategories}>
            <Text style={style.mainCatText}>Viper</Text>
          </TouchableOpacity>
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
    backgroundColor: "#000",
    shadowColor: "#000",
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
    width: 150,
    height: 80,
  },
  mainCatText: {
    lineHeight: 80,
    textAlign: "center",
    fontSize: 20,
    // fontWeight:"bold",
    color: "white",
    // fontFamily:"Cochin",
    textShadowColor: "white",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 6,
  },
});
