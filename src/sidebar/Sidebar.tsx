import './Sidebar.scss'
import React, { FC, CSSProperties } from 'react';
import SidebarItem from './item/SidebarItem';
import { useMediaQuery } from 'react-responsive';

const Sidebar : FC = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 719px)' });
    let navStyle : CSSProperties = isTabletOrMobile ? {
        alignItems: 'flex-end',
        marginTop: 0
    } : null;
    
    let listStyle : CSSProperties = isTabletOrMobile ? {
        flexDirection: 'row',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '100%',
        margin: 0
    } : null;

    return (
        <nav style={navStyle}>
            <ul style={listStyle}>
                <SidebarItem title="Home" link=""></SidebarItem>
                <SidebarItem title="About" link="about"></SidebarItem>
                <SidebarItem title="Experience" link="experience"></SidebarItem>
                {/* <SidebarItem title="Skills" link="skills"></SidebarItem>
                <SidebarItem title="Projects" link="projects"></SidebarItem> */}
                <SidebarItem title="Contact" link="contact"></SidebarItem>
            </ul>
        </nav>
    );
}
export default Sidebar;