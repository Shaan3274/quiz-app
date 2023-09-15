/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState, useEffect } from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import Navigation from './navigation/navigation';
import { NavigationContainer } from '@react-navigation/native';
import  StackNavigation from './navigation/navigation'
const App = () => {
  return(
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
};

export default App;
