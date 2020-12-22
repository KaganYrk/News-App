

import {
  Text,
  View,
  Button
} from "react-native";
import Firebase from '../utils/firebase';
import { Component } from "react";
import React from "react";
import { addNotificationReceivedListener, getExpoPushTokenAsync } from "expo-notifications";
import * as Permissions from 'expo-permissions';

  
export default class  Account extends Component{  
  
render() {

   return(
       <View >   
       <Text>   {Firebase.auth().currentUser.email} </Text>
  
      <Button  title="çıkış"  onPress={()=>{Firebase.auth().signOut()}}/>
      </View>

   )
   }
}