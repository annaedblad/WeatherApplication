import React, { Component } from 'react';
import OPWSearch from './OPWSearch';
import OPWStockholmWeather from './OPWStockholmWeather';
import OPWSearchResult from './OPWSearchResult';
import OPWLongTimeForecast from './OPWLongTimeForecast';

export default class OPWContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            searchResult: [],
            isLoaded: false
        };
    }

    fetchData = () => {
        if(this.state.isLoaded == false) {

        fetch('http://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=716f4bfa31b5b0bb6aef73898332a633')
            .then(result => result.json())
            .then(data => {

                this.setState({
                    result: data,
                    isLoaded: true
                })
               
            })
        }
    }

    search = (searchvalue) => {

        const url = "http://api.openweathermap.org/data/2.5/weather?q=" + searchvalue +"&appid=716f4bfa31b5b0bb6aef73898332a633";

        fetch(url)
        .then(response => response.json())
        .then( data => {

            this.setState({searchResult: data})
            
        });
    }

    render = () => {
        {this.fetchData()}

        return (<React.Fragment>
            <OPWStockholmWeather resultData={this.state.result}/>
            <OPWSearch search ={this.search} />
            <OPWLongTimeForecast/>
            <OPWSearchResult hej = {this.state.searchResult}/>
        </React.Fragment>)
    }
}


