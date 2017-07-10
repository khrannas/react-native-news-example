import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

import ListSourceScreen from './screen/ListSourceScreen';
import ListNewsScreen from './screen/ListNewsScreen';
import NewsDetailScreen from './screen/NewsDetailScreen';

export default StackNavigator({
  Home: {
    screen: ListSourceScreen
  },
  ListNews: {
    screen: ListNewsScreen
  },
  Detail: {
    screen: NewsDetailScreen
  }
}, {
  navigationOptions: {
    title: 'News',
    headerTint: 'black',
    headerStyle: {
      backgroundColor: 'rgb(92, 199, 178)'
    }
  }
});
