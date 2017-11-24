import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import axios from 'axios';

import './App.css';

import Header from './components/Header'
import Select from './components/Select'
import Result from './components/Result'

class App extends Component {
  constructor() {
		super();
		this.state = {
        movie: null,
        movieList: null
		}
  }
  
  componentDidUpdate() {
    axios.get('http:///localhost:8080/genre')
      .then(response => {
        console.log(response)
      })
  }

  setSelected = (value) => {
    console.log(value)
    axios.post('http://localhost:8080/genre', {genre: value})
    .then((response) => {
      console.log(response)
    })
  }

  render() {
    console.log(this.state.genreId)
    return (
      <div className="App container">
        <Header />
        <Select setSelected={(value) => this.setSelected(value)}/>
        <Result />
      </div>
    );
  }
}

export default App;
