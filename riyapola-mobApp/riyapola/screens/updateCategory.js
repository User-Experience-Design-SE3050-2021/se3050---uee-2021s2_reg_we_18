import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Picker
} from "react-native";
import { globalStyles } from "../styles/global";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import CategoryTabs from "../shared/categoryTabs";
// import Button from '../shared/button';

export default function updateCategory() {

    const [selectedValue, setSelectedValue] = useState("Vehicles");
    const [inputValues, setInputValues] = useState({
        categoryName : '',
        childcategoryName : ''
    })


  return (
    <View style={globalStyles.categoryAddContainer}>
    {/* <View style={{ flex: 1 }}> */}
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <Text style={style.inputText}>Select Type</Text>
      <Picker
        selectedValue={selectedValue}
        style={{
          height: 50,
          width: 150,
          width: 200,
          height: 30,
          marginLeft: "20%",
          color: "black",
        }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Vehicles" value="Vehicles" />
        <Picker.Item label="Spare Parts" value="Spare Parts" />
      </Picker>

      <Text style={style.inputText}>Update Category Name</Text>
      <TextInput style={style.input} placeholder="Update Category Name" />

      <Text style={style.inputText}>Update Child Category Name</Text>
      <TextInput
        style={style.input}
        placeholder="Update Child Category Name"
      />
      <Text style={style.inputText}>Update Vehicle Make</Text>
      <TextInput style={style.input} placeholder="Update Vehicle Make" />

      <View style={style.buttonWrapper}>
        <View style={style.button}>
          <Button title="Add Make" color="#841584" />
        </View>
        <View style={style.button}>
          <Button title="Select All" color="#841584" />
        </View>
        <View style={style.button}>
          <Button title="Remove All" color="#841584" />
        </View>
      </View>

      <ScrollView
        style={style.scrollview}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            marginLeft: 30,
            marginTop: 15,
            marginRight: 10,
            width: 230,
          }}
        >
          <Button title="Add Category" color="blue" />
        </View>

        <View
          style={{
            marginLeft: 30,
            marginTop: 15,
            marginRight: 10,
            width: 230,
          }}
        >
          <Button title="Add Category" color="blue" />
        </View>

        <View
          style={{
            marginLeft: 30,
            marginTop: 15,
            marginRight: 10,
            width: 230,
          }}
        >
          <Button title="Add Category" color="blue" />
        </View>

        <View
          style={{
            marginLeft: 30,
            marginTop: 15,
            marginRight: 10,
            width: 230,
          }}
        >
          <Button title="Add Category" color="blue" />
        </View>

        <View
          style={{
            marginLeft: 30,
            marginTop: 15,
            marginRight: 10,
            width: 230,
          }}
        >
          <Button title="Add Category" color="blue" />
        </View>

        <View
          style={{
            marginLeft: 30,
            marginTop: 15,
            marginRight: 10,
            width: 230,
          }}
        >
          <Button title="Add Category" color="blue" />
        </View>

        <View
          style={{
            marginLeft: 30,
            marginTop: 15,
            marginRight: 10,
            width: 230,
          }}
        >
          <Button title="Add Category" color="blue" />
        </View>
      </ScrollView>

      <View style={style.button}>
        <Button title="Update Category" color="orange" />
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
  width: 290,
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
  // alignItems: "center",
  // backgroundColor: "#4d98d1",
  // padding: 10,
  // borderRadius: 5,
  marginBottom: 10,
  width: 290,
},
buttonWrapper: {
  display: "flex",
  flexDirection: "column",
  marginTop: 10,
  // backgroundColor:black
},
scrollview: {
  marginTop: 20,
  maxHeight: 200,
  minHeight: 200,
  width: 295,
  // backgroundColor: "#bcd2e3",
  marginBottom: 20,
  borderColor: "green",
  borderWidth: 1,
},
});

