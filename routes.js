
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import Firebase from "./utils/firebase";
import NewsFeed from "./screens/NewsFeed";
import Account from "./screens/Account";
import Categories from "./screens/Categories";
import Login from "./screens/Login";
import Details from "./screens/Details";
import CategoryFeed from "./screens/CategoryFeed";
import { AuthContext } from "./context";
import Favorites from "./screens/Favorites";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function NewsTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "NewsFeed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Categories") {
            iconName = focused ? "view-list" : "format-list-bulleted";
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={20} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="NewsFeed"
        component={NewsFeedStack}
        options={{ title: "" }}
      ></Tab.Screen>
      <Tab.Screen
        name="Categories"
        component={CategoryStack}
        options={{ title: "" }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
function CategoryTabs() {
  return (
    <Tab.Navigator
      initialRouteName="NewsFeed"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "NewsFeed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Categories") {
            iconName = focused ? "view-list" : "format-list-bulleted";
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={20} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="NewsFeed"
        component={NewsFeedStack}
        options={{ title: "" }}
      ></Tab.Screen>
      <Tab.Screen
        name="Categories"
        component={CategoryStack}
        options={{ title: "" }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

function NewsFeedStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsFeed"
        component={NewsFeed}
        options={{
          title: "Gündem",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Icon.Button
              name="align-left"
              size={20}
              color="black"
              backgroundColor="white"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
}

function CategoryStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          title: "Kategoriler",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Icon.Button
              name="align-left"
              size={20}
              color="black"
              backgroundColor="white"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
        }}
      />
      <Stack.Screen
        name="CategoryFeed"
        component={CategoryFeed}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
}

function LoginStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Giriş",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Icon.Button
              name="chevron-left"
              size={20}
              color="black"
              backgroundColor="white"
              onPress={() => navigation.goBack()}
            ></Icon.Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function ProfileStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Hesabım"
        component={Account}
        options={{
          title: "Hesabım",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Icon.Button
              name="chevron-left"
              size={20}
              color="black"
              backgroundColor="white"
              onPress={() => navigation.goBack()}
            ></Icon.Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function AppTabNavigation({ navigation }) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(false);

  // Handle user state changes
  function onAuthStateChanged(result) {
    setUser(result);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const authSubscriber = Firebase.auth().onAuthStateChanged(
      onAuthStateChanged
    );

    // unsubscribe on unmount
    return authSubscriber;
  }, []);

  if (initializing) {
    return null;
  }
  return user ? (
   
    <AuthContext.Provider value={user}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Kategoriler"
            component={CategoryTabs}
          ></Drawer.Screen>
          <Drawer.Screen name="Hesabım" component={ProfileStack}></Drawer.Screen>
          <Drawer.Screen name="İşaretlediklerim" component={Favorites} options={{headerShown:true}}></Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  ) : (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Kategoriler"
          component={CategoryTabs}
        ></Drawer.Screen>
        <Drawer.Screen name="Giriş" component={LoginStack}></Drawer.Screen>
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
