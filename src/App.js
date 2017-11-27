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
        movieList: [],
        genre: null
		}
  }

  componentDidMount() {
    let __movieList = localStorage.getItem('movieList') !== null ? JSON.parse(localStorage.getItem('movieList')) : null

    this.setState({
			movieList: __movieList
		})

    window.addEventListener('beforeunload', (event) => {
			localStorage.setItem('movieList', JSON.stringify(this.state.movieList))
		}, false);
  }

  setSelected = (value) => {
    this.setState({
      genre: value
    })
    axios.post('http://localhost:8080/genre', {genre: value})
    .then((response) => {
      this.setState({
        movie: response.data
      })
    })
  }

  selectButton =() => {
    axios.post('http://localhost:8080/genre', {genre: this.state.genre})
    .then((response) => {
      this.setState({
        movie: response.data
      })
    })
  }

  saveToList=() => {
    this.setState({
      movieList: this.state.movieList.concat(this.state.movie)
    })
    console.log(this.state.movieList);
  }

  render() {
    return (
      <div className="App container">
        <Header />
        <Select setSelected={(value) => this.setSelected(value)}/>
        <Route exact path='/' render={(props)=><Result saveToList={this.saveToList} selectButton={this.selectButton} movie={this.state.movie}/>}/>
        <Route path='/list' render={(props)=> <List movieList={this.state.movieList} {...props}/>} />
      </div>
    );
  }
}

export default App;
