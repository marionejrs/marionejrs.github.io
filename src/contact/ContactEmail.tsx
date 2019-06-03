import React, { Component } from 'react';
import './ContactEmail.scss';
import ContactEmailProps from './ContactEmailProps';

export default class ContactEmail extends Component<ContactEmailProps> {
    render() {
        return (
            <div>
                <a href={`mailto:${this.props.email}`}>{this.props.email}</a>
            </div>
        );
    }
}