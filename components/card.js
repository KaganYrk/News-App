import {Image, StyleSheet,Text,View} from 'react-native';

import PropTypes from 'prop-types';
import React from 'react';

export default function card({color,text,item}){
    const styles= StyleSheet.create({
        butonn:{
            height: 200,
            backgroundColor: color,
            borderBottomWidth:0.5,
            borderColor: "#20232a",
            
            
        },
        text:{
            alignSelf:'center',
            color:'black',
            paddingLeft:5,
          }
    })
  
    return(
        <View style={{flexDirection:'row',flex:1,marginTop:9,marginLeft:5,marginRight:5}}>
          <Image  style={{ width: 100, height: 100 }} source={{ uri: item.urlToImage }}/>
           <View style={{flex:1 ,flexDirection:"column",justifyContent:"space-between"}} >  
            <Text numberOfLines={3} style={styles.text}>{item.title} </Text>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={{color:"#348ABF"}}> {item.source.name}</Text>
            <Text style={{color:"#348ABF"}}> {item.publishedAt}</Text>
            </View>
            </View>
        </View>
    );
}

