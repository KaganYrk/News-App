import React from "react";
import AppTabNavigation from "./routes";
import {
  addNotificationReceivedListener,
  getExpoPushTokenAsync,
} from "expo-notifications";
import * as Permissions from "expo-permissions";
import { StatusBar } from "react-native";

async function getToken() {
  // Remote notifications do not work in simulators, only on device
  if (!Expo.Constants.isDevice) {
    console.log("b");
    return;
  }
  let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  if (status !== "granted") {
    console.log("a");
    return;
  }
  let value = await getExpoPushTokenAsync();
  console.log("Our token", value);
  /// Send this to a server
}

export default class App extends React.Component {
  UNSAFE_componentWillMount() {
    console.log("MERHABA");
    getToken();

    this.listener = addNotificationReceivedListener(this.handleNotification);
  }

 

  handleNotification = ({ origin, data }) => {
    console.log(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`
    );
  };
  render() {

    return <AppTabNavigation />;
  }
}
