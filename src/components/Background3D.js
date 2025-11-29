import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Background3D() {
  const bgRef = useRef(null);

  useEffect(() => {
    if (!bgRef.current) return;
    const container = bgRef.current;
    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    canvas.style.position = 'absolute';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.pointerEvents = 'none';
    container.appendChild(canvas);

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 7;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // transparent

    function setRendererSize() {
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }
    setRendererSize();

    // Bubbles
    const shapes = [];
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    for (let i = 0; i < 12; i++) {
      const mat = new THREE.MeshPhongMaterial({ color: 0xffffff });
      mat.color.setHSL(i / 12, 0.7, 0.7);
      mat.transparent = true;
      mat.opacity = 0.7;
      const s = new THREE.Mesh(sphereGeometry, mat);
      s.position.set(
        Math.sin((i / 12) * Math.PI * 2) * (3 + Math.random() * 5),
        Math.cos((i / 12) * Math.PI * 2) * (2 + Math.random() * 4),
        -2 + Math.random() * 4
      );
      scene.add(s);
      shapes.push({ mesh: s, type: 'bubble', phase: Math.random() * Math.PI * 2 });
    }
    // Rings
    const torusGeometry = new THREE.TorusGeometry(0.35, 0.12, 16, 100);
    for (let i = 0; i < 6; i++) {
      const t = new THREE.Mesh(
        torusGeometry,
        new THREE.MeshPhongMaterial({ color: 0xf59e0b, emissive: 0x7c4a03, shininess: 80, transparent: true, opacity: 0.5 })
      );
      t.position.set(
        Math.cos((i / 6) * Math.PI * 2) * (4 + Math.random() * 3),
        Math.sin((i / 6) * Math.PI * 2) * (2 + Math.random() * 3),
        -1.5 + Math.random() * 4
      );
      t.rotation.x = Math.random() * Math.PI;
      t.rotation.y = Math.random() * Math.PI;
      scene.add(t);
      shapes.push({ mesh: t, type: 'ring', phase: Math.random() * Math.PI * 2 });
    }
    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 10);
    scene.add(pointLight);
    // Animate
    let mounted = true;
    const animate = () => {
      if (!mounted) return;
      requestAnimationFrame(animate);
      const t = Date.now() * 0.001;
      shapes.forEach((obj, i) => {
        if (obj.type === 'bubble') {
          obj.mesh.position.y += Math.sin(t * 1.2 + obj.phase + i) * 0.012;
          obj.mesh.position.x += Math.cos(t * 0.8 + obj.phase + i) * 0.008;
          obj.mesh.material.opacity = 0.6 + 0.2 * Math.sin(t + obj.phase);
        } else if (obj.type === 'ring') {
          obj.mesh.rotation.x += 0.01;
          obj.mesh.rotation.y += 0.012;
          obj.mesh.position.y += Math.sin(t * 0.7 + obj.phase + i) * 0.01;
        }
      });
      renderer.render(scene, camera);
    };
    animate();
    // Resize
    const handleResize = () => setRendererSize();
    window.addEventListener('resize', handleResize);
    // Cleanup
    return () => {
      mounted = false;
      window.removeEventListener('resize', handleResize);
      try { if (container.contains(canvas)) container.removeChild(canvas); } catch (e) {}
      renderer.dispose();
      sphereGeometry.dispose();
      torusGeometry.dispose();
    };
  }, []);

  return (
    <div ref={bgRef} style={{
      position: 'fixed',
      zIndex: 0,
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      overflow: 'hidden',
    }} aria-hidden="true" />
  );
}

export default Background3D;
