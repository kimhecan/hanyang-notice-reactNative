import React, { useEffect,useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import meidaNoticeCrawler from '../../crawler/media';



function MediaScreen({navigation}) {

  const [data, setData] = useState([]);

  async function fetchData() {
    setData(await meidaNoticeCrawler());
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <View style={styles.container}>
      {data ? 
      <FlatList
        data={data}
        style={styles.list}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.listView} onPress={() => navigation.navigate('mediaWebViewPage', {script: item.url})}>
              <Text style={styles.listText}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
              <View style={styles.border}></View>
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




const styles = StyleSheet.create({
  listView: {
    margin: 30,
  
  },
  listText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#0E354B',
    fontWeight: 'bold'

  },
  date: {
    color: 'gray',
    textAlign: 'right',
  },
  border: {
    backgroundColor: '#CECFD1',
    width: '100%',
    height: 0.5,
    marginTop: 20
  }
});


export default MediaScreen