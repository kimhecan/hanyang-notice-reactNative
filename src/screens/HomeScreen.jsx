import React from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity, Image} from 'react-native';

global.Buffer = global.Buffer || require('buffer').Buffer


function Home({navigation}) {

  const data = [
    {key: 'Hanyang', kr: "에리카", src: 'https://user-images.githubusercontent.com/39295881/76086323-3b058600-5ff7-11ea-8a5a-91fde91ab168.png'},
    {key: 'Library', kr:"학술정보관", src: 'https://user-images.githubusercontent.com/39295881/76086771-24136380-5ff8-11ea-8c12-03c74953d399.png'},
    {key: 'Mandatory',kr: "기숙사", src: 'https://user-images.githubusercontent.com/39295881/76087036-b156b800-5ff8-11ea-9574-cfdc9d7d91f6.png'}, 
    {key: 'Software', kr: "소프트웨어\n융합대학", src: 'https://user-images.githubusercontent.com/39295881/76087135-dea36600-5ff8-11ea-8535-14976347d36b.png'}, 
    {key: 'Pharmacy',kr: "약학대학", src: 'https://user-images.githubusercontent.com/39295881/76087260-24602e80-5ff9-11ea-9a7d-e7948889875b.png'}, 
    {key: 'Engineer',kr: "공과대학", src: 'https://user-images.githubusercontent.com/39295881/76087473-8e78d380-5ff9-11ea-863f-e331a87d9f89.png'},
    {key: 'Culture', kr: "국제문화\n대학", src: 'https://user-images.githubusercontent.com/39295881/76087817-3ee6d780-5ffa-11ea-8b0e-ec272ab20256.png'},
    {key: 'Media', kr: "언론정보\n대학", src: 'https://user-images.githubusercontent.com/39295881/76088168-e9f79100-5ffa-11ea-8938-65249e57069b.png'}, 
    {key: 'Economic', kr: "경상대학", src: 'https://user-images.githubusercontent.com/39295881/76088305-19a69900-5ffb-11ea-8e04-eddc2bce38f1.png'}, 
    {key: 'Science', kr: "과학기술\n융합대학", src: 'https://user-images.githubusercontent.com/39295881/76088348-393dc180-5ffb-11ea-9351-68f93225e982.png'}, 
    {key: 'Design', kr: "디자인대학", src: 'https://user-images.githubusercontent.com/39295881/76088464-773ae580-5ffb-11ea-91c8-7a9408ebf1c5.png'}, 
    {key: 'Sport', kr: "예체능대학", src: 'https://user-images.githubusercontent.com/39295881/76088685-caad3380-5ffb-11ea-9f5d-adc37cafa8db.png'}
  ]


  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity style={styles.itemButton} onPress={() => navigation.push(item.key)}>
          <Image style={{width: 50, height: 50, tintColor: '#3C72E0'}} source={{uri: item.src}} />
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
  list: {
    marginVertical: 20,
    marginHorizontal: 10
  },
  itemButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    marginBottom: 40,
    height: 170,
    width: 140,
    borderRadius: 5,
    shadowOffset:{  width: 10,  height: 10},
    shadowColor: 'gray',
    shadowOpacity: 0.1,
  },
  item: {
    color: '#3C72E0',
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  item2: {
    color: '#3C72E0',
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center'
  }
});


export default Home;