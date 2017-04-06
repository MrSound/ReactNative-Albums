// Index.android.js - place code in here for Android!!!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/component/header';

// Create a component
const App = () => (
  <Header />
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
