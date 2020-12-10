import { StatusBar } from "expo-status-bar";
import React,{useEffect} from "react";
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
import test from "./CategoryFeed";
import Newsapi from "../utils/newsapi";
import { max } from "react-native-reanimated";


const  NewsFeed = ({navigation})=>{
 
  
    return (
      <ScrollView >
      <View style={styles.container}>
      <Newsapi  country="tr" category="general" />
      </View>
      </ScrollView>
    );
  
}
export default NewsFeed;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECECEC",
    justifyContent: "center",
  
  },
});
