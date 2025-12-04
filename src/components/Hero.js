import React from 'react';
import './Hero.css';
import Project3D from './Project3D';

function Hero() {
  return (
    <section className="hero section">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="gradient-text">Bhavesh</span>
          <br />
          Software Developer & Designer
        </h1>
        <p className="hero-subtitle">
          I create beautiful, responsive, and performant web applications with modern
          technologies. Passionate about clean code and user experience.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
        <div className="social-links">
          <a href="https://github.com/bhaveshchit" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
            𝐺
          </a>
          <a href="https://www.linkedin.com/in/bhavesh-chittora-04634823a/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
            𝐿
          </a>
          <a href="mailto:chittorabhavesh24@gmail.com" className="social-link" title="Email">
            ✉
          </a>
        </div>
      </div>
      <div className="hero-canvas">
        <Project3D shape="icosahedron" color={0x6366f1} animationSpeed={1} />
      </div>
    </section>
  );
}

export default Hero;
