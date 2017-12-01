import React, { Component } from 'react';
import '../App.css';

class Select extends Component {

    handleChange = (e) => {
        console.log("in handleChange")
        console.log(e.target.value)
            e.preventDefault();
            this.props.setSelected(e.target.value)
        } 

    render() {
        if (this.props.shouldHide === true) {
            return <div></div>
        }
        return (
            <div className="selectRow">
            <h3>Please select a movie genre from the drop-down menu: </h3>          
                
                    <select className="dropdown dropDown" onChange={this.handleChange}>
                        <option>--Select a genre--</option>
                        <option value="28"> Action </option>
                        <option value="12"> Adventure </option>
                        <option value="16"> Animation </option>
                        <option value="35"> Comedy </option>
                        <option value="80"> Crime </option>
                        <option value="99"> Documentary </option>
                        <option value="18"> Drama </option>
                        <option value="10751"> Family </option>
                        <option value="14"> Fantasy </option>
                        <option value="36"> History </option>
                        <option value="27"> Horror </option>
                        <option value="10402"> Music</option>
                        <option value="9648"> Mystery </option>
                        <option value="10749"> Romance </option>
                        <option value="878"> Science Fiction </option>
                        <option value="10770"> TV Movie </option>
                        <option value="53"> Thriller </option>
                        <option value="10752"> War </option>
                        <option value="37"> Western </option>
                    </select>
                
            </div>
        );
    }
}

export default Select;