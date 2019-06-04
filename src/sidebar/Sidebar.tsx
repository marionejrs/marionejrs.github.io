import './Sidebar.scss'

import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <a href={"/"}>Home</a>
                        <svg width="60" height="5">
                            <line x1="0" y1="2" x2="60" y2="2" style={{ stroke: "rgb(255,0,0)", strokeWidth: 1}} />
                        </svg>
                    </li>
                    <li>
                        <a href={"#about"}>About</a>
                        <svg width="60" height="5">
                            <line x1="0" y1="2" x2="60" y2="2" style={{ stroke: "rgb(255,0,0)", strokeWidth: 1}} />
                        </svg>
                    </li>
                    <li>
                        <a href={"#projects"}>Projects</a>
                        <svg width="60" height="5">
                            <line x1="0" y1="2" x2="60" y2="2" style={{ stroke: "rgb(255,0,0)", strokeWidth: 1}} />
                        </svg>
                    </li>
                    <li>
                        <a href={"#contact"}>Contact</a>
                        <svg width="60" height="5">
                            <line x1="0" y1="2" x2="60" y2="2" style={{ stroke: "rgb(255,0,0)", strokeWidth: 1}} />
                        </svg>
                    </li>
                </ul>
            </nav>
        );
    }
}