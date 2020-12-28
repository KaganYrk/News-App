import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  ImageBackground,
  Dimensions,
} from "react-native";

const image = { uri: "" };

function Categories({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate("CategoryFeed", {
              country: "tr",
              category: "health",
              name: "Sağlık",
            });
          }}
        >
          <ImageBackground
            resizeMode="cover"
            style={styles.logo}
            source={require("../assets/Health.webp")}
          >
            <Text style={styles.title}>Sağlık</Text>
          </ImageBackground>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => {
            navigation.navigate("CategoryFeed", {
              country: "tr",
              category: "sports",
              name: "Spor",
            });
          }}
        >
          <ImageBackground
            resizeMode="cover"
            style={styles.logo}
            source={require("../assets/Sports.webp")}
          >
            <Text style={styles.title}>Spor</Text>
          </ImageBackground>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => {
            navigation.navigate("CategoryFeed", {
              country: "tr",
              category: "business",
              name: "Ekonomi",
            });
          }}
        >
          <ImageBackground
            resizeMode="cover"
            style={styles.logo}
            source={require("../assets/Business.webp")}
          >
            <Text style={styles.title}>Ekonomi</Text>
          </ImageBackground>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => {
            navigation.navigate("CategoryFeed", {
              q: "müzik",
              language: "tr",
              name: "Müzik",
            });
          }}
        >
          <ImageBackground
            resizeMode="cover"
            style={styles.logo}
            source={require("../assets/Music.jpg")}
          >
            <Text style={styles.title}>Müzik</Text>
          </ImageBackground>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => {
            navigation.navigate("CategoryFeed", {
              country: "tr",
              category: "technology",
              name: "Teknoloji",
            });
          }}
        >
          <ImageBackground
            resizeMode="cover"
            style={styles.logo}
            source={require("../assets/Technology.jpg")}
          >
            <Text style={styles.title}> Teknoloji</Text>
          </ImageBackground>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => {
            navigation.navigate("CategoryFeed", {
              q: "eğitim",
              language: "tr",
              name: "Eğitim",
            });
          }}
        >
          <ImageBackground
            resizeMode="cover"
            style={styles.logo}
            source={require("../assets/Education.jpg")}
          >
            <Text style={styles.title}>Eğitim</Text>
          </ImageBackground>
        </TouchableHighlight>


      </View>
    </ScrollView>
  );
}

export default Categories;
const styles = StyleSheet.create({
  logo: {
    backgroundColor: "#056ecf",
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").width / 2,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    color: "white",
    fontWeight: "300",
    fontSize: 30,
  },
});
