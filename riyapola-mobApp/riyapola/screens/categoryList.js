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
  Modal,
} from "react-native";
import { globalStyles } from "../styles/global";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { categoryData } from "../categoryDataSet/categoryData";

export default function categoryList({navigation}) {
  const [dataSet, setCategoryData] = useState(categoryData);

  const onPressNewCategory = () => {
    navigation.navigate('Add')
  }

  const onPressUpdateCategory = () => {
    navigation.navigate('Update')
  }

  return (
    <View style={globalStyles.container}>
      <View style={style.addNewOuter}>
        <Text style={style.headerTextCategory}>List Of Categories</Text>
        <TouchableOpacity style={style.addNewBtn} onPress={() => onPressNewCategory()}>
          <Text style={style.deleteText}>Add new category</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={false}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View >
          <View >
            <Text>Hello World!</Text>
          </View>
        </View>
      </Modal>

      <ScrollView style={style.scrollview}>
        {dataSet.map((value, index) => {
          return (
            <View style={style.listViewCard} key={index}>
              <Text style={style.listTableText}>{value.mainName}</Text>
              <View style={style.twoButtonOuter}>
                <TouchableOpacity style={style.updateBtn} onPress={() => onPressUpdateCategory()} >
                  <Text style={style.updateText}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.deleteBtn}>
                  <Text style={style.deleteText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
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
    //   flex:1,
    marginTop: 20,
    maxHeight: 500,
    width: 320,
    // backgroundColor: "#bcd2e3",
    marginBottom: 20,
    padding: 5,
    borderColor: "#95ebfc",
    borderWidth: 1,
  },
  listViewCard: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    // borderWidth:1,
    borderRadius: 10,
    // padding:10,
    borderColor: "#77edaa",
    backgroundColor: "#d9d9d9",
  },
  twoButtonOuter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  listTableText: {
    marginBottom: 10,
    marginTop: 5,
    fontSize: 25,
    marginLeft: 10,
  },
  updateBtn: {
    alignItems: "center",
    backgroundColor: "#3388ff",
    padding: 10,
    borderRadius: 5,
    marginRight: 20,
    width: 120,
  },
  updateText: {
    color: "white",
  },
  deleteBtn: {
    alignItems: "center",
    backgroundColor: "#ff3333",
    padding: 10,
    borderRadius: 5,
    marginRight: 20,
    width: 120,
  },
  deleteText: {
    color: "white",
  },
  headerTextCategory: {
    fontSize: 25,
    textAlign: "center",
  },
  addNewBtn: {
    alignItems: "center",
    backgroundColor: "#0d4db5",
    padding: 10,
    borderRadius: 5,
    marginRight: 20,
    marginTop: 10,
    maxWidth: "100%",
    minWidth: "100%",
  },
  addNewOuter: {
    display: "flex",
    flexDirection: "column",
    //   justifyContent:"space-between"
  },
});
