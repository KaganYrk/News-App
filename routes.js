import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Buttonn from './components/card';
import NewsFeed from './screens/NewsFeed';
import test from './screens/test';
import Favorites from './screens/Favorites';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function NewsTabs() {
  return (
    
    <Tab.Navigator >
    <Tab.Screen name="NewsFeed" component={NewsFeedStack}></Tab.Screen>
    <Tab.Screen name="Favorites" component={FavoritesStack}></Tab.Screen>
  </Tab.Navigator>  
     
  );
}
function favoriteTabs() {
  return (
    
    <Tab.Navigator initialRouteName='Favorites' >
    <Tab.Screen name="NewsFeed" component={NewsFeedStack}></Tab.Screen>
    <Tab.Screen name="Favorites" component={FavoritesStack}></Tab.Screen>
  </Tab.Navigator>  
     
  );
}


function NewsFeedStack(){
  return(

  <Stack.Navigator >
    <Stack.Screen name="NewsFeed" component={NewsFeed}></Stack.Screen>
    <Stack.Screen name="test" component={test}></Stack.Screen>
  </Stack.Navigator>

  );

}

function FavoritesStack(){
  return(

  <Stack.Navigator >
    <Stack.Screen name="Favorites" component={Favorites}></Stack.Screen>
    <Stack.Screen name="test" component={test}></Stack.Screen>
  </Stack.Navigator>

  );

}


export default function AppTabNavigation() {
  return (
    
       <NavigationContainer>
        <Drawer.Navigator >
          <Drawer.Screen name="NewsFeed" component={NewsTabs}></Drawer.Screen>
          <Drawer.Screen name="Favorites" component={favoriteTabs}></Drawer.Screen>
        </Drawer.Navigator>  
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

