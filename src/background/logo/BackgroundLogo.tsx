import React, { Component } from 'react';
import logo from './BackgroundLogo.png';

export default class BackgroundLogo extends Component {
    render() {
        return <img className={"background-logo"} src={logo} alt="Logo" />;
    }
}