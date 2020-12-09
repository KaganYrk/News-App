import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView ,Button} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

import NewsFeed from "./screens/NewsFeed";
import test from "./screens/CategoryFeed";
import Categories from "./screens/Categories";
import Register from "./screens/Register"
import Details from "./screens/Details";
import CategoryFeed from "./screens/CategoryFeed";
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



function NewsTabs() {
  return (
    <Tab.Navigator  screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'NewsFeed') {
          iconName = focused
            ? 'home'
            :  'home-outline';
        } else if (route.name === 'Categories') {
          iconName = focused ? 'view-list' : 'format-list-bulleted';
        }

        // You can return any component that you like here!
        return <MaterialCommunityIcons name={iconName} size={20} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'black',
    }}>
      <Tab.Screen  name="NewsFeed" component={NewsFeedStack} options={{ title:''}} ></Tab.Screen>
      <Tab.Screen name="Categories"  component={CategoryStack}  options={{ title:''}} ></Tab.Screen>
    </Tab.Navigator>
  );
}
function CategoryTabs() {
  return (
    <Tab.Navigator initialRouteName="NewsFeed" screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'NewsFeed') {
          iconName = focused
            ? 'home'
            :  'home-outline';
        } else if (route.name === 'Categories') {
          iconName = focused ? 'view-list' : 'format-list-bulleted';
        }

        // You can return any component that you like here!
        return <MaterialCommunityIcons name={iconName} size={20} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'black',
    }}>
      <Tab.Screen name="NewsFeed" component={NewsFeedStack} options={{ title:''}} ></Tab.Screen>
      <Tab.Screen name="Categories" component={CategoryStack}  options={{ title:''}}></Tab.Screen>
    </Tab.Navigator>
  );
}

function NewsFeedStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewsFeed" component={NewsFeed}  
       options={{
         title:'Gündem',
         headerTitleAlign:"center",
            headerLeft: () => (
              <Icon.Button 
              name="align-left" size={20}  color="black"  backgroundColor="white" onPress={() => navigation.openDrawer()} >
               </Icon.Button>
            )
          }}/>
       <Stack.Screen name="Details" component={Details} options={{title:""}} /> 
    </Stack.Navigator>
  );
}

function CategoryStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Categories}options={{ title: 'Kategoriler',headerTitleAlign:"center",
            headerLeft: () => (
              <Icon.Button 
              name="align-left" size={20}  color="black"  backgroundColor="white" onPress={() => navigation.openDrawer()} >
               </Icon.Button>
            )}}/>
      <Stack.Screen name="CategoryFeed" component={CategoryFeed} options={({route})=>({title:route.params.name})}/>
    </Stack.Navigator>
  );
}

function RegisterStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: 'Kayıt',headerTitleAlign:"center",
        headerLeft: () => (
          <Icon.Button 
          name="chevron-left" size={20}  color="black"  backgroundColor="white" onPress={() => navigation.goBack()} >
           </Icon.Button>
        ) }}
      />
    </Stack.Navigator>
  );
}


export default function AppTabNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Kategoriler"
          component={CategoryTabs}
          options={{}}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Hesabım"
          component={RegisterStack}

        ></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
  },
});
