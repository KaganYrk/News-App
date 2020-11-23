import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Buttonn from './components/card';
import NewsFeed from './screens/NewsFeed';
import test from './screens/test';


const Stack = createStackNavigator();

export default function App() {
  return (
    
       <NavigationContainer>
        <Stack.Navigator initialRouteName="NewsFeed">
          <Stack.Screen name="NewsFeed" component={NewsFeed}></Stack.Screen>
          <Stack.Screen name="test" component={test}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems:"stretch",

    
  },
  
});

