import React from 'react';
import {Text, View,FlatList, TouchableOpacity, Image} from 'react-native';
import { HomeCss } from '../../css/screens'


function DormitoryScreen({navigation}) {

  const data = [
    {key: 'Happy', kr: "행복관", src: "https://user-images.githubusercontent.com/39295881/76518415-69291100-64a2-11ea-9b0c-3304f6dedc02.png"}, 
    {key: 'Creation', kr:"창의관", src: "https://user-images.githubusercontent.com/39295881/76518173-ff106c00-64a1-11ea-993e-dffd141798b4.png"} 
  ]


  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity style={HomeCss.itemButton} onPress={() => navigation.push(item.kr)}>
          <Image style={HomeCss.image} source={{uri: item.src}} />
          <Text style={HomeCss.item}>{item.kr}</Text>
          <Text style={HomeCss.item2}>{item.key}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={HomeCss.container2}>
        <FlatList
          data={data}
          style={HomeCss.list}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
    </View>
  );
}


export default DormitoryScreen;