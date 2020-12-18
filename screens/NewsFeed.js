
import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";

import Newsapi from "../utils/newsapi";



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
