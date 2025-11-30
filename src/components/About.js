import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="section" data-scroll-animation="fadeInUp">
      <h2 className="section-title" data-scroll-animation="fadeInUp">About Me</h2>
      <div className="container">
        <div className="about">
          <div className="about-image">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="rotating-earth" style={{
              width: '100%',
              height: '100%',
              filter: 'drop-shadow(0 20px 40px rgba(99, 102, 241, 0.3))',
              background: 'transparent'
            }}>
              <defs>
                {/* More realistic ocean gradient */}
                <radialGradient id="earthGradient" cx="35%" cy="35%">
                  <stop offset="0%" style={{ stopColor: '#5dade2', stopOpacity: 1 }} />
                  <stop offset="40%" style={{ stopColor: '#2874a6', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#154360', stopOpacity: 1 }} />
                </radialGradient>
                
                {/* Realistic land gradient */}
                <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#27ae60', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#1e8449', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#145a32', stopOpacity: 1 }} />
                </linearGradient>

                <filter id="earthShadow">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                  <feOffset dx="0" dy="4" result="offsetblur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.4" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Atmosphere effect */}
                <filter id="atmosphere">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                </filter>
              </defs>

              {/* Earth base with realistic shading */}
              <g className="earth-rotate">
                {/* Ocean with shading */}
                <circle cx="100" cy="100" r="60" fill="url(#earthGradient)" filter="url(#earthShadow)" />

                {/* Continents - Detailed and realistic */}
                
                {/* North America */}
                <path d="M 65 75 Q 68 72 75 73 Q 82 74 85 80 L 88 90 Q 85 95 75 98 Q 68 95 65 88 Z" fill="url(#landGradient)" opacity="0.96" />
                
                {/* Canada */}
                <path d="M 70 65 Q 78 62 82 68 Q 80 72 75 70 Z" fill="url(#landGradient)" opacity="0.92" />
                
                {/* Central America & Mexico */}
                <path d="M 75 88 Q 78 92 78 100 Q 75 105 72 102 Z" fill="url(#landGradient)" opacity="0.94" />
                
                {/* South America */}
                <path d="M 72 102 Q 75 115 70 128 Q 67 125 68 112 Z" fill="url(#landGradient)" opacity="0.95" />
                
                {/* Greenland */}
                <path d="M 88 72 Q 92 70 94 76 Q 91 80 88 78 Z" fill="url(#landGradient)" opacity="0.91" />
                
                {/* Iceland */}
                <circle cx="92" cy="75" r="1.5" fill="url(#landGradient)" opacity="0.85" />
                
                {/* British Isles */}
                <path d="M 102 82 Q 104 80 105 85 Q 103 87 102 85 Z" fill="url(#landGradient)" opacity="0.90" />
                
                {/* Europe */}
                <path d="M 103 78 Q 112 76 115 88 Q 110 95 103 92 Z" fill="url(#landGradient)" opacity="0.95" />
                
                {/* Scandinavia */}
                <path d="M 108 70 Q 112 68 114 75 Q 110 78 108 75 Z" fill="url(#landGradient)" opacity="0.92" />
                
                {/* Russia/Asia */}
                <path d="M 115 75 Q 135 78 138 92 L 132 105 Q 120 95 115 88 Z" fill="url(#landGradient)" opacity="0.94" />
                
                {/* Middle East */}
                <path d="M 115 88 Q 122 90 125 100 L 120 102 Z" fill="url(#landGradient)" opacity="0.91" />
                
                {/* Africa */}
                <path d="M 110 92 Q 120 95 122 118 L 118 128 Q 110 125 110 105 Z" fill="url(#landGradient)" opacity="0.96" />
                
                {/* Madagascar */}
                <path d="M 125 118 Q 128 120 127 125 L 123 123 Z" fill="url(#landGradient)" opacity="0.88" />
                
                {/* India */}
                <path d="M 125 95 Q 130 98 130 108 L 125 110 Z" fill="url(#landGradient)" opacity="0.93" />
                
                {/* Southeast Asia */}
                <path d="M 130 100 Q 135 105 133 115 L 128 112 Z" fill="url(#landGradient)" opacity="0.92" />
                
                {/* Japan */}
                <path d="M 138 88 Q 140 92 138 98 Q 136 95 138 90 Z" fill="url(#landGradient)" opacity="0.89" />
                
                {/* Australia */}
                <path d="M 130 118 Q 138 122 137 132 L 132 130 Z" fill="url(#landGradient)" opacity="0.92" />
                
                {/* New Zealand */}
                <circle cx="145" cy="132" r="1.2" fill="url(#landGradient)" opacity="0.85" />

                {/* Island chains - Various small islands */}
                <circle cx="100" cy="115" r="1" fill="url(#landGradient)" opacity="0.80" />
                <circle cx="105" cy="125" r="0.8" fill="url(#landGradient)" opacity="0.80" />
                <circle cx="115" cy="120" r="0.8" fill="url(#landGradient)" opacity="0.80" />
                <circle cx="92" cy="108" r="0.9" fill="url(#landGradient)" opacity="0.80" />
                <circle cx="140" cy="110" r="1" fill="url(#landGradient)" opacity="0.80" />
              </g>

              {/* Atmospheric glow layer */}
              <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(93, 173, 226, 0.3)" strokeWidth="1.5" opacity="0.7" />
              
              {/* Subtle clouds */}
              <g className="clouds-layer" opacity="0.25" filter="url(#atmosphere)">
                <ellipse cx="75" cy="92" rx="6" ry="3" fill="#fff" />
                <ellipse cx="120" cy="105" rx="7" ry="4" fill="#fff" />
                <ellipse cx="95" cy="80" rx="5" ry="2.5" fill="#fff" />
                <ellipse cx="110" cy="115" rx="6" ry="3" fill="#fff" />
              </g>

              {/* Highlight for 3D effect */}
              <circle cx="85" cy="85" r="18" fill="rgba(255, 255, 255, 0.15)" filter="url(#atmosphere)" />
            </svg>
          </div>
          <div className="about-content">
            <h3>Software Developer & Tech Architect</h3>
            <p>
              I'm a developer who transforms complex problems into elegant digital solutions. With 2+ years of hands-on experience in software engineering and data systems, I specialize in crafting robust APIs, building scalable backend architectures, and designing lightning-fast, intuitive web experiences. My tech stack spans React, Node.js, MongoDB, AWS, and everything in between.
            </p>
            <p>
              What drives me is the intersection of engineering excellence and beautiful design. I don't just write code—I architect experiences. Every line I write is purposeful, every design decision intentional. I believe in building applications that are not only powerful under the hood but also delightful on the surface. Clean architecture and minimal UI/UX are my obsessions.
            </p>
            <p>
             When I'm not coding, you'll find me exploring new worlds through online gaming or discovering hidden gems across the globe through travel. These adventures fuel my creativity and bring fresh perspectives to my development work—every new place I visit, every game world I explore, teaches me something new about problem-solving and human-centered design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
