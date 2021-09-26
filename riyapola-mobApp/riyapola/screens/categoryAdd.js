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
// import Button from '../shared/button';

export default function addCategory() {
  const [selectedValue, setSelectedValue] = useState("Vehicles");
  const [inputValues, setInputValues] = useState({
    categoryName: "",
    childcategoryName: "",
  });

  return (
    <View style={globalStyles.container}>
      {/* <View style={{ flex: 1 }}> */}
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
          <Text style={style.inputText}>Select Type</Text>
          <Picker
            selectedValue={selectedValue}
            style={{
              height: 50,
              width: 150,
              width: 200,
              height: 30,
              marginLeft: "20%",
            }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
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

          <ScrollView style={style.scrollview}>
            <TouchableOpacity style={style.button}>
              <Text>Items</Text>
              <Text>Items</Text>
              <Text>Items</Text>
              <Text>Items</Text>
              <Text>Items</Text>
              <Text>Items</Text>
              {/* <Text>Items</Text>
              <Text>Items</Text>
              <Text>Items</Text>
              <Text>Items</Text>
              <Text>Items</Text>
              <Text>Items</Text>
              <Text>Items</Text>
              <Text>Items</Text>
              <Text>Items</Text> */}
            </TouchableOpacity>
          </ScrollView>

          <TouchableOpacity style={style.button}>
            <Text> Add Category</Text>
          </TouchableOpacity>
          
        </ScrollView>
      {/* </View> */}
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
    minHeight:200,
    width: 300,
    backgroundColor: "#bcd2e3",
    marginBottom: 20,
  },
});
