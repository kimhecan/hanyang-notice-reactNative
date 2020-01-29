import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { cralwer } from './crawler/code';
global.Buffer = global.Buffer || require('buffer').Buffer

export default function App() {

  const [data, setData] = useState();

  const result = async() => {
    let result = await cralwer();
    console.log(result[0]);
    setData(result);
  }

  useEffect(() => {
    result()
  },[]);

  return (
    <View style={styles.container}>
      <Text>
        {data}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
