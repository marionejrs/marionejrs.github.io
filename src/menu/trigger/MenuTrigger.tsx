import './MenuTrigger.scss';
import React, { Component } from "react";
import MenuTriggerProps from "./MenuTriggerProps";

export default class MenuTrigger extends Component<MenuTriggerProps> {
    render() {
        let { size } = this.props;
        let divider = size / 5;
        return (
            <div className="menu-trigger-container">
                <svg width={size} height={size} className="menu-trigger">
                    <rect x="0" y="0" width={size} height={size/10} style={{ fill : "#fff" }}/>
                    <rect x="0" y={divider * 2} width={size} height={size/10} style={{ fill : "#fff" }}/>
                    <rect x="0" y={divider * 4} width={size} height={size/10} style={{ fill : "#fff" }}/>
                </svg>
            </div>
        );
    }
}