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




export default class Register extends Component{  
   state={
      email:'',
      password:'',
      login:false
   }
   

   giris=()=>{ Firebase.auth().signOut();
      Firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
      Firebase.auth().onAuthStateChanged(auth=>{
         if(auth){
           
           console.log('giris a');
     
          
  
        } else{
           console.log('giris yapılmadı');
        }
      })
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
  onPress={()=> this.giris()}
  title="Giriş"
  color="#841584"
  accessibilityLabel="giris"
  style={{width:1000, height:200,backgroundColor:"black"}}
/>
   </View>
   );
}
}