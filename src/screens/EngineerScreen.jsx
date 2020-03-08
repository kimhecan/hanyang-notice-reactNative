import React, { useEffect,useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Linking } from 'expo';
import engineerNoticeCrawler from '../../crawler/engineer';

function EngineerScreen() {

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
        style={styles.list}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity  style={styles.listView} onPress={() => Linking.openURL(item.url)}>
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


export default EngineerScreen