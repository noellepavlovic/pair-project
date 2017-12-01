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
        genre: null,
        shouldHide: false
		}
  }

  componentDidMount() {
    console.log(localStorage.getItem('movieList'))
    console.log(this.state.movieList)
    let __movieList = localStorage.getItem('movieList') !== null ? JSON.parse(localStorage.getItem('movieList')) : []
    console.log(__movieList)

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
    let found = false;
    for(let i=0; i<this.state.movieList.length; i++){
      if (this.state.movieList[i].id === this.state.movie.id) {
        found = true
    }
  }
    if (!found) {
    this.setState({
      movieList: this.state.movieList.concat([this.state.movie])
    },()=> console.log(this.state.movieList))
  }
}
  hideSelector =() => {
    this.setState({
      shouldHide: true
    })
  }
  showSelector =() => {
    this.setState({
      shouldHide: false
    })
  }
  
  render() {
    return (
      <div className="App container">
        <Header />
        <Select shouldHide={this.state.shouldHide} setSelected={(value) => this.setSelected(value)}/>
        <Route exact path='/' render={(props)=><Result hideSelector={this.hideSelector} saveToList={this.saveToList} selectButton={this.selectButton} movie={this.state.movie}/>}/>
        <Route path='/list' render={(props)=> <List showSelector={this.showSelector} movieList={this.state.movieList} {...props}/>} />
      </div>
    );
  }
}

export default App;
