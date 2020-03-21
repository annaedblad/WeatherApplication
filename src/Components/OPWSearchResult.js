import React, { Component } from 'react';

export default class OPWSearchResult extends React.Component {


    render() {
        let resultText = this.props.hej;

        let currentTime = this.props.hej.dt;
        let convertTime = new Date(0);
        convertTime.setUTCSeconds(currentTime);

        if (resultText.length == 0) {
            return null;
        }
        else {
            return (
                <div>
                    <p>{resultText.name}</p>
                    <p>{convertTime.toLocaleString()}</p>
                </div>)
        }

    }

}