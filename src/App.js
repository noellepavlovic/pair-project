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
  
  setSelected = (value) => {
<<<<<<< HEAD
    console.log(value)
=======
    console.log(value);
>>>>>>> 79900e5284befccc27887e14866da28fc86ab4eb
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
