/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {AppRegistry, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import Index from './app/index';
import configureStore from './app/store/configure';

const store = configureStore();

class myGithub extends Component {
  render() {
    return (
        <Provider store={store}>
           <Index />
        </Provider>
    );
  }
}

AppRegistry.registerComponent('myGithub', () => myGithub);
