import {StyleSheet,Text,View} from 'react-native';

import PropTypes from 'prop-types';
import React from 'react';

export default function buton({size,text}){
    const styles= StyleSheet.create({
        butonn:{
            height: 200,
            backgroundColor: 'red',
            borderBottomWidth:0.5,
            borderColor: "#20232a",
            
        },
        text:{
            alignSelf:"center"
          }
    })
    return(
        <View style={styles.butonn}>
            <Text style={styles.text}> {text} </Text>
        </View>
    );
}

