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
        <Section setBackground={setBackground} backgroundName="celestial">
          <Hero />
        </Section>
        <Section setBackground={setBackground} backgroundName="game1">
          <h1>Game 1</h1>
        </Section>
        <Section setBackground={setBackground} backgroundName="game2">
          <h1>Game 2</h1>
        </Section>
        <Section setBackground={setBackground} backgroundName="space">
          <h1>Space</h1>
        </Section>
      </main>
    </div>
  );
}

export default App;