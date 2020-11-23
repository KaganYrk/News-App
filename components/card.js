import {StyleSheet,Text,View} from 'react-native';

import PropTypes from 'prop-types';
import React from 'react';

export default function buton({color,text}){
    const styles= StyleSheet.create({
        butonn:{
            height: 200,
            backgroundColor: color,
            borderBottomWidth:0.5,
            borderColor: "#20232a",

            
        },
        text:{
            alignSelf:"center",
            color:'white'
            
          }
    })
    return(
        <View style={styles.butonn}>
            <Text style={styles.text}> {text} </Text>
        </View>
    );
}

