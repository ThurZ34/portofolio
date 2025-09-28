import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/sections/Section';
import './App.css';

function App() {
  const [background, setBackground] = useState('celestial'); // Default background

  const backgroundClasses = {
    celestial: 'celestial-bg',
    game1: 'game1-bg',
    game2: 'game2-bg',
    space: 'space-bg',
  };

  return (
    <div className={`App dynamic-bg ${backgroundClasses[background]}`}>
      <Header />
      <main>
        <Section id="home" setBackground={setBackground} backgroundName="celestial">
          <Hero />
        </Section>
        <Section id="about" setBackground={setBackground} backgroundName="space">
          <h2>About Me</h2>
          <p>A short bio about myself.</p>
        </Section>
        <Section id="projects" setBackground={setBackground} backgroundName="game1">
          <h2>Projects</h2>
          <h1>Game 1</h1>
          <h1>Game 2</h1>
          <h1>Space</h1>
        </Section>
        <Section id="contact" setBackground={setBackground} backgroundName="celestial">
          <h2>Contact Me</h2>
          <p>Contact form or information.</p>
        </Section>
      </main>
    </div>
  );
}

export default App;