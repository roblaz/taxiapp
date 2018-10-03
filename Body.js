import React, {Component} from 'react';
import { Image, StyleSheet, Text, View, Video } from 'react-native';
import { Dimensions } from "react-native";
import './App.js';

export default class Body extends React.Component {
    render() {
        //var width = Dimensions.get('window').width; //растянуть блок на всю ширину экрана
        const { width } = Dimensions.get('window');
        return (
            <View>
                <View style={{/*width: width,*/ height: 300, backgroundColor: '#43b9f6',  alignItems: 'center',
                justifyContent: 'center'}}>
                    <Text style={styles.h4}>Show boobs, get a ride</Text>
                    <Text style={styles.paragraph}>Choose your destination and set you location. You will see a driver picture, 
                        with whom you will reach your final destination. If your friend is calling an 
                        boober for you, no matter who will pay, we accept any boobs you choose.
                    </Text>
                </View>
                <View style={{/*width: width,*/ height: 300, backgroundColor: '#6686ff',  alignItems: 'center',
                justifyContent: 'center'}}>
                    <Text style={styles.h4}>Always on, always available</Text>
                    <Text style={styles.paragraph}>24/7 request a ride any time on day. No need to worry 
                        about the money, when your boobs are always with you.
                    </Text>
                </View>
                <View style={{/*width: width,*/ height: 300, backgroundColor: '#be78ff',  alignItems: 'center',
                justifyContent: 'center'}}>
                    <Text style={styles.h4}>We rate each other, we make it better</Text>
                    <Text style={styles.paragraph}>Rate you driver and he will rate you back. We care about our services, 
                        and we want to make your ride comfortable, but we care about side also. Let’s make each other happy!
                    </Text>
                </View>
                <View style={{/*width: width,*/ height: 300, backgroundColor: '#ececec', padding: 20 }}>>
                    <Text>Boober is 1'st april fun-project by Negative. But who knows... who knows...</Text>
                    <Text style={{textAlign: 'center', paddingTop: 100}}>© Negative Space OÜ. 2018a.</Text>
                </View>
                <View style={{/*width: width,*/ height: 60, backgroundColor: '#fff', justifyContent: 'center'}}>>
                    <Text>© Negative. All Rights reserved.</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    h4: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        //fontFamily: 'Montserrat',
        marginBottom: 10,
        textAlign: 'center',
        padding: 10,
    },
    paragraph: {
        fontSize: 14,
        color: '#fff',
        margin: 0,
        lineHeight: 27,
        textAlign: 'center',
        //fontFamily: 'Montserrat',
        padding: 10,
    }
});
