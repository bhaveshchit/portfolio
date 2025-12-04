import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function About3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x8b5cf6, 1, 100);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);
    const pointLight2 = new THREE.PointLight(0xec4899, 1, 100);
    pointLight2.position.set(-3, -3, 2);
    scene.add(pointLight2);

    // Crystal Object
    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      emissive: 0x1e293b,
      shininess: 100,
      specular: 0xffffff,
      transparent: true,
      opacity: 0.8,
    });
    const crystal = new THREE.Mesh(geometry, material);
    scene.add(crystal);

    // Inner Wireframe
    const wireframeGeometry = new THREE.IcosahedronGeometry(1, 0);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    wireframe.scale.set(1.01, 1.01, 1.01);
    crystal.add(wireframe);

    // Animation loop
    let mounted = true;
    const animate = () => {
      if (!mounted) return;
      requestAnimationFrame(animate);
      crystal.rotation.x += 0.003;
      crystal.rotation.y += 0.005;
      wireframe.rotation.x -= 0.006;
      wireframe.rotation.y -= 0.004;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
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
      mounted = false;
      window.removeEventListener('resize', handleResize);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
}

export default About3D;
