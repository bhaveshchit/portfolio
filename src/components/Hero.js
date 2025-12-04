import React from 'react';
import './Hero.css';
import useTypewriter from '../hooks/useTypewriter';

function Hero() {
  const nameText = useTypewriter("Hi, I'm Bhavesh", 100);
  const titleText = useTypewriter("Software Developer & Designer", 80);
  const subtitleText = useTypewriter("I create beautiful, responsive, and performant web applications with modern technologies. Passionate about clean code and user experience.", 50);

  return (
    <section className="hero section">
      <div className="hero-content">
        <h1>
          {nameText.split("Bhavesh")[0]}
          <span className="gradient-text">Bhavesh</span>
          {nameText.split("Bhavesh")[1]}
          <br />
          {titleText}
        </h1>
        <p className="hero-subtitle">
          {subtitleText}
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
        <img src="/images/your-image.png" alt="Bhavesh Chittora" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
