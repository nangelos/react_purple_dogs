import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Box from './components/purplebox'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Box/>
      </div>
    );
  }
}

export default App;
