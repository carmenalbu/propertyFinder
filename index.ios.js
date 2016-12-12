//'use strict';//enables strict mode - adds improved error handling and disables other - js better

import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, ListView, NavigatorIOS, Image, TextInput, ActivityIndicator, View, TouchableHighlight } from 'react-native';

var SearchPage = require('./SearchPage');

var stylesIndex = StyleSheet.create({
  container: {
    flex: 1 
  }
});

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={stylesIndex.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);
