import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Modal,
} from "react-native";
import Firebase from "../utils/firebase";
import { Component } from "react";

const screenwidth = Dimensions.get("window").width;

export default class Register extends Component {
  state = {
    email: "",
    password: "",
    login: false,
    modalVisible: false,
  };

  giris = () => {
    Firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password
    );
    Firebase.auth().onAuthStateChanged((auth) => {
      if (auth) {
        console.log("giris a");
      } else {
        console.log("giris yapılmadı");
      }
    });
  };
  kayitol = () => {
    Firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    );
  };
  setmodalvisible = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  render() {
    return (
      <View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}

          >
            <View style={{ backgroundColor: " rgba(0, 0, 0, 0.46)", flex: 1 }}>
              <View
                style={{
                  borderColor: "black",
                  backgroundColor: "white",
                  width: "82%",
                  height: "40%",
                  borderWidth: 1,

                  borderColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}>
                <View style={{ alignItems: "flex-start" }}>
                  <Text style={{ fontSize: 30 }}>Hesap Oluştur</Text>
                  <Text>E posta</Text>

                  <TextInput
                    style={{
                      width: (screenwidth * 2) / 3,
                      height: 40,
                      borderColor: "gray",
                      borderTopWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderWidth: 1,
                    }}
                    onChangeText={(email) =>
                      this.setState({ email: email.trim() })
                    }
                    value={this.state.email}
                  />
                  <Text>Şifre</Text>
                  <TextInput
                    style={{
                      width: (screenwidth * 2) / 3,
                      height: 40,
                      borderTopWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderColor: "gray",
                      borderWidth: 1,
                    }}
                    onChangeText={(password) =>
                      this.setState({ password: password })
                    }
                    value={this.state.password}
                  />

                  <TouchableOpacity
                    onPress={() => this.kayitol()}
                    style={{
                      marginTop: 20,
                      borderRadius: 2,
                      width: (screenwidth * 2) / 3,
                      height: 50,
                      backgroundColor: "black",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 10,
                    }}
                  >
                    <Text style={{ color: "white" }}>Kayıt ol</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.setmodalvisible();
                    }}
                    style={{
                      marginTop: 20,
                      borderRadius: 2,
                      width: (screenwidth * 2) / 3,
                      height: 50,
                      backgroundColor: "black",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 10,
                    }}
                  >
                    <Text style={{ color: "white" }}>Geri</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <View style={{ alignItems: "center", flex: 1 }}>
          <Text style={{ textAlign: "left" }}>E posta</Text>
          <TextInput
            style={{
              width: (screenwidth * 2) / 3,
              height: 40,
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderColor: "gray",
              borderWidth: 1,
            }}
            onChangeText={(email) => this.setState({ email: email.trim() })}
            value={this.state.email}
          />
          <Text>Şifre</Text>
          <TextInput
            style={{
              width: (screenwidth * 2) / 3,
              height: 40,
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderColor: "gray",
              borderWidth: 1,
            }}
            onChangeText={(password) => this.setState({ password: password })}
            value={this.state.password}
          />

          <TouchableOpacity
            onPress={() => this.giris()}
            title="Giriş"
            accessibilityLabel="giris"
            style={{
              marginTop: 20,
              borderRadius: 2,
              width: (screenwidth * 2) / 3,
              height: 40,
              backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setmodalvisible();
            }}
            title="Giriş"
            accessibilityLabel="giris"
            style={{
              marginTop: 20,
              borderRadius: 2,
              width: (screenwidth * 2) / 3,
              height: 40,
              backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>Kayit ol</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
