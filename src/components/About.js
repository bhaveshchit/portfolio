import React, { useState } from 'react';
import './About.css';
import About3D from './About3D';

function About() {
  const [showFullBio, setShowFullBio] = useState(false);
  return (
    <>
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-container">
          <div className="about-profile">
            <div className="profile-picture-container">
              <div className="profile-picture">
                <About3D />
              </div>
            </div>
            <div className="profile-social-links">
              <a href="https://github.com/bhaveshchit" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/bhavesh-chittora-04634823a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="about-content">
            <h3>Software Developer & Tech Architect</h3>
            <p>
              I'm a developer who transforms complex problems into elegant digital solutions. With 3+ years of hands-on experience, I specialize in crafting robust APIs, building scalable backend architectures, and designing lightning-fast, intuitive web experiences.
            </p>
            <div className="about-highlights">
              <h4>Things I Love:</h4>
              <ul>
                <li>Building scalable, production-ready applications</li>
                <li>Creating intuitive user experiences</li>
                <li>Solving complex architectural challenges</li>
                <li>Exploring new technologies and best practices</li>
              </ul>
            </div>
            <button 
              className="read-more-btn"
              onClick={() => setShowFullBio(true)}
            >
              Read My Full Story →
            </button>
          </div>
        </div>
      </section>

      {/* About Modal Popup (retains full bio) */}
      {showFullBio && (
        <div className="modal-overlay" onClick={() => setShowFullBio(false)}>
          <div className="modal-glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowFullBio(false)}>✕</button>
            <h2 className="modal-title">My Story</h2>
            <div className="modal-content">
              <h3>Software Developer & Tech Architect</h3>
              <p>
                I'm a developer who transforms complex problems into elegant digital solutions. With 3+ years of hands-on experience in software engineering and data systems, I specialize in crafting robust APIs, building scalable backend architectures, and designing lightning-fast, intuitive web experiences. My tech stack spans React, Node.js, MongoDB, AWS, and everything in between.
              </p>
              <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>Philosophy</h3>
              <p>
                What drives me is the intersection of engineering excellence and beautiful design. I don't just write code—I architect experiences. Every line I write is purposeful, every design decision intentional. I believe in building applications that are not only powerful under the hood but also delightful on the surface. Clean architecture and minimal UI/UX are my obsessions.
              </p>
              <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>Beyond Code</h3>
              <p>
               When I'm not coding, you'll find me exploring new worlds through online gaming or discovering hidden gems across the globe through travel. These adventures fuel my creativity and bring fresh perspectives to my development work—every new place I visit, every game world I explore, teaches me something new about problem-solving and human-centered design.
              </p>
              <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>What I Love</h3>
              <ul>
                <li>Building scalable, production-ready applications</li>
                <li>Creating intuitive user experiences with modern technologies</li>
                <li>Solving complex architectural challenges</li>
                <li>Mentoring and collaborating with talented teams</li>
                <li>Exploring new technologies and best practices</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
