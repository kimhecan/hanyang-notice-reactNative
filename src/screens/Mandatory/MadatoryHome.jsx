import React from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity} from 'react-native';



function Home({navigation}) {

  const data = [
    {key: 'Happy', kr: "행복관"}, {key: 'Creation', kr:"창의인재관"} 
  ]


  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity style={styles.itemButton} onPress={() => navigation.push(item.key)}>
          <Text style={styles.item}>{item.kr}</Text>
          <Text style={styles.item2}>{item.key}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
        <FlatList
          data={data}
          style={styles.list}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
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
    margin: 20,
    marginBottom: 40,
    height: 170,
    width: 140,
    borderRadius: 5,
    shadowOffset:{  width: 3,  height: 3},
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  item: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  item2: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center'
  }
});


export default Home;