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
import { LinearGradient } from 'expo-linear-gradient';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Newsapi from "../utils/newsapi";
import { max } from "react-native-reanimated";


function  CategoryFeed  ({route,navigation}){
  const {country,category,q,language}  = route.params;
  console.log(route.params);
    return (
      <ScrollView >
      <View style={styles.container}>
      <Newsapi  q={q} language={language} country={country} category={category} />

      </View>
      </ScrollView>
    );
  
}
export default CategoryFeed;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECECEC",
    justifyContent: "center",
  
  },
});
