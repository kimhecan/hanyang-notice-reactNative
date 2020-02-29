import React, { useEffect,useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import meidaNoticeCrawler from '../../crawler/media';

function MediaScreen() {

  const [data, setData] = useState([])

  async function fetchData() {
    setData(await meidaNoticeCrawler());
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <View>
      {data ? 
      <FlatList
        data={data}
        style={styles.list}
        renderItem={({ item }) => {
          return (
            <View style={styles.listView}>
              <Text style={styles.listText}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
              <View style={styles.border}></View>
            </View>
          )
        }}
      />
    :
    <Text>데이터 없음</Text>
    }
    </View>
  );
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