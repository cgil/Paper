import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Index from './src/index';

export default class Paper extends Component { // eslint-disable-line
  render() { // eslint-disable-line class-methods-use-this
    return (
      <Index />
    );
  }
}

AppRegistry.registerComponent('Paper', () => Paper);