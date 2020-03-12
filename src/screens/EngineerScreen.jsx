import React, { useEffect,useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import engineerNoticeCrawler from '../../crawler/engineer';
import { flatlistCss } from '../css/screens'

function EngineerScreen({navigation}) {

  const [data, setData] = useState([])

  async function fetchData() {
    setData(await engineerNoticeCrawler());
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
            <TouchableOpacity style={flatlistCss.listView} onPress={() => navigation.navigate('공과대학 웹 사이트',{url: item.url})}>
              <Text style={flatlistCss.listText}>{item.title}</Text>
              <View style={flatlistCss.elem}>
                <Text style={flatlistCss.class}>{item.class}</Text>
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
export function engineerWebViewPage({route}) {
  const { url } = route.params
  return (
      <WebView
      source={{uri: url}}
      />
  )
}

export default EngineerScreen