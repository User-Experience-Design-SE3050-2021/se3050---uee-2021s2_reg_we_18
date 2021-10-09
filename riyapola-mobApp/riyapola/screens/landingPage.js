import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Picker,
  ImageBackground,
} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { globalStyles } from "../styles/global";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, LinearProgress } from "react-native-elements";
import CategoryTabs from "../shared/categoryTabs";
import { Avatar, Paragraph, Headline, Card, Title } from "react-native-paper";
import Tabs from "../shared/Tabs";
import axios from "axios";

export default function landingPage({ navigation }) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://riyapola.herokuapp.com/category").then((res) => {
      setCategories(res.data);
    })
  }, [])

  console.log('categories: ', categories);


  return (
    <View>
      <Tabs pageIndex={0} navigation={navigation} style={{ flex: 1 }} />

      <ScrollView>
        <Headline style={{ alignSelf: 'center', fontSize: 28, width: 'auto', fontWeight: 'bold', color: '#076AE0', paddingTop: 20 }}>Vehicles</Headline>
        {
          categories
            .filter((val) =>
              val.type == "Vehicles")
            .slice(0, 4)
            .map((data, index) =>
              <TouchableOpacity>
                <Card style={{ margin: 20, marginTop: 10, borderWidth: 1, borderColor: "#076AE0"}} >
                  <Card.Content>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                      <View>
                        <Card.Cover style={{ width: 100, height: 100, backgroundColor: '#fff' }} source={require('../images/vehicles/listVehicle.png')} />
                      </View>
                      <View style={{ left: 30, top: 30 }}>
                        <Title style={{ fontSize: 25, color: "#076AE0" }}>{data.mainName}</Title>
                      </View>
                    </View>

                  </Card.Content>
                  <LinearProgress style={{ top: 5 }} color="#076AE0" />
                </Card>

              </TouchableOpacity>
            )
        }
        <Headline style={{ alignSelf: 'center', fontSize: 28, width: 'auto', fontWeight: 'bold', color: '#0abbcf', paddingTop: 10, }}>Spare Parts</Headline>
        {
          categories
            .filter((val) =>
              val.type == "Spare Parts")
            .slice(0, 4)
            .map((data, index) =>
              <TouchableOpacity>
                <Card style={{ margin: 20, marginTop: 10, bottom:10, borderWidth: 1, borderColor: "#0abbcf", }}>
                  <Card.Content>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                      <View>
                        <Card.Cover style={{ width: 100, height: 100, backgroundColor: '#fff' }} source={require('../images/spareparts/listSparepart.png')} />
                      </View>
                      <View style={{ left: 30, top: 30 }}>
                        <Title style={{ fontSize: 25, color: "#0abbcf" }}>{data.mainName}</Title>
                      </View>
                    </View>

                  </Card.Content>
                  <LinearProgress style={{ top: 5 }} color="#0abbcf" />
                </Card>

              </TouchableOpacity>
            )
        }
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
    maxWidth: "100%",
    minWidth: "100%",
    height: 50,
  },
  mainCatText: {
    lineHeight: 50,
    letterSpacing: 3,
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
