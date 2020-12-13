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
  TextInput, TouchableOpacity
} from "react-native";
import Firebase from '../utils/firebase';
import { Component } from "react";
import AppTabNavigation from "../routes";
import App from "../App";




export default class Account extends Component{  
    
   render(){  

   return(
       <View>   
       <Text>   {Firebase.auth().currentUser.uid} </Text>
  
      <Button onPress={()=>{Firebase.auth().signOut()}}/>
      </View>
   );
}
}