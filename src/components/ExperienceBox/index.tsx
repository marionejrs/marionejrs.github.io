import React, { FC } from "react";
import './ExperienceBox.scss';
import { useMediaQuery } from "react-responsive";

export interface Experience {
    company: string,
    yearsWorked: string
    position: string,
    logo: any
}

const ExperienceBox : FC<Experience> = (experience : Experience) => {
    let { company, yearsWorked, position, logo} = experience;
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 719px)' });

    return (
        <div className={isTabletOrMobile ? "experience-box-mobile" : "experience-box"}>
            <div className="company-logo">
                <img src={logo} alt={company}></img>
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