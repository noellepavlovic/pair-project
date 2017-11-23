import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import Select from './components/Select'
import Result from './components/Result'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <Select />
        <Result />
      </div>
    );
  }
}

export default App;
