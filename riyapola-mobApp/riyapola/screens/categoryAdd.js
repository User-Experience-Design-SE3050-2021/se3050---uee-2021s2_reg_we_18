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
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

// import Button from '../shared/button';

export default function addCategory() {
  const [selectedValue, setSelectedValue] = useState("Vehicles");
  const [category, setCategory] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const [makeArray, setMake] = useState(null);
  const [inputValues, setInputValues] = useState({
    type: "",
    make: [],
  });

  const addMakeToArray = () => {
    setInputValues({ ...inputValues, make:Array.from(new Set( [...inputValues.make, makeArray])) });
  };

  //Array.from(new Set([...this.state.vehicleMake, e.target.textContent])); 

  const removeMakeToArray = () => {
    setInputValues({ ...inputValues, make: [] });
  };

  const deleteMake = (index) => {
    let vehicleMake = inputValues.make;
    vehicleMake.splice(index, 1);
    setInputValues({ ...inputValues, make: vehicleMake });
  };

  const handleSubmit = () => {
    let submitForm = inputValues;

    submitForm.type = selectedValue;

    if (submitForm.mainName == undefined || submitForm.mainName == "") {
      alert("Please enter a category Main Name");
    } else if (
      submitForm.mainDescription == undefined ||
      submitForm.mainDescription == ""
    ) {
      alert("Please enter a category Main Description");
    } else if (submitForm.make.length === 0) {
      alert("Please enter at least one vehicle Make");
    } else {
      axios
        .post("https://riyapola.herokuapp.com/category", submitForm)
        .then((res) => {
          if (res.status === 200) {
            alert("Category Added Successfully!");
            setInputValues({
              type: "",
              make: [],
            });
          } else {
            alert("Add Category Failed");
          }
        });
    }
  };

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

        <Text style={style.inputText}>Main Name</Text>
        <TextInput
          style={style.input}
          placeholder="Select a Category Name"
          onChangeText={(text) =>
            setInputValues({ ...inputValues, mainName: text })
          }
        />

        <Text style={style.inputText}>Main Description</Text>
        <TextInput
          style={style.input}
          placeholder="Add a main description"
          onChangeText={(text) =>
            setInputValues({ ...inputValues, mainDescription: text })
          }
        />
        <Text style={style.inputText}>Vehicle Make</Text>
        <TextInput
          style={style.input}
          placeholder="Select a Vehicle Make"
          onChangeText={(text) => setMake(text)}
        />

        <View style={style.buttonWrapper}>
          <View style={style.button}>
            <Button
              title="Add Make"
              color="#841584"
              onPress={() => addMakeToArray()}
            />
          </View>
          <View style={style.button}>
            <Button
              title="Remove All Make"
              color="#841584"
              onPress={() => removeMakeToArray()}
            />
          </View>
        </View>

        <ScrollView
          style={style.scrollview}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
        >
          {inputValues.make.length !== 0 ? (
            inputValues.make.map((make, index) => {
              return (
                <View
                  key={index}
                  style={{
                    marginLeft: 30,
                    marginTop: 15,
                    marginRight: 10,
                    width: 230,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <View style={{ width: 200 }}>
                    <Button title={make} color="blue" />
                  </View>
                  <MaterialIcons
                    name="delete-outline"
                    size={28}
                    onPress={() => deleteMake(index)}
                    color={"red"}
                  />
                </View>
              );
            })
          ) : (
            <View
              // key={index}
              style={{
                marginLeft: 30,
                marginTop: 15,
                marginRight: 10,
                width: 230,
              }}
            >
              {/* <MaterialIcons name="delete-outline" size={28} /> */}
              <Button title="No Makes Available" color="blue" />
            </View>
          )}
        </ScrollView>

        <View style={style.button}>
          <Button
            title="Add Category"
            color="orange"
            onPress={() => handleSubmit()}
          />
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
