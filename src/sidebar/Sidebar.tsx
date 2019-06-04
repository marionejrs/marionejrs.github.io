import './Sidebar.scss'

import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Projects</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </nav>
        );
    }
}