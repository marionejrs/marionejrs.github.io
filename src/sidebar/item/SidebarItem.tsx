import "./SidebarItem.scss";
import React, { Component } from "react";
import SidebarItemProps from "./SidebarItemProps";
import {
    Link
  } from "react-router-dom";

export default class SidebarItem extends Component<SidebarItemProps> {
    render() {
        let { title, link } = this.props;
        return (
            <li>
                <Link to={link}>{title}</Link>
                <svg width="60" height="5" className="sidebar-item-bottom-border">
                    <line x1="0" y1="2" x2="60" y2="2" style={{ stroke: "#ffffff", strokeWidth: 1}} />
                </svg>
            </li>
        );
    }
}