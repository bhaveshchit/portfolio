import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import BackgroundMusic from './components/BackgroundMusic';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import CursorBlast from './components/CursorBlast';
import CustomCursor from './components/CustomCursor';
import FloatingCVButton from './components/FloatingCVButton';
import GlobalSpiderWeb from './components/GlobalSpiderWeb';
import Loader from './components/Loader';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`} style={{ position: 'relative', minHeight: '100vh' }}>
      <GlobalSpiderWeb darkMode={darkMode} />
      <BackgroundMusic />
      <CustomCursor />
      <CursorBlast />
      <div style={{ position: 'relative', zIndex: 1 }}>
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
      <FloatingCVButton />
    </div>
  );
}

export default App;
