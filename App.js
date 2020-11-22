import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView} from 'react-native';

import Buttonn from './components/card';
export default function App() {
  return (
    
    <ScrollView >
    <SafeAreaView style={styles.container}>
   
      <Buttonn 
     
     text="Lorem"
     />
     <Buttonn 
     
     text="İpsum"
     />
      <Buttonn 
     
     text="Dolor"
     />
      <Buttonn 
     
     text="Sit"
     />
     <Buttonn 
     
     text="sadas"
     />
     
     
    </SafeAreaView>
    </ScrollView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems:"stretch",

    paddingTop: Platform.OS === 'android' ? 28 : 0
  },
  
});

