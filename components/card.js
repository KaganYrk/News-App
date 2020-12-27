import { ImageBackground, Modal, StyleSheet,Text,TouchableHighlight,View,SafeAreaView, Platform, Button} from 'react-native';
import { WebView } from 'react-native-webview';

import React,{useState}from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import Firebase from "../utils/firebase";
 
export default function card({item}){
    const [modalVisible, setModalVisible] = useState(false);
    const [iconName, seticonName] = useState("heart-outline");

    const navigation = useNavigation();
    var titlewithoutbrand = (item.title).split("-");
    var splitsource = (item.source.name).split(".");

 var concattitle="";


  if(Object.keys(titlewithoutbrand).length>1)
  titlewithoutbrand.splice(Object.keys(titlewithoutbrand).length-1,1)
    for (var i = 0; i < Object.keys(titlewithoutbrand).length; i++) {
    
    concattitle=concattitle+titlewithoutbrand[i]
} 

    return(
        <View> 
             
            <ImageBackground style={{width:"100%"}}source={{ uri: item.urlToImage }}>   
              <TouchableHighlight     onPress={() => {
                  setModalVisible(!modalVisible);
                }}>  
                <View style={{opacity:0.8,backgroundColor:"black",flexDirection:"column"} } >  
                  <Modal onRequestClose={()=>{setModalVisible(!modalVisible)}} visible={modalVisible}><SafeAreaView style={styles.container}><Button  title="İOS İÇİN GERİ TUŞU" onPress={()=>{setModalVisible(!modalVisible)}}></Button>
                  <WebView source={{ uri: item.url }} /></SafeAreaView></Modal>
                  <View style={{flexDirection:'row',justifyContent:"space-evenly"}}>  
                  <Text numberOfLines={2}  style={{marginLeft:10,marginTop:4,color:"white",justifyContent:"flex-start",flex:1}}>{concattitle} </Text>
                  <MaterialCommunityIcons   onPress={() => {
                  (iconName=="heart-off")?
                 ( seticonName("heart-outline"),
                  Firebase.database().ref('users/' + Firebase.auth().currentUser.uid+'/'+(item.publishedAt).trim()).remove()) :
                 ( seticonName("heart-off"),
                 Firebase.database().ref('users/' + Firebase.auth().currentUser.uid+'/'+(item.publishedAt).trim()).set({
                  item:item
              }))
                
                }} name={iconName} size={24} color="white"  />
                  </View>
                  <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={{color:"#E83338",opacity:1,fontWeight:"900",borderRadius:5,marginBottom:10,marginTop:10,fontSize:15,marginLeft:3}}> {splitsource[0]}</Text>
                    <Text style={{color:"#E83338",marginRight:10,borderRadius:5,marginBottom:10,marginTop:10,fontSize:12,fontSize:12}}> {EditTime(item.publishedAt)}</Text>
                  </View>
              
                </View>
              </TouchableHighlight>
            </ImageBackground> 
   
            </View>
    );
}

   const styles= StyleSheet.create({

          container: {
            flex: 1,
            paddingTop: Platform.OS === 'ios' ? 60 : 0
          },
    })

    function EditTime(time){
        if (!time) return;
        var now = new Date();
        var releasedDate = new Date(time);
        var seconds = ((now.getTime() - releasedDate) * .001) >> 0;
        var minutes = seconds / 60;
        var hours = minutes / 60;
        var days = hours / 24;
        var months =days/30;
        var years = months / 12;
       
        return  (
            
            years>1&&Math.round(years)+" yıl önce"||months>1&&Math.round(months)+" ay önce"||days>1&&Math.round(days)+" gün önce"||hours>1&&Math.round(hours)+" saat önce"||minutes>1&&Math.round(minutes)+" dakika önce"||seconds>1&&Math.round(seconds)+" saniye önce"
           
        );
       
} 