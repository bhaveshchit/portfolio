import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './Hero.css';

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const container = canvasRef.current;

    // Create a canvas element and append to the container (renderer needs an actual <canvas>)
    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    container.appendChild(canvas);

    // Scene setup
    const scene = new THREE.Scene();
    const rect = container.getBoundingClientRect();
    const camera = new THREE.PerspectiveCamera(75, rect.width / Math.max(rect.height, 1), 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });

    const setRendererSize = () => {
      const width = container.clientWidth || 600;
      const height = container.clientHeight || 400;
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    setRendererSize();
    camera.position.z = 5;

    // Create 3D Objects - Icosahedron
    const geometry = new THREE.IcosahedronGeometry(2, 4);
    const material = new THREE.MeshPhongMaterial({
      color: 0x6366f1,
      emissive: 0x3b4bd4,
      shininess: 100,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // No more bubbles/rings here; only main mesh remains

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    const pointLight2 = new THREE.PointLight(0x6366f1, 0.8);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    let mounted = true;
    const animate = () => {
      if (!mounted) return;
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.003;
      mesh.rotation.y += 0.005;
      mesh.rotation.z += 0.002;
      mesh.position.x += (mouseX * 2 - mesh.position.x) * 0.05;
      mesh.position.y += (mouseY * 2 - mesh.position.y) * 0.05;
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => setRendererSize();
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      mounted = false;
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      try {
        if (container.contains(canvas)) container.removeChild(canvas);
      } catch (e) {
        // ignore
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

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
      <div className="hero-canvas" ref={canvasRef}></div>
    </section>
  );
}

export default Hero;
