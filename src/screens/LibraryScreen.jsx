import React, { useEffect,useState } from 'react';
import { Text, View, FlatList,TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import libraryNoticeCrawler from '../../crawler/lib';
import { flatlistCss } from '../css/screens'

function LibraryScreen({navigation}) {

  const [data, setData] = useState([])

  async function fetchData() {
    setData(await libraryNoticeCrawler());
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <View>
      {data ? 
      <FlatList
        data={data}
        style={flatlistCss.list}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={flatlistCss.listView} onPress={() => navigation.navigate('학술정보관 웹 사이트',{url: item.url})}>
              <Text style={flatlistCss.listText}>{item.title}</Text>
              <View style={flatlistCss.elem}>
                <Text style={flatlistCss.class}>{item.name}</Text>
                <Text style={flatlistCss.date}>{item.date}</Text>
              </View>
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

export function libraryWebViewPage({route}) {
  const { url } = route.params
  return (
      <WebView
      source={{uri: url}}
      />
  )
}



export default LibraryScreen