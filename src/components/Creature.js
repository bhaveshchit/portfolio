import React, { useEffect, useRef } from 'react';
import './Creature.css';

export default function Creature() {
  // Woggly eyes animation
  const leftPupil = useRef(null);
  const rightPupil = useRef(null);

  useEffect(() => {
    let frame;
    function animate() {
      const t = Date.now() / 600;
      const dx = Math.sin(t) * 2;
      const dy = Math.cos(t * 1.3) * 1.5;
      if (leftPupil.current) {
        leftPupil.current.setAttribute('cx', 28 + dx);
        leftPupil.current.setAttribute('cy', 38 + dy);
      }
      if (rightPupil.current) {
        rightPupil.current.setAttribute('cx', 52 + dx * 0.8);
        rightPupil.current.setAttribute('cy', 38 + dy * 0.7);
      }
      frame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="creature-container">
      <svg width="80" height="68" viewBox="0 0 80 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <ellipse cx="40" cy="40" rx="30" ry="20" fill="#7ED957" stroke="#333" strokeWidth="3"/>
        {/* Eyes (white) */}
        <ellipse cx="28" cy="38" rx="6" ry="8" fill="#fff"/>
        <ellipse cx="52" cy="38" rx="6" ry="8" fill="#fff"/>
        {/* Pupils (animated) */}
        <ellipse ref={leftPupil} cx="28" cy="38" rx="2.5" ry="3.5" fill="#333"/>
        <ellipse ref={rightPupil} cx="52" cy="38" rx="2.5" ry="3.5" fill="#333"/>
        {/* Smile with teeth */}
        <path d="M32 50 Q40 58 48 50" stroke="#333" strokeWidth="2.5" fill="none"/>
        {/* Teeth (rectangles) */}
        <rect x="36" y="51" width="3" height="5" rx="1" fill="#fff" stroke="#333" strokeWidth="0.7"/>
        <rect x="41" y="52" width="3" height="4" rx="1" fill="#fff" stroke="#333" strokeWidth="0.7"/>
        <rect x="46" y="51" width="3" height="5" rx="1" fill="#fff" stroke="#333" strokeWidth="0.7"/>
        {/* Shadow */}
        <ellipse cx="40" cy="62" rx="13" ry="3.5" fill="#333" fillOpacity="0.18"/>
        {/* Feet */}
        <rect x="16" y="60" width="7" height="8" rx="3.5" fill="#7ED957" stroke="#333" strokeWidth="1.5"/>
        <rect x="57" y="60" width="7" height="8" rx="3.5" fill="#7ED957" stroke="#333" strokeWidth="1.5"/>
        {/* Feet shadow */}
        <ellipse cx="20" cy="67" rx="2.2" ry="1.5" fill="#333" fillOpacity="0.3"/>
        <ellipse cx="60" cy="67" rx="2.2" ry="1.5" fill="#333" fillOpacity="0.3"/>
      </svg>
    </div>
  );
}
