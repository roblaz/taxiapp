import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';
import './App.js';


export default class HeaderApp extends React.Component {
  render() {
    return (
        <Header style={stylesHeader.head}>
            <Left>
                <Image source={require('./Boober.png')} style={stylesHeader.logo}/>
            </Left>
            <Right>
                <Icon name="menu" onPress={() => this.props.navigation.openDrawer() } />
            </Right>
        </Header>
    );
  }
}

const stylesHeader = StyleSheet.create ({
    logo: {
        width: 140,
        height: 50,
        //float: 'left',
        margin: 20,
        
    },
    head: {
        height: 80,
        justifyContent: 'center',
        backgroundColor: '#fff',
    }
});


