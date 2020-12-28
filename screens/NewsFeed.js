import React from "react";
import { StyleSheet, View, ScrollView, RefreshControl, StatusBar } from "react-native";

import Newsapi from "../utils/newsapi";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const NewsFeed = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <StatusBar backgroundColor="white" hidden={false} barStyle={"dark-content"} />
        <Newsapi country="tr" category="general" />
      </View>
    </ScrollView>
  );
};
export default NewsFeed;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECECEC",
    justifyContent: "center",
  },
});
