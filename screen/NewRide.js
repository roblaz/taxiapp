import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Button, Dimensions } from 'react-native';
import HeaderApp from '../HeaderApp.js';
import '../App.js';
import Map from './Map.js'

export default class NewRide extends React.Component {
  render() {
    const { height } = Dimensions.get('window');
    return (
      <View style={{backgroundColor: '#333333'}}>      
          <HeaderApp />
            <Map />
      </View>
    );
  }
}

const stylesRide = StyleSheet.create ({
  input: {
    height: 50,
    fontSize: 20,
    color: '#333333',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#cecece',
    paddingLeft: 7,
  },
  /*label: {
    fontSize: 20,
    color: '#737373',
    fontWeight: 'bold',
  },
  btnSign: {
    backgroundColor: '#0099ff',
    padding: 15,
    borderRadius: 3,
    margin: 4,
    opacity: 0.9
  }*/
})


