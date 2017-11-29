import React, { Component } from 'react';
import '../App.css';

class List extends Component {
    render() {
        console.log(this.props);
       /* let newList=[];
        for (let i=0; i<this.props.movieList.length; i++)
            newList.push(
            <div>{this.props.movieList[i].title}</div>
            )
            console.log(newList);*/
        return(
<<<<<<< HEAD
            <div>
                placeholder
=======
            <div className="list">
                {newList}
>>>>>>> 6db0e8c0c2cd418d0bfc17556696683d62164bbb
            </div>
        )
    }
}
export default List;