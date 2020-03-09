import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import HanyangScreen, {HanyangWebViewPage} from './src/screens/HanyangScreen';
import LibraryScreen, {libraryWebViewPage} from './src/screens/LibraryScreen';
import DormitoryScreen from './src/screens/Mandatory/DormitoryScreen'
import SoftwareScreen, {softwareWebViewPage} from './src/screens/SoftwareScreen';
import PharmacyScreen, {pharmacyWebViewPage} from './src/screens/PharmacyScreen';
import EngineerScreen, {engineerWebViewPage} from './src/screens/EngineerScreen';
import CultureScreen, {cultureWebViewPage} from './src/screens/CultureScreen';
import MediaScreen, {mediaWebViewPage} from './src/screens/MediaScreen';
import EconomicScreen, {ecomomicWebViewPage} from './src/screens/EconomicScreen';
import ScienceScreen, {scienceWebViewPage} from './src/screens/ScienceScreen';
import DesignScreen, {designWebViewPage} from './src/screens/DesignScreen';
import SportScreen, {sportWebViewPage} from './src/screens/SportScreen';

import HappyScreen, {happyWebViewPage} from './src/screens/Mandatory/HappyScreen';
import CreationScreen, {creationWebViewPage} from './src/screens/Mandatory/CreationScreen';

global.Buffer = global.Buffer || require('buffer').Buffer


const Stack = createStackNavigator();


export default function App() {


  const headerStyle = {
    title: 'HANYANG UNIVERSITY NOTICE',
    headerStyle: {
      backgroundColor: '#0D3FA5',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    }}

    const headerStyle2 = {
      headerStyle: {
        backgroundColor: '#002D93',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      }}


  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={headerStyle}/>
        <Stack.Screen name="Campus" component={HanyangScreen} options={headerStyle2}/>
          <Stack.Screen name="HanyangWebViewPage" component={HanyangWebViewPage} options={headerStyle2}/>
        <Stack.Screen name="Library" component={LibraryScreen} options={headerStyle2}/>
          <Stack.Screen name="libraryWebViewPage" component={libraryWebViewPage} options={headerStyle2}/>
        <Stack.Screen name="Dormitory" component={DormitoryScreen} options={headerStyle2}/>
            <Stack.Screen name="Happy" component={HappyScreen} options={headerStyle2}/>
              <Stack.Screen name="happyWebViewPage" component={happyWebViewPage} options={headerStyle2}/>
            <Stack.Screen name="Creation" component={CreationScreen} options={headerStyle2}/>
              <Stack.Screen name="creationWebViewPage" component={creationWebViewPage} options={headerStyle2}/>
        <Stack.Screen name="Computing" component={SoftwareScreen} options={headerStyle2}/>
          <Stack.Screen name="softwareWebViewPage" component={softwareWebViewPage} options={headerStyle2}/>
        <Stack.Screen name="Pharmacy" component={PharmacyScreen} options={headerStyle2}/>
          <Stack.Screen name="pharmacyWebViewPage" component={pharmacyWebViewPage} options={headerStyle2}/>
        <Stack.Screen name="Engineering Sciences" component={EngineerScreen} options={headerStyle2}/>
          <Stack.Screen name="engineerWebViewPage" component={engineerWebViewPage} options={headerStyle2}/>
        <Stack.Screen name="Languages & Cultures" component={CultureScreen} options={headerStyle2}/>
          <Stack.Screen name="cultureWebViewPage" component={cultureWebViewPage} options={headerStyle2}/>
        <Stack.Screen name="Communication" component={MediaScreen} options={headerStyle2}/>
          <Stack.Screen name="mediaWebViewPage" component={mediaWebViewPage} options={headerStyle2}/>
        <Stack.Screen name="Business And Economics" component={EconomicScreen} options={headerStyle2}/>
          <Stack.Screen name="ecomomicWebViewPage" component={ecomomicWebViewPage} options={headerStyle2}/>
        <Stack.Screen name="Science & Convergence Technology" component={ScienceScreen} options={headerStyle2}/>
          <Stack.Screen name="scienceWebViewPage" component={scienceWebViewPage} options={headerStyle2}/>
        <Stack.Screen name="Design" component={DesignScreen} options={headerStyle2}/>
          <Stack.Screen name="designWebViewPage" component={designWebViewPage} options={headerStyle2}/>
        <Stack.Screen name="Sports And Arts" component={SportScreen} options={headerStyle2}/>
          <Stack.Screen name="sportWebViewPage" component={sportWebViewPage} options={headerStyle2}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


