import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import axios from 'axios';
import List from './components/List'
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
    console.log(value)
    axios.post('http://localhost:8080/genre', {genre: value})
    .then((response) => {
      this.setState({
        movie: response.data
      })
      console.log(this.state.movie);
    })
  }

  selectButton =() => {
    axios.post('http://localhost:8080/genre', {genre: this.state.movie.genre_id})
    .then((response) => {
      this.setState({
        movie: response.data
      })
      console.log(this.state.movie);
    })
  }
  
  render() {
    return (
      <div className="App container">
        <Header />
        <Select setSelected={(value) => this.setSelected(value)}/>
        <Route exact path='/' render={(props)=><Result selectButton={this.selectButton} movie={this.state.movie}/>}/>
        <Route path='/list' render={(props)=> <List movieList={this.state.movieList} {...props}/>} />
      </div>
    );
  }
}

export default App;
