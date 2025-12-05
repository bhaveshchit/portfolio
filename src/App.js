import React, { useState, useEffect } from 'react';
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
import CursorBlast from './components/CursorBlast';
import CustomCursor from './components/CustomCursor';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`} style={{ position: 'relative', minHeight: '100vh' }}>
  <ShootingStars active={darkMode} />
  <Background3D darkMode={darkMode} />
  <BackgroundMusic />
  <CustomCursor />
  <CursorBlast />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <About />
        <Skills darkMode={darkMode} />
        <Projects />
        <Experience />
        <Contact />
        <footer className="footer">
          <p>&copy; 2025 Bhavesh. Portfolio Website</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
