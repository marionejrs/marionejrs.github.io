import React from 'react';
import logo from './logo.svg';
import Particles, { IParticlesParams } from 'react-particles-js'
import './App.css';
import particle from './particle-config.json'
import { GitHub } from 'react-feather';

const App: React.FC = () => {
  let config : IParticlesParams = particle as IParticlesParams;
  return (
    <main>
      <header>
          <p>Hello there, I'm JR!</p>
      </header>
      <footer>
          <a href="https://github.com/marionejrs" rel={"noopneer noreferrer"} target="_blank">
              <GitHub size={50}/>
          </a>
      </footer>
      <Particles className={"particles-js"} params={config}></Particles>
    </main>
  );
}

export default App;
