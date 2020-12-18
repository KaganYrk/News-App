
import React from "react";
import {
  Text,
  View,
  Button
} from "react-native";
import Firebase from '../utils/firebase';
import { Component } from "react";



export default class Account extends Component{  
    
   render(){  

   return(
       <View>   
       <Text>   {Firebase.auth().currentUser.uid} </Text>
  
      <Button title="çıkış"onPress={()=>{Firebase.auth().signOut()}}/>
      </View>
   );
}
}