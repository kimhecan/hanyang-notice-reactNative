import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import HanyangScreen from './src/screens/HanyangScreen';
import LibraryScreen from './src/screens/LibraryScreen';
import MandatoryScreen from './src/screens/Mandatory/MandatoryScreen';
import SoftwareScreen from './src/screens/SoftwareScreen';
import PharmacyScreen from './src/screens/PharmacyScreen';
import EngineerScreen from './src/screens/EngineerScreen';
import CultureScreen from './src/screens/CultureScreen';
import MediaScreen from './src/screens/MediaScreen';
import EconomicScreen from './src/screens/EconomicScreen';
import ScienceScreen from './src/screens/ScienceScreen';
import DesignScreen from './src/screens/DesignScreen';
import SportScreen from './src/screens/SportScreen';

global.Buffer = global.Buffer || require('buffer').Buffer


const Stack = createStackNavigator();


export default function App() {


  const headerStyle = {
    title: 'HANYANG UNIVERSITY NOTICE',
    headerStyle: {
      backgroundColor: '#3C72E0',
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
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={headerStyle}/>
      <Stack.Screen name="Hanyang" component={HanyangScreen} options={headerStyle2}/>
      <Stack.Screen name="Library" component={LibraryScreen} options={headerStyle2}/>
      <Stack.Screen name="Mandatory" component={MandatoryScreen} options={headerStyle2}/>
      <Stack.Screen name="Software" component={SoftwareScreen} options={headerStyle2}/>
      <Stack.Screen name="Pharmacy" component={PharmacyScreen} options={headerStyle2}/>
      <Stack.Screen name="Engineer" component={EngineerScreen} options={headerStyle2}/>
      <Stack.Screen name="Culture" component={CultureScreen} options={headerStyle2}/>
      <Stack.Screen name="Media" component={MediaScreen} options={headerStyle2}/>
      <Stack.Screen name="Economic" component={EconomicScreen} options={headerStyle2}/>
      <Stack.Screen name="Science" component={ScienceScreen} options={headerStyle2}/>
      <Stack.Screen name="Design" component={DesignScreen} options={headerStyle2}/>
      <Stack.Screen name="Sport" component={SportScreen} options={headerStyle2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


