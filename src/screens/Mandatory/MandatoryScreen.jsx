import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './MadatoryHome'
import HappyScreen from '././HappyScreen';
import CreationScreen from './CreationScreen';

global.Buffer = global.Buffer || require('buffer').Buffer


const Stack = createStackNavigator();


export default function MandatoryScreen() {


  const headerStyle = {
    headerShown: false
  }

  
    const headerStyle2 = {
   
        }


  return (
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={headerStyle}/>
      <Stack.Screen name="Happy" component={HappyScreen} options={headerStyle}/>
      <Stack.Screen name="Creation" component={CreationScreen} options={headerStyle}/>
      </Stack.Navigator>
  );
}


