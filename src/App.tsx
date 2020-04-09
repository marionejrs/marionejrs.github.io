import React from 'react';
import ContactMail from './contact/ContactEmail';
import Sidebar from './sidebar/Sidebar';
import MainContainer from './main/MainContainer';
import BackgroundLogo from './background/logo/BackgroundLogo';
import BackgroundEffect from './background/effect/BackgroundEffect';
import MenuTrigger from "./menu/trigger/MenuTrigger";
import './App.scss';
import { HashRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
          <section className="top-content">
            <ContactMail email="marione.semilla@gmail.com"></ContactMail>
          </section>
          <section className="main-content">
            <Sidebar></Sidebar>
            <MainContainer></MainContainer>
          </section>
          <BackgroundEffect></BackgroundEffect>
      </div>
    </Router>
    
  );
}

export default App;
