import React from 'react';
import ContactMail from './contact/ContactEmail';
import Sidebar from './sidebar/Sidebar';
import MainContainer from './main/MainContainer';
import BackgroundEffect from './background/effect/BackgroundEffect';
import './App.scss';
import { HashRouter as Router } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

const App: React.FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 719px)' });

  return (
    <Router>
      <div className="container">
          {!isTabletOrMobile && <section className="top-content">
            <ContactMail email="marione.semilla@gmail.com"></ContactMail>
          </section>}
          <section className={isTabletOrMobile ? "main-content-mobile" : "main-content"}>
            {!isTabletOrMobile && <Sidebar></Sidebar>}
            <MainContainer></MainContainer>
            {isTabletOrMobile && <Sidebar></Sidebar>}
          </section>
          <BackgroundEffect></BackgroundEffect>
      </div>
    </Router>
    
  );
}

export default App;
