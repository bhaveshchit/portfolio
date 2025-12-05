import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function SkillCard3DBackground({ darkMode }) {
  const mountRef = useRef(null);
  const meshRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Geometry and Material
    const geometry = new THREE.OctahedronGeometry(1.5, 0); // A subtle, abstract shape
    const material = new THREE.MeshPhongMaterial({
      color: darkMode ? 0xffffff : 0x000000, // Adjust color based on dark mode
      transparent: true,
      opacity: 0.1, // Very subtle
      shininess: 50,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    meshRef.current = mesh;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.001;
        meshRef.current.rotation.y += 0.002;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Handle Resize
    const handleResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [darkMode]); // Include darkMode in dependency array

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.material.color.setHex(darkMode ? 0xffffff : 0x000000);
    }
  }, [darkMode]);

  return (
    <div ref={mountRef} style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1, // Place behind the card content
      pointerEvents: 'none', // Allow interaction with elements above
      overflow: 'hidden',
    }} />
  );
}

export default SkillCard3DBackground;
