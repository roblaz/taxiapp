import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Button, Dimensions } from 'react-native';
import HeaderApp from '../HeaderApp.js';
import '../App.js';

export default class DriverProfile extends React.Component {
  render() {
    const { height } = Dimensions.get('window');
    return (
      <View style={{backgroundColor: '#333333'}}>
        <ScrollView>
          <HeaderApp />
          <View style={{backgroundColor: '#f8f8f8', padding: 15 }}>
            <Text style={{fontSize: 36, color: '#333333', fontWeight: 'bold', paddingBottom: 10 }}>Driver profile</Text>
            <Text style={stylesRide.label}>Name:</Text>
            <TextInput style={stylesRide.input} placeholder={'Name'} />
            <Text style={stylesRide.label}>Age:</Text>
            <TextInput style={stylesRide.input} placeholder={'Age'} />
            <Text style={stylesRide.label}>Phone:</Text>
            <TextInput style={stylesRide.input} placeholder={'Phone'} />
            <Text style={stylesRide.label}>Car model:</Text>
            <TextInput style={stylesRide.input} placeholder={'Car model'} />
            <Text style={stylesRide.label}>Selfie:</Text>
            <View style={stylesRide.btnMakeSelfie}>
              <Button color="#fff" title="Make selfie"></Button>
            </View>
            <Text style={stylesRide.label}>Car photo:</Text>
            <View style={stylesRide.btnMakeSelfie}>
              <Button color="#fff" title="Car photo"></Button>
            </View>
            <View style={stylesRide.btnTakeRide}>
              <Button color="#fff" title="START BOOBING"></Button>
            </View>
          </View>
        </ScrollView>
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
  label: {
    fontSize: 20,
    color: '#737373',
    fontWeight: 'bold',
    paddingTop: 10,
  },
  btnMakeSelfie: {
    backgroundColor: '#0099ff',
    borderRadius: 3,
    margin: 4,
    height: 40,
    justifyContent: 'center', 
  },
  btnTakeRide: {
    backgroundColor: '#0099ff',
    padding: 15,
    borderRadius: 3,
    margin: 4,
  }
})


