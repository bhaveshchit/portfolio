import React, { useEffect, useRef, useState } from 'react';
import './NeuralSkillGraph.css'; // CSS for this component
import Project3D from './Project3D'; // Import the 3D background component

const NeuralSkillGraph = ({ skills, darkMode, onClose }) => {
  const graphRef = useRef(null);
  const canvasRef = useRef(null);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    if (!graphRef.current || !skills.length) return;

    const calculatePositions = () => {
      const containerWidth = graphRef.current.offsetWidth;
      const containerHeight = graphRef.current.offsetHeight;
      const nodeRadius = 70; // A bit larger than half of the node width/height to create some padding
      const positions = [];

      const maxAttempts = 100; // To prevent infinite loops

      skills.forEach(() => {
        let x, y, hasOverlap;
        let attempts = 0;

        do {
          hasOverlap = false;
          x = Math.random() * (containerWidth - nodeRadius * 2) + nodeRadius;
          y = Math.random() * (containerHeight - nodeRadius * 2) + nodeRadius;

          for (const pos of positions) {
            const distance = Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2));
            if (distance < nodeRadius * 2) {
              hasOverlap = true;
              break;
            }
          }
          attempts++;
        } while (hasOverlap && attempts < maxAttempts);

        positions.push({ x, y });
      });

      setPositions(positions);
    };

    // Delay calculation to allow for rendering
    const timeoutId = setTimeout(calculatePositions, 100);

    // Recalculate on window resize
    window.addEventListener('resize', calculatePositions);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', calculatePositions);
    };
  }, [skills]);

  useEffect(() => {
    if (!canvasRef.current || positions.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = graphRef.current.offsetWidth;
    canvas.height = graphRef.current.offsetHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)';
    ctx.lineWidth = 1;

    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        ctx.beginPath();
        ctx.moveTo(positions[i].x, positions[i].y);
        ctx.lineTo(positions[j].x, positions[j].y);
        ctx.stroke();
      }
    }
  }, [positions, darkMode]);

  return (
    <div className="neural-graph-modal-overlay">
      <div className="neural-graph-modal-content">
        <Project3D shape="dodecahedron" color={darkMode ? 0x6366f1 : 0x3b82f6} animationSpeed={0.7} /> {/* Unique 3D background */}
        <button className="neural-graph-close-button" onClick={onClose}>
          &times; {/* Multiplication sign for a cross icon */}
        </button>
        <div ref={graphRef} className="neural-skill-graph">
          <canvas ref={canvasRef} className="neural-graph-canvas" />
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-node"
              style={{
                left: positions[index]?.x,
                top: positions[index]?.y,
                borderColor: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                color: darkMode ? 'var(--dark-text)' : 'var(--light-text)',
                '--animation-delay': `${index * 0.1}s` // Staggered animation
              }}
            >
              <span className="node-icon">{skill.icon}</span>
              <span className="node-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NeuralSkillGraph;
