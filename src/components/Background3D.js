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

    // Data/Tech Nodes (replacing bubbles)
    const shapes = [];
    const nodeGeometry = new THREE.OctahedronGeometry(0.4, 1);
    for (let i = 0; i < 12; i++) {
      const mat = new THREE.MeshPhongMaterial({ color: 0x6366f1 });
      mat.emissive.setHex(0x3b4bd4);
      mat.transparent = true;
      mat.opacity = 0.8;
      const node = new THREE.Mesh(nodeGeometry, mat);
      node.position.set(
        Math.sin((i / 12) * Math.PI * 2) * (3 + Math.random() * 5),
        Math.cos((i / 12) * Math.PI * 2) * (2 + Math.random() * 4),
        -2 + Math.random() * 4
      );
      scene.add(node);
      shapes.push({ mesh: node, type: 'node', phase: Math.random() * Math.PI * 2 });
    }

    // Matrix/Circuit Grid (replacing rings)
    const matrixGeometry = new THREE.TorusGeometry(0.5, 0.08, 16, 100);
    for (let i = 0; i < 6; i++) {
      const matrix = new THREE.Mesh(
        matrixGeometry,
        new THREE.MeshPhongMaterial({ 
          color: 0xec4899, 
          emissive: 0xa81e64, 
          shininess: 100, 
          transparent: true, 
          opacity: 0.6,
          wireframe: false
        })
      );
      matrix.position.set(
        Math.cos((i / 6) * Math.PI * 2) * (4 + Math.random() * 3),
        Math.sin((i / 6) * Math.PI * 2) * (2 + Math.random() * 3),
        -1.5 + Math.random() * 4
      );
      matrix.rotation.x = Math.random() * Math.PI;
      matrix.rotation.y = Math.random() * Math.PI;
      scene.add(matrix);
      shapes.push({ mesh: matrix, type: 'matrix', phase: Math.random() * Math.PI * 2 });
    }

    // Accent circuit lines (additional technical elements)
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      linePositions.push(
        Math.cos(angle) * 6, Math.sin(angle) * 4, -1,
        Math.cos(angle) * 3, Math.sin(angle) * 2, 1
      );
    }
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.3, linewidth: 2 });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);
    shapes.push({ mesh: lines, type: 'lines', phase: 0 });

    // Keyboard buttons (small cubes)
    const buttonGeometry = new THREE.BoxGeometry(0.25, 0.25, 0.15);
    const keyboardButtons = ['&lt;', '&gt;', '{', '}', '[ ]', '( )', '/* */', '=&gt;'];
    for (let i = 0; i < 8; i++) {
      const buttonMat = new THREE.MeshPhongMaterial({
        color: 0xf59e0b,
        emissive: 0xd97706,
        transparent: true,
        opacity: 0.7,
        shininess: 60
      });
      const button = new THREE.Mesh(buttonGeometry, buttonMat);
      const radius = 5 + Math.random() * 3;
      const angle = (i / 8) * Math.PI * 2 + Math.random() * 0.3;
      button.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.6,
        -3 + Math.random() * 2
      );
      button.rotation.set(Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.5);
      scene.add(button);
      shapes.push({ mesh: button, type: 'keyboard', phase: Math.random() * Math.PI * 2 });
    }

    // Code symbols (small pyramids/tetrahedra)
    const symbolGeometry = new THREE.TetrahedronGeometry(0.3, 0);
    for (let i = 0; i < 6; i++) {
      const symbolMat = new THREE.MeshPhongMaterial({
        color: 0x06b6d4,
        emissive: 0x0891b2,
        transparent: true,
        opacity: 0.65,
        shininess: 80
      });
      const symbol = new THREE.Mesh(symbolGeometry, symbolMat);
      const angle = (i / 6) * Math.PI * 2 + Math.random() * 0.4;
      const dist = 3 + Math.random() * 4;
      symbol.position.set(
        Math.cos(angle) * dist,
        Math.sin(angle) * dist,
        -2.5 + Math.random() * 3
      );
      symbol.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      scene.add(symbol);
      shapes.push({ mesh: symbol, type: 'symbol', phase: Math.random() * Math.PI * 2 });
    }

    // Tech connection points (small spheres)
    const pointGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    for (let i = 0; i < 10; i++) {
      const pointMat = new THREE.MeshPhongMaterial({
        color: 0x8b5cf6,
        emissive: 0x7c3aed,
        transparent: true,
        opacity: 0.8,
        shininess: 100
      });
      const point = new THREE.Mesh(pointGeometry, pointMat);
      point.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 3
      );
      scene.add(point);
      shapes.push({ mesh: point, type: 'point', phase: Math.random() * Math.PI * 2 });
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
        if (obj.type === 'node') {
          // Tech nodes rotate and pulse
          obj.mesh.rotation.x += 0.015;
          obj.mesh.rotation.y += 0.018;
          obj.mesh.rotation.z += 0.01;
          obj.mesh.position.y += Math.sin(t * 1.2 + obj.phase + i) * 0.012;
          obj.mesh.position.x += Math.cos(t * 0.8 + obj.phase + i) * 0.008;
          obj.mesh.material.opacity = 0.6 + 0.25 * Math.sin(t * 1.5 + obj.phase);
          obj.mesh.scale.x = 1 + 0.15 * Math.sin(t + obj.phase);
          obj.mesh.scale.y = 1 + 0.15 * Math.sin(t + obj.phase);
          obj.mesh.scale.z = 1 + 0.15 * Math.sin(t + obj.phase);
        } else if (obj.type === 'matrix') {
          // Matrix rings spin and oscillate
          obj.mesh.rotation.x += 0.012;
          obj.mesh.rotation.y += 0.015;
          obj.mesh.rotation.z += 0.008;
          obj.mesh.position.y += Math.sin(t * 0.7 + obj.phase + i) * 0.015;
          obj.mesh.position.x += Math.cos(t * 0.9 + obj.phase + i) * 0.01;
          obj.mesh.material.opacity = 0.4 + 0.3 * Math.sin(t + obj.phase);
        } else if (obj.type === 'lines') {
          // Circuit lines subtly rotate
          obj.mesh.rotation.z += 0.0008;
          obj.mesh.rotation.x += 0.0005;
        } else if (obj.type === 'keyboard') {
          // Keyboard buttons rotate gently and float
          obj.mesh.rotation.x += 0.008 * Math.sin(t * 0.5 + obj.phase);
          obj.mesh.rotation.y += 0.012;
          obj.mesh.rotation.z += 0.006 * Math.cos(t * 0.5 + obj.phase);
          obj.mesh.position.y += Math.sin(t * 1.1 + obj.phase + i) * 0.008;
          obj.mesh.material.opacity = 0.7 + 0.15 * Math.sin(t * 1.3 + obj.phase);
        } else if (obj.type === 'symbol') {
          // Code symbols spin rapidly and pulse
          obj.mesh.rotation.x += 0.025;
          obj.mesh.rotation.y += 0.032;
          obj.mesh.rotation.z += 0.018;
          obj.mesh.position.y += Math.sin(t * 1.4 + obj.phase + i) * 0.01;
          obj.mesh.scale.x = 1 + 0.2 * Math.sin(t * 1.8 + obj.phase);
          obj.mesh.scale.y = 1 + 0.2 * Math.sin(t * 1.8 + obj.phase);
          obj.mesh.scale.z = 1 + 0.2 * Math.sin(t * 1.8 + obj.phase);
          obj.mesh.material.opacity = 0.65 + 0.2 * Math.sin(t * 2 + obj.phase);
        } else if (obj.type === 'point') {
          // Tech points bob gently and pulse
          obj.mesh.position.y += Math.sin(t * 0.6 + obj.phase + i) * 0.006;
          obj.mesh.position.x += Math.cos(t * 0.5 + obj.phase + i) * 0.004;
          obj.mesh.position.z += Math.sin(t * 0.7 + obj.phase + i) * 0.005;
          obj.mesh.material.opacity = 0.8 + 0.15 * Math.sin(t * 1.2 + obj.phase);
          obj.mesh.scale.x = 1 + 0.1 * Math.sin(t + obj.phase);
          obj.mesh.scale.y = 1 + 0.1 * Math.sin(t + obj.phase);
          obj.mesh.scale.z = 1 + 0.1 * Math.sin(t + obj.phase);
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
      nodeGeometry.dispose();
      matrixGeometry.dispose();
      lineGeometry.dispose();
      buttonGeometry.dispose();
      symbolGeometry.dispose();
      pointGeometry.dispose();
      lineMaterial.dispose();
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
