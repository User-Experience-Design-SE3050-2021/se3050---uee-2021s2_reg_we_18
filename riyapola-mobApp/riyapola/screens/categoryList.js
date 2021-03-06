import React, { useState, useEffect } from "react";
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
  Alert,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { globalStyles } from "../styles/global";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
// import { categoryData } from "../categoryDataSet/categoryData";
import axios from "axios";

export default function categoryList({ navigation }) {
  // const [dataSet, setCategoryData] = useState(categoryData);
  const [modalVisible, setModalVisible] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [categoryData, setCategoryData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [deletedId, setDeletedId] = useState(null);
  const [textValue, setSearchQuerry] = useState("");

  useEffect(() => {
    setTimeout(() => {
      axios.get("https://riyapola.herokuapp.com/category").then((res) => {
        setCategoryData(res.data);
        if (res.data) {
          setCategoryData(res.data);
          setPageLoading(false);
        }
      });
    });
  });

  const onPressNewCategory = () => {
    navigation.navigate("Add");
  };

  const onPressUpdateCategory = (id) => {
    navigation.navigate("Update", {
      id: id,
    });
  };

  const deleteCategoryById = (id) => {
    setTimeout(() => {
      axios
        .delete(`https://riyapola.herokuapp.com/category/${id}`)
        .then((res) => {
          console.log("delete data", res.data);
        });
    });
  };

  return pageLoading ? (
    <View style={{ marginTop: "80%", marginLeft: "0%" }}>
      <ActivityIndicator size="large" color="green" />
    </View>
  ) : (
    <View
      style={{
        display: "flex",
        padding: 20,
        flexDirection: "column",
        backgroundColor: "white",
        maxHeight:"100%",
        minHeight:"100%"
      }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={style.addNewOuter}>
          <Text style={style.headerTextCategory}>LIST OF CATEGORIES</Text>
          <TouchableOpacity
            style={style.addNewBtn}
            onPress={() => onPressNewCategory()}
          >
            <Text style={style.deleteText}>Add New Category</Text>
          </TouchableOpacity>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "black", //"#777",
              padding: 8,
              marginTop: 15,
              minWidth: "100%",
              maxWidth: "100%",
              height: 40,
              borderRadius: 25,
              textAlign: "center",
            }}
            placeholder="Search here ..."
            onChangeText={(text) => setSearchQuerry(text)}
          >
            asdasd
          </TextInput>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(false);
          }}
        >
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <Text
                style={{
                  textAlign: "center",
                  marginBottom: 20,
                  fontSize: 20,
                  letterSpacing: 3,
                }}
              >
                Are you sure?
              </Text>
              <View style={style.twoButtonOuter}>
                <TouchableOpacity
                  style={style.updateBtn}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={style.updateText}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={style.deleteBtn}
                  onPress={() => deleteCategoryById()}
                >
                  <Text style={style.deleteText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <ScrollView style={style.scrollview} nestedScrollEnabled={true}>
          {categoryData
            .filter((elem) => {
              return elem.mainName
                .toLowerCase()
                .includes(`${textValue.toLocaleLowerCase()}`);
            })
            .map((value, index) => {
              return (
                <View style={style.listViewCard} key={index}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={style.listTableText}>
                      {value.mainName.toUpperCase()}
                    </Text>
                    <Text
                      style={{
                        marginBottom: 5,
                        marginTop: 5,
                        fontSize: 10,
                        marginRight: 13,
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 5,
                        color: "black",
                        padding: 10,
                        letterSpacing: 5,
                      }}
                    >
                      {value.type.toUpperCase()}
                    </Text>
                  </View>
                  <View style={style.twoButtonOuter}>
                    <TouchableOpacity
                      style={style.updateBtn}
                      onPress={() => onPressUpdateCategory(value._id)}
                    >
                      <Text style={style.updateText}>Update</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={style.deleteBtn}
                      onPress={() =>
                        // setModalVisible(true)
                        deleteCategoryById(value._id)
                      }
                    >
                      <Text style={style.deleteText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
        </ScrollView>
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
    // borderColor: "#95ebfc",
    // borderWidth: 1,
  },
  listViewCard: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#994b58",
    // shadowColor: "#000",
    // shadowOffset: {#77edaa
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
  },
  twoButtonOuter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  listTableText: {
    marginBottom: 5,
    marginTop: 5,
    fontSize: 25,
    marginLeft: 10,
    color: "#24a1a6",
  },
  updateBtn: {
    alignItems: "center",
    backgroundColor: "#24a665",
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
    backgroundColor: "#994b58",
    padding: 10,
    borderRadius: 5,
    marginRight: 0,
    width: 120,
  },
  deleteText: {
    color: "white",
  },
  headerTextCategory: {
    fontSize: 25,
    textAlign: "center",
    color: "black",
  },
  addNewBtn: {
    alignItems: "center",
    backgroundColor: "#24a669",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 105,
    borderColor: "#000",
    borderWidth: 2,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
