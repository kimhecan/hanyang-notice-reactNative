import React from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity, Image} from 'react-native';

global.Buffer = global.Buffer || require('buffer').Buffer


function Home({navigation}) {

  const data = [
    {key: 'Campus', kr: "캠퍼스", src: 'https://user-images.githubusercontent.com/39295881/76086323-3b058600-5ff7-11ea-8a5a-91fde91ab168.png'},
    {key: 'Library', kr:"학술정보관", src: 'https://user-images.githubusercontent.com/39295881/76086771-24136380-5ff8-11ea-8c12-03c74953d399.png'},
    {key: 'Dormitory',kr: "기숙사", src: 'https://user-images.githubusercontent.com/39295881/76087036-b156b800-5ff8-11ea-9574-cfdc9d7d91f6.png'}, 
    {key: 'Computing', kr: "소프트웨어융합대학", src: 'https://user-images.githubusercontent.com/39295881/76087135-dea36600-5ff8-11ea-8535-14976347d36b.png'}, 
    {key: 'Pharmacy',kr: "약학대학", src: 'https://user-images.githubusercontent.com/39295881/76087260-24602e80-5ff9-11ea-9a7d-e7948889875b.png'}, 
    {key: 'Engineering Sciences',kr: "공과대학", src: 'https://user-images.githubusercontent.com/39295881/76087473-8e78d380-5ff9-11ea-863f-e331a87d9f89.png'},
    {key: 'Languages & Cultures', kr: "국제문화대학", src: 'https://user-images.githubusercontent.com/39295881/76087817-3ee6d780-5ffa-11ea-8b0e-ec272ab20256.png'},
    {key: 'Communication', kr: "언론정보대학", src: 'https://user-images.githubusercontent.com/39295881/76088168-e9f79100-5ffa-11ea-8938-65249e57069b.png'}, 
    {key: 'Business And Economics', kr: "경상대학", src: 'https://user-images.githubusercontent.com/39295881/76088305-19a69900-5ffb-11ea-8e04-eddc2bce38f1.png'}, 
    {key: 'Science & Convergence Technology', kr: "과학기술융합대학", src: 'https://user-images.githubusercontent.com/39295881/76088348-393dc180-5ffb-11ea-9351-68f93225e982.png'}, 
    {key: 'Design', kr: "디자인대학", src: 'https://user-images.githubusercontent.com/39295881/76088464-773ae580-5ffb-11ea-91c8-7a9408ebf1c5.png'}, 
    {key: 'Sports And Arts', kr: "예체능대학", src: 'https://user-images.githubusercontent.com/39295881/76088685-caad3380-5ffb-11ea-9f5d-adc37cafa8db.png'}
  ]


  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.itemButton} onPress={() => navigation.push(item.kr)}>
          <Image style={{width: 50, height: 50, tintColor: '#002D93'}} source={{uri: item.src}} />
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
    backgroundColor: 'white'
  },
  list: {
    marginVertical: 20,
    marginHorizontal: 10
  },
  itemButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    marginBottom: 40,
    height: 170,
    width: 140,
    
    shadowOffset:{  width: 10,  height: 15},
    shadowColor: '#D5D5D5',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 7
  },
  item: {
    color: '#002D93',
    fontSize: 16,
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


export default Home;