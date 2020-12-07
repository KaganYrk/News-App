import {Image, ImageBackground, StyleSheet,Text,View} from 'react-native';

import PropTypes from 'prop-types';
import React from 'react';
import * as Font from 'expo-font';
export default function card({text,item}){
    
    var titlewithoutbrand = (item.title).split("-");
    var splitsource = (item.source.name).split(".");
    return(
        <View>  
            <ImageBackground style={{width:"100%"}}source={{ uri: item.urlToImage }}>    
            <View style={{opacity:0.8,backgroundColor:"black"}} >  
            <Text numberOfLines={2} style={styles.text}>{item.title} </Text>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={{color:"#E83338",opacity:1,fontWeight:"900",borderRadius:5,marginBottom:10,marginTop:10,fontSize:15,marginLeft:3}}> {splitsource[0]}</Text>
            <Text style={{color:"#E83338",marginRight:10,borderRadius:5,marginBottom:10,marginTop:10,fontSize:12,fontSize:12}}> {EditTime(item.publishedAt)}</Text>
            </View>
            </View>
            </ImageBackground> 
            </View>
    );
}

   const styles= StyleSheet.create({
        text:{
            alignSelf:'center',
            color:'white',
            paddingLeft:5,
            paddingTop:10,
          }
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