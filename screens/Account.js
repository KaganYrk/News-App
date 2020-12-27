import { Text, View,Dimensions } from "react-native";
import Firebase from "../utils/firebase";
import { Component } from "react";
import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";


const screenwidth = Dimensions.get("window").width;
export default class Account extends Component {
  render() {
    return (
      <View style={{alignItems:"center",flex:1}}>
        <Text> {Firebase.auth().currentUser.email} </Text>

        <TouchableHighlight
          title="çıkış"
          onPress={() => {
            Firebase.auth().signOut();
          }}
          style={{
            marginTop: 20,
            borderRadius: 2,
            width: (screenwidth * 2) / 3,
            height: 50,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        ><Text style={{color:"white"}}>Çıkış Yap</Text></TouchableHighlight>
      </View>
    );
  }
}
