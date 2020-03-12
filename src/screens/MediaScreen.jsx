import React, { useEffect,useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import meidaNoticeCrawler from '../../crawler/media';
import { flatlistCss } from '../css/screens'


function MediaScreen({navigation}) {

  const [data, setData] = useState([]);

  async function fetchData() {
    setData(await meidaNoticeCrawler());
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <View style={flatlistCss.container}>
      {data ? 
      <FlatList
        data={data}
        style={flatlistCss.list}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={flatlistCss.listView} onPress={() => navigation.navigate('언론정보대학 웹 사이트', {script: item.url})}>
              <Text style={flatlistCss.listText}>{item.title}</Text>
              <Text style={flatlistCss.date}>{item.date}</Text>
              <View style={flatlistCss.border}></View>
            </TouchableOpacity>
          )
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    :
    <Text>데이터 없음</Text>
    }
    </View>
  );
}


export function mediaWebViewPage({route}) {
  const { script } = route.params
  
  return (
      <WebView
      source={{uri: 'http://ccss.hanyang.ac.kr/board.asp?catalogid=ccss&language=ko&boardcode=com01'}}
      injectJavaScript={script}
      />
  )
}

export default MediaScreen