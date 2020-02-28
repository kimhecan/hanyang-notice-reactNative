import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import softwareNoticeCrawler from '../../crawler/software';
global.Buffer = global.Buffer || require('buffer').Buffer

function HanyangScreen() {

  let data;

  // useEffect( async () => {
  //   data = await softwareNoticeCrawler();
  // },[]);

  return (
    <View style={styles.container}>
      <Text>123</Text>
      {/* <FlatList
          data={data}
          style={styles.list}
          renderItem={({ item, index}) => {
            return (
              <View>
                <Tex>{item.title}</Tex>
                <Text>{item.date}</Text>
              </View>
            )
          }}
        /> */}
    </View>
  );
}


const styles = StyleSheet.create({
  head: {
    backgroundColor: '#134763',

  },
  headText: {
    color: 'white',
    textAlign: 'center'
  }
});


export default HanyangScreen