import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


global.Buffer = global.Buffer || require('buffer').Buffer

export default function App() {

  const data = [
    {key: '에리카'}, {key: '학술정보관'}, {key: '소프트웨어\n융합대학'},
    {key: '약학대학'}, {key: '공과대학'}, {key: '국제문화\n대학'},
    {key: '언론정보\n대학'}, {key: '경상대학'}, {key: '과학기술\n융합대학'},
    {key: '디자인대학'}, {key: '예체능대학'}
  ]

  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
  
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
  
    return data;
  };

  const renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View
        style={styles.item}
      >
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
    );
  };

  const numColumns = 3

  const onSelect = () => {
    
  }

  return (
    <NavigationContainer style={styles.container}>
      <View style={styles.head}><Text style={styles.headText}>HANYANG UNIVERSITY NOICE</Text></View>
        <FlatList
          data={formatData(data, 3)}
          style={styles.list}
          renderItem={renderItem}
          numColumns={numColumns}
          onSelect={onSelect}
        />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {

  },
  table: {
    backgroundColor: "#134763",
  },
  head: {
    backgroundColor: '#134763',
    marginTop: 16,
    height: 50
  },
  headText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    
  },
  list: {
    marginVertical: 20,
    marginHorizontal: 10
  },
  item: {
    backgroundColor: '#134763',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 3,
    marginBottom: 40,
    height: 200,
    borderRadius: 5
  },
  itemText: {
    color: 'white',
    fontSize: 20,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },

});


