import './Sidebar.scss'

import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        return (
            <aside>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </aside>
        );
    }
}