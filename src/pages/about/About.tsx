import React, { FC, CSSProperties } from "react";
import { Link } from "react-router-dom";
import './About.scss';
import { useMediaQuery } from 'react-responsive';
import ExperienceBox from "../../components/ExperienceBox";

const About : FC = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 719px)' });
    let style : CSSProperties = isTabletOrMobile ? {
        width: '300px',
        textAlign: 'justify'
    } : null;

    return (
        <div className="main-page about-page">
            <div className="main-description about-column">
                <div className="main-title">About Me</div>
                <p style={style}>
                    I am Marione Semilla but you can call me JR.<br/>
                    <br/>
                    I am a <span className="bold">React Software Engineer</span> based in Metro Manila, Philippines 
                    specializing in <span className="bold">Web and Mobile Development</span>.
                    I love learning new things, travel, history, Japanese culture and wholesome <em>memes</em>.<br/>
                    <br/>
                    I am currently working as a <span className="bold">Mobile Application Developer</span> under Ahsay Limited
                    for the past 10 months. I've worked for two other companies with an overall <em>six years</em> in the industry.
                    I started out as a Java developer for three years but transitioned to web development in mid-2018.<br/>
                    <br/>
                    I started fiddling with React since 2015 and I've taught React. However, my first
                    real work experience was in late-2018 when was given a project in React Native.<br/>
                    <br/>
                    On my spare time, I mostly watch Netflix, occassionally graphic design,
                    implementing my pet projects and whatever floats my boat really.
                    I also cook and I am open to learning baking in the future.<br/>
                    <br/>
                    <em>You might be wondering what I can bring to the table?</em>
                    I am quick learner and adaptable to any situation and I have a detailed and 
                    organized approach in handling problems. I maintain my code clean and will 
                    follow stringent coding standards. If you need someone like me, feel free to 
                    <Link to="/contact" className="description-link">contact</Link> me any time.<br/>
                    <br/>
                    <em>Where am I headed?</em><br/>
                    I am eventually working my way into becoming a <span className="bold">Software Architect</span>.<br/>
                </p>
            </div>
            {!isTabletOrMobile && <div className="main-description about-column">
                <div className="main-title">Experience</div>
                <div className="experience-rows">
                    <ExperienceBox
                        company={"Ahsay Systems Corporation Limited"}
                        logo={"/company/ahsay.png"}
                        position={"Mobile Application Developer"}
                        yearsWorked={"June 2019 - "}></ExperienceBox>
                    <ExperienceBox
                        company={"PCCW Solutions"}
                        logo={"/company/pccw.jpg"}
                        position={"Solutions Developer"}
                        yearsWorked={"May 2018 - May 2019"}></ExperienceBox>
                    <ExperienceBox
                        company={"Nokia Networks"}
                        logo={"/company/nokia.png"}
                        position={"R&D Engineer II"}
                        yearsWorked={"June 2014 - May 2018"}></ExperienceBox>
                </div>
            </div>}
        </div>
    );
}
export default About;