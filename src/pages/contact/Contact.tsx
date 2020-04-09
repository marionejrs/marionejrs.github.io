import React, { FC } from "react";
import { GitHub, Mail, Linkedin } from 'react-feather';
import "./Contact.scss";
import ContactIcon from "../../components/ContactIcon";

const Contact : FC = () => {
    return (
        <div className="main-page">
            <div className="main-title">Getting in touch</div>
            <div className="main-description">Do you need an idea or an extra hand? Perhaps, I can help. You can contact me on <a className="description-link" href="mailto:marione.semilla@gmail.com">marione.semilla@gmail.com</a>.</div>
            <div className="contact-icons">
                <ContactIcon link={"https://github.com/marionejrs"} iconComponent={<GitHub></GitHub>}></ContactIcon>
                <ContactIcon link={"mailto:marione.semilla@gmail.com"} iconComponent={<Mail></Mail>}></ContactIcon>
                <ContactIcon link={"https://www.linkedin.com/in/marione-semilla-3b42a639/"} iconComponent={<Linkedin></Linkedin>}></ContactIcon>
            </div>
        </div>
    );
}
export default Contact;