import React from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity} from 'react-native';

global.Buffer = global.Buffer || require('buffer').Buffer


function Home({navigation}) {

  const data = [
    {key: 'Hanyang', kr: "에리카"}, {key: 'Library', kr:"학술정보관"}, {key: 'Mandatory',kr: "기숙사"}, 
    {key: 'Software', kr: "소프트웨어\n융합대학"}, {key: 'Pharmacy',kr: "약학대학"}, {key: 'Engineer',kr: "공과대학"},
    {key: 'Culture', kr: "국제문화\n대학"},{key: 'Media', kr: "언론정보\n대학"}, {key: 'Economic', kr: "경상대학"}, 
    {key: 'Science', kr: "과학기술\n융합대학"}, {key: 'Design', kr: "디자인대학"}, {key: 'Sport', kr: "예체능대학"}
  ]


  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity style={styles.itemButton} onPress={() => navigation.push(item.key)}>
          <Text style={styles.item}>{item.kr}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
        <FlatList
          data={data}
          style={styles.list}
          renderItem={renderItem}
          numColumns={3}
        />
    </View>
  );
}


const styles = StyleSheet.create({
  list: {
    marginVertical: 20,
    marginHorizontal: 10
  },
  itemButton: {
    backgroundColor: '#134763',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    marginBottom: 40,
    height: 200,
    width: 110,
    borderRadius: 5,
    shadowOffset:{  width: 5,  height: 5},
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  item: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});


export default Home;