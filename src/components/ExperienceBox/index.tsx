import React, { FC } from "react";
import './ExperienceBox.scss';

export interface Experience {
    company: string,
    yearsWorked: string
    position: string,
    logo: any
}

const ExperienceBox : FC<Experience> = (experience : Experience) => {
    let { company, yearsWorked, position, logo} = experience;

    return (
        <div className="experience-box">
            <div className="company-logo">
                <img src={logo}></img>
            </div>
            <div className="description">
                <div className="company">{company}</div>
                <div className="years-worked">{yearsWorked}</div>
                <div className="position">{position}</div>
            </div>
        </div>
    );
}

export default ExperienceBox;