import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
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
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
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
          headerTitleStyle: {
            fontWeight: 'bold',
          },
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
        <Drawer.Navigator

          drawerStyle={{
            borderBottomWidth: 50,
            backgroundColor: "white",

          }}
          drawerContentOptions={{

            activeTintColor: 'black',
            inactiveBackgroundColor: "white",
            inactiveTintColor: "black",

          }}
        >
          <Drawer.Screen

            name="Kategoriler"
            component={CategoryTabs}
            options={{
              title: 'Kategoriler',
              drawerIcon: () => (
                <MaterialCommunityIcons name="format-list-bulleted" size={24} color="#E83338" />
              )
            }}
          ></Drawer.Screen>
          <Drawer.Screen
            options={{
              title: 'Hesabım',
              drawerIcon: () => (
                <MaterialCommunityIcons name="account-circle-outline" size={24} color="#E83338" />
              )
            }}
            name="Hesabım"
            component={ProfileStack}
          ></Drawer.Screen>
          <Drawer.Screen
            options={{
              headerShown: true,
              title: 'İşaretlediklerim',
              drawerIcon: () => (
                <MaterialCommunityIcons name="account-heart" size={24} color="#E83338" />
              )
            }}
            name="İşaretlediklerim"
            component={Favorites}

          ></Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  ) : (
      <NavigationContainer>
        <Drawer.Navigator
          drawerStyle={{
            backgroundColor: "white"
          }}
          drawerContentOptions={{
            activeTintColor: 'black',
            inactiveBackgroundColor: "white",
            inactiveTintColor: "black",

          }}
        >
          <Drawer.Screen
            name="Kategoriler"
            component={CategoryTabs}
            options={{
              title: 'Kategoriler',
              drawerIcon: () => (
                <MaterialCommunityIcons name="format-list-bulleted" size={24} color="#E83338" />
              )
            }}
          ></Drawer.Screen>
          <Drawer.Screen
            options={{
              title: 'Giriş',
              drawerIcon: () => (
                <MaterialCommunityIcons name="login" size={24} color="#E83338" />
              )
            }}
            name="Giriş" component={LoginStack}></Drawer.Screen>
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
