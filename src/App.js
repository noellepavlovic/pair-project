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
        movieList: [{ vote_count: 4602,
          id: 244786,
          video: false,
          vote_average: 8.3,
          title: 'Whiplash',
          popularity: 77.902784,
          poster_path: '/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg',
          original_language: 'en',
          original_title: 'Whiplash',
          genre_ids: [ 18 ],
          backdrop_path: '/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg',
          adult: false,
          overview: 'Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.',
          release_date: '2014-10-10' }]
		}
  }
  setSelected = (value) => {
    console.log(value);
    axios.post('http://localhost:8080/genre', {genre: value})
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
        <Route exact path='/' render={(props)=><Result movie={this.state.movie}/>}/>
        <Route path='/list' render={(props)=> <List movieList={this.state.movieList} {...props}/>} />
      </div>
    );
  }
}

export default App;
