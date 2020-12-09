import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  onPress,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Button,
} from "react-native";

import Newsapi from "../utils/newsapi";



function  Details  ({route,navigation}){
    const {item}  = route.params;
    console.log(item)
    
    return (
      <ScrollView >
      <View style={styles.container}>
      <Text> {item.description} </Text>

      </View>
      </ScrollView>
    );
  
}
export default Details;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECECEC",
    justifyContent: "center",
  
  },
});
