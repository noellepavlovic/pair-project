import React, { Component } from 'react';

import '../App.css';

class Result extends Component {
  render() {
    return (
 
      (!this.props.movie) ?
        (<div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1> Please select a movie genre from the drop-down above</h1>
            </div>
          </div>
        </div>)
        :
        (<div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1> You should watch:</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4">
<<<<<<< HEAD
              <img className="detailsImg" src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + this.props.movie.poster_path} alt="movie poster" />
=======
              <img className="detailsImg" src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + this.props.movie.poster_path} alt="Image of movie Poster" />
>>>>>>> 5665fb958462ee247169601a053dc438e279d20a
            </div>
            <div className="col-xs-8">
              <div className="row">
                <div className="col-xs-2 descHeading">
                  Title:
            </div>
                <div className="col-xs-10">
                  {this.props.movie.title}
                </div>
              </div>
              <div className="row">
                <div className="col-xs-2 descHeading">
                  Rating:
            </div>
                <div className="col-xs-10">
                  {this.props.movie.vote_average}
                </div>
              </div>
              <div className="row">
                <div className="col-xs-2 descHeading">
                  Release Date:
            </div>
                <div className="col-xs-10">
                  {this.props.movie.release_date}
                </div>
              </div>
              <div className="row">
                <div className="col-xs-2 descHeading">
                  Genre:
            </div>
                <div className="col-xs-10">
                  {this.props.movie.overview}
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-primary"onClick={(e) => this.props.selectButton()}>Next Movie</button>
            <button type="button" className="btn btn-primary"onClick={(e) => this.props.saveToList()}>Save to List</button>
          </div>
        </div>)
    )
  }
}

export default Result;