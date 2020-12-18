import React from "react";
import { StyleSheet, View } from "react-native";

import Newsapi from "../utils/newsapi";

function CategoryFeed({ route, navigation }) {
  const { country, category, q, language } = route.params;
  console.log(route.params);
  return (
    <View style={styles.container}>
      <Newsapi
        q={q}
        language={language}
        country={country}
        category={category}
      />
    </View>
  );
}
export default CategoryFeed;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECECEC",
    justifyContent: "center",
  },
});
