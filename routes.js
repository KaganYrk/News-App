import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Buttonn from './components/card';
import NewsFeed from './screens/NewsFeed';
import test from './screens/test';
import Favorites from './screens/Favorites';

const Stack = createStackNavigator();

function NewsFeedStack(){
  return(
  <Stack.Navigator >
    <Stack.Screen name="NewsFeed" component={NewsFeed}></Stack.Screen>
    <Stack.Screen name="test" component={test}></Stack.Screen>
  </Stack.Navigator>
  );

}



const Tab = createBottomTabNavigator();

export default function AppTabNavigation() {
  return (
    
       <NavigationContainer>
        <Tab.Navigator initialRouteName="NewsFeed">
          <Tab.Screen name="NewsFeed" component={NewsFeedStack}></Tab.Screen>
          <Tab.Screen name="Favorites" component={Favorites}></Tab.Screen>
        </Tab.Navigator>
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

