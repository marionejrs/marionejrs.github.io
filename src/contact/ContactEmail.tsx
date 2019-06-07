import React, { Component } from 'react';
import './ContactEmail.scss';
import ContactEmailProps from './ContactEmailProps';

export default class ContactEmail extends Component<ContactEmailProps> {
    render() {
        return (
            <div className={'contact-container'}>
                <a href={`mailto:${this.props.email}`}>{this.props.email}</a>
                <svg width="150" height="5" className="item-bottom-border">
                    <line x1="0" y1="2" x2="150" y2="2" style={{ stroke: "#ffffff", strokeWidth: 1}} />
                </svg>
            </div>
        );
    }
}