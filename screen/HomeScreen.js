import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import HeaderApp from '../HeaderApp.js'
import Videobody from '../Videobody.js';
import Body from '../Body.js';
import '../App.js';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#333333'}}>
      <ScrollView>
      <HeaderApp />
      <Videobody />
      <Body />
      </ScrollView>
      </View>
    );
  }
}


