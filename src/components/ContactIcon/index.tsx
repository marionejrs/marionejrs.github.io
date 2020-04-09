import React, { FC, ReactNode } from "react";
import './ContactIcon.scss';

export interface ContactIconProps {
    iconComponent : ReactNode,
    link: string
}

const ContactIcon : FC<ContactIconProps> = (props : ContactIconProps) => {
    let { iconComponent, link } = props;

    return (
        <a className="contact-icon" href={link} target="_blank" rel="noopener noreferrer">
            {iconComponent}
        </a>
    );
}

export default ContactIcon;