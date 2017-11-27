import React, { Component } from 'react';
import '../App.css';

class List extends Component {
    render() {
        console.log(this.props.movieList);
        let newList=[];
        for (let i=0; i<this.props.movieList.length; i++)
            newList.push(
            <div>{this.props.movieList[i].title}</div>
            )
            console.log(newList);
        return(
            <div className="container list">
                {newList}
            </div>
        )
    }
}
export default List;