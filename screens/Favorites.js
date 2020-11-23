import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView,ActivityIndicator} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

export default class Favorites extends React.Component{

    render() {
     
        return (
          <View style={styles.container}>
            
           
                <Text>Burası Favoriler</Text>
           
          </View>
        );
      }
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      justifyContent: 'center',
      flex: 1,
    },
  });