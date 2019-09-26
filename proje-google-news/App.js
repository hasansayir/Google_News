import * as React from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//page import
import Home from './Home';
import Kategori from './Kategori'
import Detay from './Detay'
import Haberler from './Haberler'

const stack = createStackNavigator({
  home: {
    screen: Home
  },
  kategori:{
    screen: Kategori
  },
   detay:{
    screen: Detay
  },
  haberler:{
    screen: Haberler
  },
  

});

export default createAppContainer(stack);