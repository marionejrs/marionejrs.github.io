import './Sidebar.scss'
import React, { Component } from 'react';
import SidebarItem from './item/SidebarItem';

export default class Sidebar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <SidebarItem title="Home" link="/"></SidebarItem>
                    <SidebarItem title="About" link="#about"></SidebarItem>
                    <SidebarItem title="Projects" link="#projects"></SidebarItem>
                    <SidebarItem title="Contact" link="#contact"></SidebarItem>
                </ul>
            </nav>
        );
    }
}