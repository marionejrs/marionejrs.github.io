import React from 'react';
import logo from './logo.svg';
import Particles, { IParticlesParams } from 'react-particles-js'
import './App.scss';
import particle from './particle-config.json'
import { GitHub } from 'react-feather';
import ContactMail from './contact/ContactEmail';
import Sidebar from './sidebar/Sidebar';

const App: React.FC = () => {
  return (
    <main>
      <ContactMail email={'marionejr.semilla@gmail.com'}></ContactMail>
      <div>
        <h3 style={{ fontSize: '50px' }}>Hi, I'm Marione!</h3>
        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight : 400, fontSize: '25pt', textTransform: 'uppercase' }}>
          I develop web and mobile applications
        </div>
        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '15pt'}}>
        Do you want to start building your ideas?
        Perhaps I can help.
        </div>
      </div>
      <Sidebar></Sidebar>
    </main>
  );
}

export default App;
