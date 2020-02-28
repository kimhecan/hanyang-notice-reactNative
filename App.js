import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'
import HanyangScreen from './src/screens/HanyangScreen'


global.Buffer = global.Buffer || require('buffer').Buffer


const Stack = createStackNavigator();


export default function App() {


  const headerStyle = {
    title: 'HANYANG UNIVERSITY NOTICE',
    headerStyle: {
      backgroundColor: '#134763',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    }}

    const headerStyle2 = {
      title: '대학공지',
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
      {/* <Stack.Screen name="Library" component={LibraryScreen}/>
      <Stack.Screen name="Mandatory" component={MandatoryScreen}/>
      <Stack.Screen name="Software" component={SoftwareScreen}/>
      <Stack.Screen name="Pharmacy" component={PharmacyScreen}/>
      <Stack.Screen name="Engineer" component={EngineerScreen}/>
      <Stack.Screen name="Culture" component={CultureScreen}/>
      <Stack.Screen name="Media" component={MediaScreen}/>
      <Stack.Screen name="Economic" component={EconomicScreen}/>
      <Stack.Screen name="Science" component={ScienceScreen}/>
      <Stack.Screen name="Design" component={DesignScreen}/>
      <Stack.Screen name="Sport" component={SportScreen}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


