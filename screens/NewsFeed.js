import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,onPress, SafeAreaView,ScrollView,ActivityIndicator, Button} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


export default class NewsFeed extends React.Component{

    render() {
     
        return (
          <View style={styles.container}>
            
           
                <Text>Burası Haber Akışı</Text>
                
                <Button title="teste git" onPress={() => this.props.navigation.navigate('test')} />
          </View>
        );
      }
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      justifyContent: 'center',
      flex: 1,
    },
  });