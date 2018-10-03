import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import DriveScreen from './screen/DriveScreen.js';
import RideScreen from './screen/RideScreen.js';
import HomeScreen from './screen/HomeScreen.js';
import PasswordResset from './screen/PasswordResset.js';
import RegistrationAgeName from './screen/RegistrationAgeName.js'
import NewRide from './screen/NewRide.js';
import SignUp from './screen/SignUp.js';
import DriverProfile from './screen/DriverProfile.js';

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator>
      </AppDrawerNavigator>
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1}}>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator ({
  Home: HomeScreen,
  Drive: DriveScreen,
  Ride: RideScreen,
  Password: PasswordResset,
  RegistrationAge: RegistrationAgeName,
  NewRide: NewRide,
  SignUp: SignUp,
  DriverProfile: DriverProfile,
}, {
  initialRouteName: 'Home',
  drawerBackgroundColor: '#333333',
  drawerPosition: 'right',
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    labelStyle: {
      color: '#ffffff',
    },
    activeLabelStyle: {
      color: '#0099ff',
    }
  }
})

