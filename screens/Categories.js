import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Button,
  TouchableHighlight,
  ImageBackground,
  Image,
  Dimensions
} from "react-native";
import Newsapi from "../utils/newsapi";
import test from "./test";

const image={uri:""};

function Categories ({navigation}) {

    return (
      <View style={{flexWrap:"wrap",flexDirection:"row"}} >
     <TouchableHighlight 
     onPress={() => {   navigation.navigate('test', {  country:"tr", category:"health",  });}}>
     <ImageBackground resizeMode="cover" style={styles.logo} source={require('../assets/Health.webp')}>    
     <Text style={styles.title}>Sağlık</Text>
     </ImageBackground>
     </TouchableHighlight>

     <TouchableHighlight 
     onPress={() => {   navigation.navigate('test', {  country:"tr", category:"sports",  });}}>
     <ImageBackground resizeMode="cover" style={styles.logo} source={require('../assets/Sports.webp')}>    
     <Text style={styles.title}>Spor</Text>
     </ImageBackground>
     </TouchableHighlight>

     <TouchableHighlight 
     onPress={() => {   navigation.navigate('test', {  country:"tr", category:"business",  });}}>
     <ImageBackground resizeMode="cover" style={styles.logo} source={require('../assets/Business.webp')}>    
     <Text style={styles.title}>Ekonomi</Text>
     </ImageBackground>
     </TouchableHighlight>
      
     <TouchableHighlight 
     onPress={() => {   navigation.navigate('test', { q:"müzik",language:"tr"});}}>
     <ImageBackground resizeMode="cover" style={styles.logo} source={require('../assets/Music.jpg')}>    
     <Text style={styles.title}>Müzik</Text>
     </ImageBackground>
     </TouchableHighlight>
     
     <TouchableHighlight 
     onPress={() => {   navigation.navigate('test', {  country:"tr", category:"technology",  });}}>
     <ImageBackground resizeMode="cover" style={styles.logo} source={require('../assets/Technology.jpg')}>    
     <Text style={styles.title}> Teknoloji</Text>
     </ImageBackground>
     </TouchableHighlight>
     
     <TouchableHighlight 
     onPress={() => {   navigation.navigate('test', { q:"eğitim",language:"tr"});}}>
     <ImageBackground resizeMode="cover" style={styles.logo} source={require('../assets/Education.jpg')}>    
     <Text style={styles.title}>Eğitim</Text>
     </ImageBackground>
     </TouchableHighlight>

     <TouchableHighlight 
     onPress={() => {   navigation.navigate('test', { q:"astroloji",language:"tr"});}}>
     <ImageBackground resizeMode="cover" style={styles.logo} source={require('../assets/Astroloji.jpg')}>    
     <Text style={styles.title}>Astroloji</Text>
     </ImageBackground>
     </TouchableHighlight>

     <TouchableHighlight 
     onPress={() => {   navigation.navigate('test', { q:"hava durumu",language:"tr"});}}>
     <ImageBackground resizeMode="cover" style={styles.logo} source={require('../assets/Education.jpg')}>    
     <Text style={styles.title}>Eğitim</Text>
     </ImageBackground>
     </TouchableHighlight>
      </View>
    );
  
}

export default Categories;
const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#056ecf',
    width: Dimensions.get('window').width/2,
    height:Dimensions.get('window').width/2.2,
    justifyContent: 'center'
  },
  title:{
    textAlign:"center",
    color:'white',
    fontWeight:'300',
    fontSize:30,
  }
});