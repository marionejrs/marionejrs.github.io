import React from 'react';
// import logo from './logo.svg';
// import Particles, { IParticlesParams } from 'react-particles-js'
import './App.scss';
// import particle from './particle-config.json'
// import { GitHub } from 'react-feather';
import ContactMail from './contact/ContactEmail';
import Sidebar from './sidebar/Sidebar';
import MainContainer from './main/MainContainer';
import BackgroundLogo from './background/logo/BackgroundLogo';

const App: React.FC = () => {
  return (
    <div className="container">
      <Sidebar></Sidebar>
      <MainContainer></MainContainer>
      <BackgroundLogo></BackgroundLogo>
    </div>
    
  );
}

export default App;
