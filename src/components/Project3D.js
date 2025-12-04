import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Project3D({ shape = 'icosahedron', color = 0x6366f1, animationSpeed = 1 }) {
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
    const pointLight = new THREE.PointLight(color, 1, 100);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);
    const pointLight2 = new THREE.PointLight(0xec4899, 1, 100);
    pointLight2.position.set(-3, -3, 2);
    scene.add(pointLight2);

    // 3D Object
    let geometry;
    switch (shape) {
      case 'box':
        geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        break;
      case 'torus':
        geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
        break;
      case 'dodecahedron':
        geometry = new THREE.DodecahedronGeometry(1, 0);
        break;
      default:
        geometry = new THREE.IcosahedronGeometry(1, 0);
    }

    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      emissive: 0x1e293b,
      shininess: 100,
      specular: 0xffffff,
      transparent: true,
      opacity: 0.8,
    });
    const object = new THREE.Mesh(geometry, material);
    scene.add(object);

    // Inner Wireframe
    const wireframeGeometry = geometry.clone();
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: color,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    wireframe.scale.set(1.01, 1.01, 1.01);
    object.add(wireframe);

    // Animation loop
    let mounted = true;
    const animate = () => {
      if (!mounted) return;
      requestAnimationFrame(animate);
      object.rotation.x += 0.003 * animationSpeed;
      object.rotation.y += 0.005 * animationSpeed;
      wireframe.rotation.x -= 0.006 * animationSpeed;
      wireframe.rotation.y -= 0.004 * animationSpeed;
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
  }, [shape, color, animationSpeed]);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
}

export default Project3D;
