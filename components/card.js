import {Button, Image, ImageBackground, Modal, StyleSheet,Text,TouchableHighlight,View,SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';
import React,{useState}from 'react';
import * as Font from 'expo-font';
import { TouchableOpacity } from 'react-native-gesture-handler';
import test from '../screens/CategoryFeed';
import { useNavigation } from '@react-navigation/native';
import Categories from '../screens/Categories';
import Details from '../screens/Details';
import { render } from 'react-dom';

export default function card({text,item}){
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();
    var titlewithoutbrand = (item.title).split("-");
    var splitsource = (item.source.name).split(".");

    return(
        <View> 
             
            <ImageBackground style={{width:"100%"}}source={{ uri: item.urlToImage }}>   
            <Modal onRequestClose={()=>{setModalVisible(!modalVisible)}} visible={modalVisible}><SafeAreaView style={styles.container}><Button  title="İOSLU PEZEVENKLER İÇİN GERİ TUŞU" onPress={()=>{setModalVisible(!modalVisible)}}></Button><WebView source={{ uri: item.url }} /></SafeAreaView></Modal>
            <TouchableHighlight     onPress={() => {
                setModalVisible(!modalVisible);
              }}>  
              
            <View style={{opacity:0.8,backgroundColor:"black"}} >  
            
            <Text numberOfLines={2} style={styles.text}>{titlewithoutbrand[0]} </Text>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={{color:"#E83338",opacity:1,fontWeight:"900",borderRadius:5,marginBottom:10,marginTop:10,fontSize:15,marginLeft:3}}> {splitsource[0]}</Text>
            <Text style={{color:"#E83338",marginRight:10,borderRadius:5,marginBottom:10,marginTop:10,fontSize:12,fontSize:12}}> {EditTime(item.publishedAt)}</Text>
            </View>
          
            </View>
            </TouchableHighlight>
            </ImageBackground> 
   
            </View>
    );
}

   const styles= StyleSheet.create({
        text:{
            alignSelf:'flex-start',
            color:'white',
            paddingLeft:5,
            paddingTop:10,
          },
          container: {
            flex: 1,
          
        
            paddingTop: Platform.OS === 'ios' ? 28 : 0
          },
    })

    function EditTime(time){
        if (!time) return;
        var now = new Date();
        var releasedDate = new Date(time);
        var seconds = ((now.getTime() - releasedDate) * .001) >> 0;
        var minutes = seconds / 60;
        var hours = minutes / 60;
        var days = hours / 24;
        var months =days/30;
        var years = months / 12;
       
        return  (
            
            years>1&&Math.round(years)+" yıl önce"||months>1&&Math.round(months)+" ay önce"||days>1&&Math.round(days)+" gün önce"||hours>1&&Math.round(hours)+" saat önce"||minutes>1&&Math.round(minutes)+" dakika önce"||seconds>1&&Math.round(seconds)+" saniye önce"
           
        );
       
} 