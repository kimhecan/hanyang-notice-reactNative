import React, { useEffect,useState } from 'react';
import { Text, View, FlatList,TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import scienceNoticeCrawler from '../../crawler/science';
import { flatlistCss } from '../css/screens'

function ScienceScreen({navigation}) {

  const [data, setData] = useState([])

  async function fetchData() {
    setData(await scienceNoticeCrawler());
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
            <TouchableOpacity style={flatlistCss.listView} onPress={() => navigation.navigate('과학기술융합대학 웹 사이트',{url: item.url})}>
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

export function scienceWebViewPage({route}) {
  const { url } = route.params
  return (
      <WebView
      source={{uri: url}}
      />
  )
}

export default ScienceScreen