import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Button, Dimensions } from 'react-native';
import HeaderApp from '../HeaderApp.js';
import '../App.js';

export default class SignUp extends React.Component {
  render() {
    const { height } = Dimensions.get('window');
    return (
      <View style={{backgroundColor: '#333333'}}>
        <ScrollView>
          <HeaderApp />
          <View style={{backgroundColor: '#f8f8f8', padding: 15, height: height }}>
            <Text style={{fontSize: 36, color: '#333333', fontWeight: 'bold', paddingBottom: 20 }}>Sign Up</Text>
            <Text style={{fontSize: 16, color: '#737373', paddingBottom: 10 }}>Already have an account? Then please sign in.</Text>
            <Text style={stylesRide.label}>E-mail:</Text>
            <TextInput style={stylesRide.input} placeholder={'E-mail address'} />
            <Text style={stylesRide.label}>Password:</Text>
            <TextInput style={stylesRide.input} placeholder={'Password'} />
            <Text style={stylesRide.label}>Password (again):</Text>
            <TextInput style={stylesRide.input} placeholder={'Password again'} />
            <View style={stylesRide.btnSign}>
              <Button color="#fff" title="Sign Up"></Button>
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
    marginBottom: 2,
  },
  btnSign: {
    backgroundColor: '#0099ff',
    padding: 15,
    borderRadius: 3,
    margin: 4,
    marginTop: 15,
  },
})


