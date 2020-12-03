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
import test from "./test";
import Newsapi from "../utils/newsapi";
import { max } from "react-native-reanimated";


export default class NewsFeed extends React.Component {
  render() {
    return (
      <ScrollView >
      <View style={styles.container}>
      <Newsapi country="ng" category="science"/>
        <Button
          title="teste git"
          onPress={() => this.props.navigation.navigate("test")}
        />
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECECEC",
    justifyContent: "center",
  
  },
});
