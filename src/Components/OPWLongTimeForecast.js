import React, {Component} from 'react';

export default class OPWLongTimeForecast extends React.Component{
    render() {

        let resultText = this.props.hejsan;

        let city = this.props.hejsan.city;

        if (resultText.length == 0 || resultText == null) {
            return null;
        }

        else {
            let h = new Date();
            let cityName = city.name;
            let counter = 0;
                let icon = "";
            let list = resultText.list.map(weather => {
                for (var item of weather.weather) {
                    icon = item.icon;
                }
                let url = "http://openweathermap.org/img/wn/" + icon +"@2x.png";

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
        // return(
        // <div className="centeredDiv">
        //     <h1 className="longTermText">Långtidsprognos 5 dagar</h1>
        // </div>
        // );

    }
}
