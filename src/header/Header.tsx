import './Header.scss';
import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <h3>Hi, I'm Marione!</h3>
                <div className={'secondary-header'}>
                I develop web and mobile applications
                </div>
                <div className={'catchline'}>
                Do you want to start building your ideas?
                Perhaps I can help.
                </div>
            </header>
        );
    }
}