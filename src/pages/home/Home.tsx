import React, { FC, CSSProperties } from "react";
import './Home.scss';
import { useMediaQuery } from "react-responsive";

const Home : FC = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 719px)' });
    const homeStyle : CSSProperties = isTabletOrMobile ? {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    } : null

    return (
        <div className="main-page home-page">
            <div className="home" style={homeStyle}>
                <div className="main-title">I'm Marione and I love to React.</div>
                <div className={ isTabletOrMobile ? "main-subtitle-mobile" : "main-subtitle"}>Do you have a problem that needs solving? Perhaps I can help.</div>
            </div>
        </div>
    );
}
export default Home;