import React, { useEffect,useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Linking } from 'expo';
import mandatoryNoticeCrawler1 from '../../../crawler/madatory/creation';

function HappyScreen() {

  const [data, setData] = useState([])

  async function fetchData() {
    setData(await mandatoryNoticeCrawler1());
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
              <View style={styles.elem}>
                <Text style={styles.class}>{item.class}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
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
  elem: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },  
  class: {
    color: 'gray',
  
  },
  date: {
    color: 'gray',
  },
  border: {
    backgroundColor: '#CECFD1',
    width: '100%',
    height: 0.5,
    marginTop: 20
  }
});


export default HappyScreen