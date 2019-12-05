import React, { Component } from 'react';
import { 
  Text,
  View, 
  StatusBar,
  StyleSheet
  } from 'react-native';


 
import Login from './src/pages/Login'
import Signup from './src/pages/Signup'
import Router from './src/config/router/index'

import Profil from './src/pages/Profil'



export default class App extends Component {
  render() {
    return (
      
      <Router/>
      
    );
  }
}


