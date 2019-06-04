import './MenuTrigger.scss';
import React, { Component } from "react";

export default class MenuTrigger extends Component {
    render() {
        return (
            <div className="menu-trigger-container">
                <svg width="20" height="20" className="menu-trigger">
                    <rect x="0" y="0" width="20" height="2"/>
                    <rect x="0" y="8" width="20" height="2"/>
                    <rect x="0" y="16" width="20" height="2"/>
                </svg>
            </div>
        );
    }
}