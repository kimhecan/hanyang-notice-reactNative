import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import HanyangScreen, {HanyangWebViewPage} from './src/screens/HanyangScreen';
import LibraryScreen, {libraryWebViewPage} from './src/screens/LibraryScreen';
import DormitoryScreen from './src/screens/Mandatory/DormitoryScreen'
import SoftwareScreen, {softwareWebViewPage} from './src/screens/SoftwareScreen';
import HappyScreen, {happyWebViewPage} from './src/screens/Mandatory/HappyScreen';
import CreationScreen, {creationWebViewPage} from './src/screens/Mandatory/CreationScreen';
import PharmacyScreen, {pharmacyWebViewPage} from './src/screens/PharmacyScreen';
import EngineerScreen, {engineerWebViewPage} from './src/screens/EngineerScreen';
import CultureScreen, {cultureWebViewPage} from './src/screens/CultureScreen';
import MediaScreen, {mediaWebViewPage} from './src/screens/MediaScreen';
import EconomicScreen, {ecomomicWebViewPage} from './src/screens/EconomicScreen';
import ScienceScreen, {scienceWebViewPage} from './src/screens/ScienceScreen';
import DesignScreen, {designWebViewPage} from './src/screens/DesignScreen';
import SportScreen, {sportWebViewPage} from './src/screens/SportScreen';


global.Buffer = global.Buffer || require('buffer').Buffer

const Stack = createStackNavigator();


export default function App() {

  const headerStyle = {
    headerStyle: {
      backgroundColor: '#002D93',
    },
    headerTitleAlign: 'center',
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 15,
    }}

  return (
      <NavigationContainer initialRouteName="HANYANG UNIVERSITY NOTICE">
        <Stack.Navigator>
          <Stack.Screen name="HANYANG UNIVERSITY NOTICE" component={HomeScreen} options={headerStyle}/>
          <Stack.Screen name="캠퍼스" component={HanyangScreen} options={headerStyle}/>
            <Stack.Screen name="캠퍼스 웹 사이트" component={HanyangWebViewPage} options={headerStyle}/>
          <Stack.Screen name="학술정보관" component={LibraryScreen} options={headerStyle}/>
            <Stack.Screen name="학술정보관 웹 사이트" component={libraryWebViewPage} options={headerStyle}/>
          <Stack.Screen name="기숙사" component={DormitoryScreen} options={headerStyle}/>
              <Stack.Screen name="행복관" component={HappyScreen} options={headerStyle}/>
                <Stack.Screen name="행복관 웹 사이트" component={happyWebViewPage} options={headerStyle}/>
              <Stack.Screen name="창의관" component={CreationScreen} options={headerStyle}/>
                <Stack.Screen name="창의관 웹 사이트" component={creationWebViewPage} options={headerStyle}/>
          <Stack.Screen name="소프트웨어융합대학" component={SoftwareScreen} options={headerStyle}/>
            <Stack.Screen name="소프트웨어융합대학 웹 사이트" component={softwareWebViewPage} options={headerStyle}/>
          <Stack.Screen name="약학대학" component={PharmacyScreen} options={headerStyle}/>
            <Stack.Screen name="약학대학 웹 사이트" component={pharmacyWebViewPage} options={headerStyle}/>
          <Stack.Screen name="공과대학" component={EngineerScreen} options={headerStyle}/>
            <Stack.Screen name="공과대학 웹 사이트" component={engineerWebViewPage} options={headerStyle}/>
          <Stack.Screen name="국제문화대학" component={CultureScreen} options={headerStyle}/>
            <Stack.Screen name="국제문화대학 웹 사이트" component={cultureWebViewPage} options={headerStyle}/>
          <Stack.Screen name="언론정보대학" component={MediaScreen} options={headerStyle}/>
            <Stack.Screen name="언론정보대학 웹 사이트" component={mediaWebViewPage} options={headerStyle}/>
          <Stack.Screen name="경상대학" component={EconomicScreen} options={headerStyle}/>
            <Stack.Screen name="경상대학 웹 사이트" component={ecomomicWebViewPage} options={headerStyle}/>
          <Stack.Screen name="과학기술융합대학" component={ScienceScreen} options={headerStyle}/>
            <Stack.Screen name="과학기술융합대학 웹 사이트" component={scienceWebViewPage} options={headerStyle}/>
          <Stack.Screen name="디자인대학" component={DesignScreen} options={headerStyle}/>
            <Stack.Screen name="디자인대학 웹 사이트" component={designWebViewPage} options={headerStyle}/>
          <Stack.Screen name="예체능대학" component={SportScreen} options={headerStyle}/>
            <Stack.Screen name="예체능대학 웹 사이트" component={sportWebViewPage} options={headerStyle}/>
        </Stack.Navigator>
    </NavigationContainer>
  );

}


