import "./SidebarItem.scss";
import React, { FC, CSSProperties } from "react";
import SidebarItemProps from "./SidebarItemProps";
import {
    Link
  } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const SidebarItem : FC<SidebarItemProps> = (props : SidebarItemProps) => {
    let { title, link } = props;
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 719px)' });
    const sidebarItemStyle : CSSProperties = isTabletOrMobile ? {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
        alignItems: 'center'
    }: null;
    return (
        <li style={sidebarItemStyle}>
            <Link to={link}>{title}</Link>
            <svg width="60" height="5" className="sidebar-item-bottom-border">
                <line x1="0" y1="2" x2="60" y2="2" style={{ stroke: "#ffffff", strokeWidth: 1}} />
            </svg>
        </li>
    );
}
export default SidebarItem;