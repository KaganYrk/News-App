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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import test from "./test";
import Newsapi from "../utils/newsapi";

export default class NewsFeed extends React.Component {
  render() {
    return (
      <ScrollView >
      <View style={styles.container}>

      <Newsapi country="tr" category="entertainment"/>
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
    backgroundColor: "white",
    justifyContent: "center",
  
  },
});
