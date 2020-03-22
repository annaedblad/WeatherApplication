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
            isLoaded: false,
            forecast: []
        };
    }

    fetchData = () => {
        if (this.state.isLoaded == false) {

            fetch('http://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=acdedab2a2774a098f6719ad2d24c753')
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
        this.state.forecast= "";
        const url = "http://api.openweathermap.org/data/2.5/forecast?q=" + searchvalue + "&appid=acdedab2a2774a098f6719ad2d24c753";
        fetch(url)
            .then(answer => answer.json())
            .then(dataResult => {

                this.setState({ searchResult: dataResult })
            });
    }

    fetchForecast = () => {
        const url = "http://api.openweathermap.org/data/2.5/forecast?q=stockholm&appid=acdedab2a2774a098f6719ad2d24c753";
        fetch(url)
            .then(answer => answer.json())
            .then(dataResult => {

                this.setState({ forecast: dataResult })
            });
    }

    render = () => {
        { this.fetchData() }
        console.log(this.state.isLoaded);

        {
            if (this.state.isLoaded == false) {
                this.fetchForecast()
            }
        }
        return (<React.Fragment>
            <OPWStockholmWeather resultData={this.state.result} />
            <OPWSearch search={this.search} />
            <OPWLongTimeForecast hejsan={this.state.forecast} />
            <OPWSearchResult hej={this.state.searchResult} />
        </React.Fragment>)
    }
}


