import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, Text , View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/card';



const newsapi = ({country,q=null,category=null,language="tr"}) => {
  const [headlines, setHeadlines] = useState({});

 var url="";
  const API_KEY = '0eae0ab10c7a476886f9d197b4ff8f10';
  console.log(q);
  if(category!=null)
  {  url = `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${API_KEY}`}
  else if(q!=null)
  {
    url = `https://newsapi.org/v2/everything?qInTitle=${q}%&language=${language}&sortBy=publishedAt&apiKey=${API_KEY}`
  }
  
  useEffect(() => {
    fetchData();
  }, []);
 
  async function fetchData() {
    (await fetch(url))
      .json()
      .then(res => setHeadlines(res))
  }

  return (
    
    <FlatList
    data={headlines.articles}
    renderItem={({ item })=><Card item={item}/> }
    keyExtractor={(item) => item.title}
  />
  );
};



export default newsapi;
