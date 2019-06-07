import React from 'react';
// import logo from './logo.svg';
// import Particles, { IParticlesParams } from 'react-particles-js'
// import particle from './particle-config.json'
// import { GitHub } from 'react-feather';
import ContactMail from './contact/ContactEmail';
import Sidebar from './sidebar/Sidebar';
import MainContainer from './main/MainContainer';
import BackgroundLogo from './background/logo/BackgroundLogo';
import BackgroundEffect from './background/effect/BackgroundEffect';
import MenuTrigger from "./menu/trigger/MenuTrigger";
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="container">
      <section className="top-content">
        <ContactMail email="marionejr.semilla@gmail.com"></ContactMail>
      </section>
      <section className="main-content">
        <Sidebar></Sidebar>
        <MainContainer></MainContainer>
        <MenuTrigger size={20}></MenuTrigger>
      </section>
      <BackgroundLogo></BackgroundLogo>
      <BackgroundEffect></BackgroundEffect>
    </div>
    
  );
}

export default App;
