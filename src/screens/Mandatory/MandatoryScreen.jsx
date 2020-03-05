import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './MadatoryHome'
import HappyScreen from '././HappyScreen';
import CreationScreen from './CreationScreen';

global.Buffer = global.Buffer || require('buffer').Buffer


const Stack = createStackNavigator();


export default function MandatoryScreen() {


  const headerStyle = {
    title: 'HANYANG LIBRARY',
    headerStyle: {
      backgroundColor: '#134763',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    }}

  
    const headerStyle2 = {
      headerStyle: {
        backgroundColor: '#134763',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      }}


  return (
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={headerStyle}/>
      <Stack.Screen name="Happy" component={HappyScreen} options={headerStyle2}/>
      <Stack.Screen name="Creation" component={CreationScreen} options={headerStyle2}/>
      </Stack.Navigator>
  );
}


