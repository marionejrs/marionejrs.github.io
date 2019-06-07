import "./SidebarItem.scss";
import React, { Component } from "react";
import SidebarItemProps from "./SidebarItemProps";


export default class SidebarItem extends Component<SidebarItemProps> {
    render() {
        let { title, link } = this.props;
        return (
            <li>
                <a href={link}>{title}</a>
                <svg width="60" height="5" className="sidebar-item-bottom-border">
                    <line x1="0" y1="2" x2="60" y2="2" style={{ stroke: "#ffffff", strokeWidth: 1}} />
                </svg>
            </li>
        );
    }
}