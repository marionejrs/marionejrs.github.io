import React, { FC } from "react";
import ExperienceBox from "../../components/ExperienceBox";

const Experience : FC = () => {
    return (
        <div className="main-page">
            <div className="main-title">Experience</div>
            <div className="main-description">
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
            </div>
        </div>
    );
}
export default Experience;