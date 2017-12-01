import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

class Result extends Component {
  render() {
    return (

      (!this.props.movie) ?
        (<div className="details">
          <div className="row"> 
          <img className="stretch" src="/img/movies.jpg" alt="movie collage" />
          <Link to ='/list'><button type="button" className="btn btn-primary">View List</button></Link>
          </div>
        </div>)
        :
        (<div className="details">
          <div className="row">
            <div className="col-xs-12 resHead">
              <h1> You should watch:</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4">
              <img className="detailsImg" src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + this.props.movie.poster_path} alt="movie poster" />
            </div>
            <div className="col-xs-8">
              <div className="row">
                <div className="col-xs-2 descHeading text-left">
                  Title:
                </div>
                <div className="col-xs-10 text-left">
                  {this.props.movie.title}
                </div>
              </div>
              <div className="row">
                <div className="col-xs-2 descHeading text-left">
                  Rating:
                </div>
                <div className="col-xs-10 text-left">
                  {this.props.movie.vote_average}
                </div>
              </div>
              <div className="row">
                <div className="col-xs-2 descHeading text-left">
                  Release Date:
                </div>
                <div className="col-xs-10 text-left">
                  {this.props.movie.release_date}
                </div>
              </div>
              <div className="row">
                <div className="col-xs-2 descHeading text-left">
                  Summary:
                </div>
                <div className="col-xs-10 text-left">
                  {this.props.movie.overview}
                </div>
              </div>
              <div className="row btnRow">
                <div className="col-xs-12 text-center">
                <button type="button" className="btn btn-primary" onClick={(e) => this.props.selectButton()}>Next Movie</button>
                <button type="button" className="btn btn-primary" onClick={(e) => this.props.saveToList()}>Save to List</button>
                <Link to ='/list'><button type="button" className="btn btn-primary">View List</button></Link>
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-primary"onClick={(e) => this.props.selectButton()}>Next Movie</button>
            <button type="button" className="btn btn-primary"onClick={(e) => this.props.saveToList()}>Save to List</button>
            <Link to ='/list'><button type="button" className="btn btn-primary"onClick={(e) => this.props.hideSelector()}>View List</button></Link>
          </div>
        </div>)
    )
  }
}

export default Result;