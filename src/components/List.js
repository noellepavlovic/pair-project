import React, { Component } from 'react';
import '../App.css';

class List extends Component {
    render() {
        console.log(this.props);
            let newList=[];
        for (let i=0; i<this.props.movieList.length; i++)
            newList.push(
            <div className ="parent">
                <div className="row listRow">
            <div className="col-xs-4">
              <img className="listImg" src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + this.props.movieList[i].poster_path} alt="movie poster" />
            </div>
            <div className="col-xs-8">
              <div className="row">
                <div className="col-xs-2 descHeading text-left">
                  Title:
                </div>
                <div className="col-xs-10 text-left">
                  {this.props.movieList[i].title}
                </div>
              </div>
              <div className="row">
                <div className="col-xs-2 descHeading text-left">
                  Rating:
                </div>
                <div className="col-xs-10 text-left">
                  {this.props.movieList[i].vote_average}
                </div>
              </div>
              <div className="row">
                <div className="col-xs-2 descHeading text-left">
                  Released:
                </div>
                <div className="col-xs-10 text-left">
                  {this.props.movieList[i].release_date}
                </div>
                <hr/>
                </div>
                </div>
                </div>
            </div>
            )
            console.log(newList);
        return(
            <div>
                {newList}
            </div>
        )
    }
}
export default List;