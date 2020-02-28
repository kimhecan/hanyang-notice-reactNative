import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { softwareNoticeCrawler } from './crawler/software';
global.Buffer = global.Buffer || require('buffer').Buffer

export default function App() {

  let data;

  useEffect( async () => {
    data = await softwareNoticeCrawler();
  },[]);

  return (
    <View style={styles.container}>
      <View style={styles.head}><Text style={styles.headText}>대학공지</Text></View>
      <FlatList
        data={data}
        
      />
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
