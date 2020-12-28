import { ImageBackground, Modal, StyleSheet, Text, TouchableHighlight, View, SafeAreaView, Platform, ScrollView, Button } from 'react-native';
import { WebView } from 'react-native-webview';

import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Firebase from "../utils/firebase";

function Favorites() {
  const [modalVisible, setModalVisible] = useState(false);
  const [iconName, seticonName] = useState("heart-off");
  const [array, setArray] = useState([]);

  var i = 0;
  const output = [];
  var a = Firebase.database().ref('users/' + Firebase.auth().currentUser.uid + '/').once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {

      output[i] = childSnapshot.child("item").val()
      i++;

    });
    setArray(output)

  });


  return (

    <SafeAreaView styles={flex = 1}>
      <ScrollView>

        {array.map(item => <ImageBackground style={{ width: "100%" }} source={{ uri: item.urlToImage }}>
          <TouchableHighlight onPress={() => {
            setModalVisible(!modalVisible);
          }}>
            <View style={{ opacity: 0.8, backgroundColor: "black", flexDirection: "column" }} >
              <Modal onRequestClose={() => { setModalVisible(!modalVisible) }} visible={modalVisible}>
                <SafeAreaView style={styles.container}>
                  <Button title="İOS İÇİN GERİ TUŞU" onPress={() => { setModalVisible(!modalVisible) }}></Button>
                  <WebView source={{ uri: item.url }} />
                </SafeAreaView>
              </Modal>
              <View style={{ flexDirection: 'row', justifyContent: "space-evenly" }}>
                <Text numberOfLines={2} style={{ color: "white", justifyContent: "flex-start", flex: 1 }}>{item.title} </Text>
                <MaterialCommunityIcons onPress={() => { Firebase.database().ref('users/' + Firebase.auth().currentUser.uid + '/' + (item.publishedAt).trim()).remove() }} name={iconName} size={24} color="white" />
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ color: "#E83338", opacity: 1, fontWeight: "900", borderRadius: 5, marginBottom: 10, marginTop: 10, fontSize: 15, marginLeft: 3 }}> {item.source.name}</Text>
                <Text style={{ color: "#E83338", marginRight: 10, borderRadius: 5, marginBottom: 10, marginTop: 10, fontSize: 12, fontSize: 12 }}> {item.publishedAt}</Text>
              </View>

            </View>
          </TouchableHighlight>
        </ImageBackground>
        )}
      </ScrollView>
    </SafeAreaView>

  )
}
export default Favorites;
const styles = StyleSheet.create({

  container: {
    flex: 1,


    paddingTop: Platform.OS === 'ios' ? 200 : 0,

  },
})