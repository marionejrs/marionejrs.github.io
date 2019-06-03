import React from 'react';
// import logo from './logo.svg';
// import Particles, { IParticlesParams } from 'react-particles-js'
import './App.scss';
// import particle from './particle-config.json'
// import { GitHub } from 'react-feather';
import ContactMail from './contact/ContactEmail';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';
import BackgroundLogo from './background/logo/BackgroundLogo';

const App: React.FC = () => {
  return (
    <main>
      <ContactMail email={'marionejr.semilla@gmail.com'}></ContactMail>
      <Header></Header>
      <Sidebar></Sidebar>
      <BackgroundLogo></BackgroundLogo>
    </main>
  );
}

export default App;
