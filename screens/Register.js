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


export default class Register extends Component{  
   state={
      email:'',
      password:'',
      login:false
   }
componentDidMount=()=>{ 
   
 
    // Initialize Firebase
    
    Firebase.auth().onAuthStateChanged(auth=>{
       if(auth){
console.log('giris yapıldı');
      } else{
         console.log('giris yapılmadı');
      }
    })
   }
   kayitol=()=>{
      Firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
    }
   render(){  
   return(
      <View>  
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={email=>this.setState({email:email})}
      value={this.state.email}
    />
    <TextInput
    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    onChangeText={password=>this.setState({password:password})}
    value={this.state.password}
  />
  <TouchableOpacity
  onPress={()=> this.kayitol()}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
  style={{width:1000, height:200,backgroundColor:"black"}}
/>
   </View>
   );
}
}