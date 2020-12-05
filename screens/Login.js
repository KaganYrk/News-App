import { StatusBar } from "expo-status-bar";
import React from "react";
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
import * as SQlite from "expo-sqlite"

const db=SQlite.openDatabase({name : "players.db"});

export default class Login extends React.Component {
    state = {
         username:'',
         password:''
    }
    handleUsername = (text) => {
        this.setState({ username: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }
    login =(username,password) =>{
      db.transaction(tx => {
         tx.executeSql('CREATE TABLE IF NOT EXISTS account (id  auto increment integer primary key not null, username text, password text);',[],()=>console.log("creeeated"),(a,b)=>console.log(b));
         tx.executeSql("INSERT INTO account VALUES (?,?,?);",[null,this.state.username,this.state.password])
         console.log("created table account ");
       })
       db.transaction(tx => {
         tx.executeSql('SELECT * FROM account', [], (tx, results) => {
           var temp = [];
           for (let i = 0; i < results.rows.length; ++i) {
            console.log(results.rows.item(i));
           }
         });
       });
       
    }
  render() {
     
    return (
        <View> 
        <TextInput 
        style={{ height: 40,color:"black", borderColor: 'gray', borderWidth: 1 }}
        onChangeText = {this.handleUsername}
        
        />
        <TextInput 
        style={{ height: 40, color:"black",borderColor: 'gray', borderWidth: 1 }}
        onChangeText = {this.handlePassword}
        />
        <TouchableOpacity
       style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.username, this.state.password)
               }>
               <Text > Submit </Text>
            </TouchableOpacity>
          </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })