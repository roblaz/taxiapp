import React, {Component} from 'react';
import { Button, Dimensions, Text, StyleSheet, View} from 'react-native';
import './App.js';
import { Video } from 'expo';
import DriveScreen from './screen/DriveScreen.js';
import RideScreen from './screen/RideScreen.js';
import { createStackNavigator } from 'react-navigation';

export default class Videobody extends React.Component {
    buttonClick = () => {
        return (
            <RideScreen />
        )
    };
    render() {
        const { width } = Dimensions.get('window');
        return (
                <View style={stylesVideo.block}>
                    <Video source={require('./boobs.mp4')}
                    isLooping
                    shouldPlay
                    resizeMode="cover"
                    style={{ /*width,*/ height: 300 }} />
                    <View style={stylesVideo.VideoStyle}>
                        <Text style={stylesVideo.tekst}>Show boobs - get free taxi!</Text>7
                        <Text style={stylesVideo.tekstParagraph}>
                        The best way to get wherever you are going, without paying a cent. We created a unique app 
                        that will help to get a ride for free, just showing your boobs.
                        </Text>
                    </View>
                    <View style={{backgroundColor: 'black', paddingBottom: 4}}>
                        <View style={stylesVideo.btn}>
                            <Button color="#fff" title="I HAVE BOOBS" onPress={() => this.buttonClick()} />
                        </View>
                        <View style={stylesVideo.btn}>
                            <Button color="#fff" title="I HAVE CAR" onPress={() => this.props.navigation.navigate('DriveScreen')}  />
                        </View>
                    </View>
                </View>
        )
    }
}

const stylesVideo = StyleSheet.create ({
    VideoStyle: {
        backgroundColor: '#737373',
        backgroundColor: 'rgba(255, 255, 255 , 0.5)',
        position: 'absolute',
        top: 0,
        margin: 10,
        //align: 'center',
    },
    block: {
        position: 'relative',
    },
    tekst: {
        fontSize: 30,
        margin: 20,
        color: '#333333',
        //fontFamily: 'Montserrat',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    tekstParagraph: {
        fontSize: 14,
        //margin: 20,
        color: '#333333',
        //fontFamily: 'Montserrat',
        textAlign: 'center',
        lineHeight: 27,
        fontWeight: 'normal',
        margin: 10,
    },
    btn: {
        backgroundColor: '#0099ff',
        padding: 15,
        borderRadius: 3,
        margin: 4,
        opacity: 0.9
    }
});