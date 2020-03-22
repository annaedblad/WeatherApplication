import React, { Component } from 'react';
import OPWContainer from './OPWContainer';

export default class OPWSearchResult extends React.Component {


    render() {
        let resultText = this.props.hej;
        let city = this.props.hej.city;

        if (resultText.length == 0) {
            
            return null;
        }

        else {
            let h = new Date();
            let cityName = city.name;
            let counter = 0;
                let icon = "";
            let list = resultText.list.map(weather => {
                console.log(icon);
                console.log(weather.weather);
                for (var item of weather.weather) {
                    icon = item.icon;
                }
                let url = "http://openweathermap.org/img/wn/" + icon +"@2x.png";
                console.log(url);

                counter++;
                if (counter % 2 == 1) {
                let time = weather.dt;
                let convertTime = new Date(0);
                convertTime.setUTCSeconds(time);

                    if(time < ((h.getTime() / 1000) + 388800))
                    {
                        return (<tr>
                            <td>{convertTime.toLocaleString()}</td>
                           <td>{Math.round(weather.main.temp_max - 273.15)} °C</td>
                           <td>{Math.round(weather.main.temp_min - 273.15)} °C</td>
                           <td><img className="test" src={url}></img></td>
                       </tr>)
                    }
                }
                

            });

            return (
                <div>
                    <p className="currentWeather">{cityName}</p>
                    <table className="tableStyle"><th>TID</th><th>MAXTEMPERATUR</th><th>MINTEMPERATUR</th><th>VARSEL</th>{list}</table>
                </div>)
        }

    }

}
