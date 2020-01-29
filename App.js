import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { cralwer } from './crawler/code';
global.Buffer = global.Buffer || require('buffer').Buffer

export default function App() {

  const [data, setData] = useState();
  const [head, setHead] = useState(['content', 'writer', 'day'])

  const result = async() => {
    let result = await cralwer();
    setData(result);
  }

  useEffect(() => {
    result()
  },[]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} style={styles.table}>
            <Row data={head} flexArr={[4, 1, 1.3]} style={styles.head} textStyle={styles.text}/>
            <Rows data={data} flexArr={[4, 1, 1.3]}  style={styles.rows} textStyle={styles.text}/>
        </Table>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3669CF',
  },
  table: {
    margin: 10,
    marginTop: 30
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff'
  },
  text: {
    fontSize: 15
  },
  rows: {
    backgroundColor: '#FFFFFF'
  }
});
