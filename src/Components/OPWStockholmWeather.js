import React, {Component} from 'react';

export default class OPWStockholmWeather extends React.Component{
    render()
    {
        let text = this.props.resultData;
        let time = this.props.resultData.dt;
        let convertTime = new Date(0);
        convertTime.setUTCSeconds(time);

        let temperature = this.props.resultData.main;

        if(text.length == 0) {
            return null;
        }

        else {
        
        let celciusTemperature = Math.round(temperature.temp-273.15);
            return(
                <React.Fragment>
                    <p className="currentWeather">Vädret i {text.name} just nu</p>
                    <p className="currentWeather"> {convertTime.toLocaleString()} </p>
                    <p className="currentTemperature"> {celciusTemperature} °C </p>
                </React.Fragment>
            )
        }

      
       
    }

}

