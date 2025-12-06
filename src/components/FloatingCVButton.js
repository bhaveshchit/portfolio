import React from 'react';
import './FloatingCVButton.css';

const FloatingCVButton = () => {
  return (
    <div className="floating-cv-button">
      <a href="/cv.pdf" download="Bhavesh_Chittora_CV.pdf" className="btn btn-primary">
        Download CV
      </a>
    </div>
  );
};

export default FloatingCVButton;
