import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginLanding from './src/screens/LoginLanding';
import SignIn from './src/screens/SignIn';
import Register from './src/screens/Register';
import LupaPassword from './src/screens/LupaPassword';
import MenuUtama from './src/screens/MenuUtama';
import Jantung from './src/jantung/Jantung';
import JantungPengenalan from './src/jantung/JantungPengenalan';
import JantungPerawatan from './src/jantung/JantungPerawatan';
import JantungDukungan from './src/jantung/JantungDukungan';
import JantungBudaya from './src/jantung/JantungBudaya';
import JantungFaskes from './src/jantung/JantungFaskes';

import Diabetes from './src/diabetes/Diabetes';
import DiabetesPengenalan from './src/diabetes/DiabetesPengenalan';
import DiabetesPerawatan from './src/diabetes/DiabetesPerawatan';
import DiabetesDukungan from './src/diabetes/DiabetesDukungan';
import DiabetesBudaya from './src/diabetes/DiabetesBudaya';
import DiabetesFaskes from './src/diabetes/DiabetesFaskes';

import Stroke from './src/stroke/Stroke';
import StrokePengenalan from './src/stroke/StrokePengenalan';
import StrokePerawatan from './src/stroke/StrokePerawatan';
import StrokeDukungan from './src/stroke/StrokeDukungan';
import StrokeBudaya from './src/stroke/StrokeBudaya';
import StrokeFaskes from './src/stroke/StrokeFaskes';

import Tb from './src/tb/Tb';
import TbPengenalan from './src/tb/TbPengenalan';
import TbPerawatan from './src/tb/TbPerawatan';
import TbDukungan from './src/tb/TbDukungan';
import TbBudaya from './src/tb/TbBudaya';
import TbFaskes from './src/tb/TbFaskes';

import Ginjal from './src/ginjal/Ginjal';
import GinjalPengenalan from './src/ginjal/GinjalPengenalan';
import GinjalPerawatan from './src/ginjal/GinjalPerawatan';
import GinjalDukungan from './src/ginjal/GinjalDukungan';
import GinjalBudaya from './src/ginjal/GinjalBudaya';
import GinjalFaskes from './src/ginjal/GinjalFaskes';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginLanding"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginLanding" component={LoginLanding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="LupaPassword" component={LupaPassword} />
        <Stack.Screen name="MenuUtama" component={MenuUtama} />
       
        <Stack.Screen name="Jantung" component={Jantung} />
        <Stack.Screen name="JantungPengenalan" component={JantungPengenalan} />
        <Stack.Screen name="JantungDukungan" component={JantungDukungan} />
        <Stack.Screen name="JantungPerawatan" component={JantungPerawatan} />
        <Stack.Screen name="JantungBudaya" component={JantungBudaya} />
        <Stack.Screen name="JantungFaskes" component={JantungFaskes} />

        <Stack.Screen name="Diabetes" component={Diabetes} />
        <Stack.Screen name="DiabetesPengenalan" component={DiabetesPengenalan} />
        <Stack.Screen name="DiabetesDukungan" component={DiabetesDukungan} />
        <Stack.Screen name="DiabetesPerawatan" component={DiabetesPerawatan} />
        <Stack.Screen name="DiabetesBudaya" component={DiabetesBudaya} />
        <Stack.Screen name="DiabetesFaskes" component={DiabetesFaskes} />

        <Stack.Screen name="Stroke" component={Stroke} />
        <Stack.Screen name="StrokePengenalan" component={StrokePengenalan} />
        <Stack.Screen name="StrokeDukungan" component={StrokeDukungan} />
        <Stack.Screen name="StrokePerawatan" component={StrokePerawatan} />
        <Stack.Screen name="StrokeBudaya" component={StrokeBudaya} />
        <Stack.Screen name="StrokeFaskes" component={StrokeFaskes} />
     
        <Stack.Screen name="Tb" component={Tb} />
        <Stack.Screen name="TbPengenalan" component={TbPengenalan} />
        <Stack.Screen name="TbDukungan" component={TbDukungan} />
        <Stack.Screen name="TbPerawatan" component={TbPerawatan} />
        <Stack.Screen name="TbBudaya" component={TbBudaya} />
        <Stack.Screen name="TbFaskes" component={TbFaskes} />
     
        <Stack.Screen name="Ginjal" component={Ginjal} />
        <Stack.Screen name="GinjalPengenalan" component={GinjalPengenalan} />
        <Stack.Screen name="GinjalDukungan" component={GinjalDukungan} />
        <Stack.Screen name="GinjalPerawatan" component={GinjalPerawatan} />
        <Stack.Screen name="GinjalBudaya" component={GinjalBudaya} />
        <Stack.Screen name="GinjalFaskes" component={GinjalFaskes} />
     
     
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;
