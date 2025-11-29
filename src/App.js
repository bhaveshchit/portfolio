import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Background3D from './components/Background3D';
import ShootingStars from './components/ShootingStars';
import BackgroundMusic from './components/BackgroundMusic';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Creature from './components/Creature';
import CursorBlast from './components/CursorBlast';
import CustomCursor from './components/CustomCursor';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`} style={{ position: 'relative', minHeight: '100vh' }}>
  <ShootingStars active={darkMode} />
  <Background3D />
  <BackgroundMusic />
  <CustomCursor />
  <CursorBlast />
  <Creature />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <footer className="footer">
          <p>&copy; 2025 Bhavesh. Built with ❤️</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
