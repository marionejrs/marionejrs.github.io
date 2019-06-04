import './Sidebar.scss'

import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        );
    }
}