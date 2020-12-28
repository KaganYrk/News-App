
import React from "react";
import {
  StyleSheet,
  Text,
  View,

  ScrollView,

} from "react-native";




function Details({ route, navigation }) {
  const { item } = route.params;


  return (
    <ScrollView >
      <View style={styles.container}>
        <Text> {item.description} </Text>

      </View>
    </ScrollView>
  );

}
export default Details;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECECEC",
    justifyContent: "center",

  },
});
