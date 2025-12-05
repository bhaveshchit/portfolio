import React, { useEffect, useRef, useState } from 'react';
import './NeuralSkillGraph.css'; // CSS for this component

const NeuralSkillGraph = ({ skills, darkMode }) => {
  const graphRef = useRef(null);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    if (!graphRef.current || !skills.length) return;

    const containerWidth = graphRef.current.offsetWidth;
    const containerHeight = graphRef.current.offsetHeight;
    const radius = Math.min(containerWidth, containerHeight) / 3; // Radius for circular arrangement

    const newPositions = skills.map((skill, index) => {
      const angle = (index / skills.length) * Math.PI * 2;
      const x = radius * Math.cos(angle) + containerWidth / 2;
      const y = radius * Math.sin(angle) + containerHeight / 2;
      return { x, y };
    });
    setPositions(newPositions);
  }, [skills]);

  return (
    <div ref={graphRef} className="neural-skill-graph">
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
            animationDelay: `${index * 0.1}s` // Staggered animation
          }}
        >
          <span className="node-icon">{skill.icon}</span>
          <span className="node-name">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default NeuralSkillGraph;
