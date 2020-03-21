import React, {Component} from 'react';

export default class OPWSearch extends React.Component{
    render() {
        return(
        <div className="centeredDiv">
            <label className="searchText">Sök stad  </label>
            <input type="text" ref= {val => this.searchText = val}/>
            <button className="searchButton" onClick = {() => this.props.search(this.searchText.value)}>  Sök</button>
        </div>
        );

    }
}
