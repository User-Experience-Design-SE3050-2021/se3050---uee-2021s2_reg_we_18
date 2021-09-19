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
// import Button from '../shared/button';

export default function addCategory() {

    const [selectedValue, setSelectedValue] = useState("Vehicles");


  return (
    <View style={globalStyles.container}>

      <Text style={style.inputText}>Select Type</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150,borderWidth:1,borderColor:'#777',width:200,height:30}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Vehicles" value="Vehicles" />
        <Picker.Item label="Spare Parts" value="Spare Parts" />
      </Picker>

      <Text style={style.inputText}>Category Name</Text>
      <TextInput style={style.input} placeholder="Select a Category Name" />
      <Text style={style.inputText}>Child Category Name</Text>
      <TextInput
        style={style.input}
        placeholder="Select a Child Category Name"
      />
      <Text style={style.inputText}>Vehicle Make</Text>
      <TextInput style={style.input} placeholder="Select a Vehicle Make" />

      <View style={style.buttonWrapper}>
        <TouchableOpacity style={style.button}>
          <Text>Add Make</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button}>
          <Text>Select All</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button}>
          <Text>Remove All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={style.scrollview}></ScrollView>

      <TouchableOpacity style={style.button}>
        <Text> Add Category</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    marginTop: 5,
    width: 200,
    height: 30,
    borderRadius: 5,
  },
  inputText: {
    marginTop: 15,
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
    width: 200,
    backgroundColor: "#bcd2e3",
    marginBottom: 20,
  },
});
