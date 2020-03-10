import React from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity} from 'react-native';



function DormitoryScreen({navigation}) {

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
    <View style={styles.container}>
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
  container: {
    backgroundColor: 'white',
    height: 600
  },
  list: {
    marginVertical: 20,
    marginHorizontal: 10
  },
  itemButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 18,
    marginBottom: 40,
    height: 170,
    width: 140,
    // borderRadius: 5,
    shadowOffset:{  width: 10,  height: 15},
    shadowColor: '#D5D5D5',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 1,
  },
  item: {
    color: '#002D93',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5
  },
  item2: {
    color: '#002D93',
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center',
    marginTop: 8
  }
});


export default DormitoryScreen;