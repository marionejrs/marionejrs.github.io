import React, { FC } from "react";
import './Home.scss';

const Home : FC = () => {
    return (
        <div className="main-page home-page">
            <div className="home">
                <div className="main-title">I'm Marione and I love to React.</div>
                <div className="main-subtitle">Do you have a problem that needs solving? Perhaps I can help.</div>
            </div>
        </div>
    );
}
export default Home;