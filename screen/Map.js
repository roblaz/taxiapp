import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Button, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import '../App.js';

export default class Map extends React.Component {
  render() {
    const { height } = Dimensions.get('window');
    return (
            <View style={stylesMap.MapContainer}>
                <MapView style={stylesMap.map}
                    showsUserLocation='true'
                    region={{
                        latitude: 59.4369608,
                        longitude: 24.7535747,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1,
                    }}
                    >
                    <MapView.Marker
                        coordinate= {{
                            latitude: 59.4369608,
                            longitude: 24.7535747, 
                        }}
                    />
                </MapView>
                <Text style={stylesMap.label}>Pickup address:</Text>
                <TextInput style={stylesMap.input} placeholder={'Enter a location'} />
                <View style={stylesMap.btnSelectCar}>
                    <Button color="#fff" title="SELECT CAR"></Button>
                </View>
            </View>
    );
  }
}

const { height } = Dimensions.get('window');
const stylesMap = StyleSheet.create ({
  MapContainer: {
    position: 'relative',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: height,
    width: 'auto',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0, 
  },
  btnSelectCar: {
    backgroundColor: '#0099ff',
    padding: 15,
    borderRadius: 3,
    margin: 4,
    opacity: 0.8,
    alignItems: 'center',
  },
  input: {
    height: 50,
    fontSize: 20,
    color: '#333333',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#cecece',
    paddingLeft: 7,
    margin: 4,
    opacity: 0.8,
  },
  label: {
    fontSize: 20,
    color: '#737373',
    fontWeight: 'bold',
    margin: 4,
    marginBottom: 0,
  },
})