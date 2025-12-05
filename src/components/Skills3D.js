import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function Skills3D({ skillsCategories }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const skillsGroupRef = useRef(new THREE.Group());
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const intersectedRef = useRef(null);
  const originalColorsRef = useRef(new Map());

  const [tooltip, setTooltip] = useState({
    visible: false,
    content: '',
    x: 0,
    y: 0,
  });

  // Store mouse client coordinates for tooltip positioning
  const mouseClientCoords = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event) => {
    const currentMount = mountRef.current;
    if (currentMount) {
      const rect = currentMount.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

      // Store client coordinates directly for tooltip
      mouseClientCoords.current = { x: event.clientX, y: event.clientY };
    }
  }, []);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 15;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 10;
    controls.maxDistance = 50;
    controlsRef.current = controls;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Create 3D Skills (using BoxGeometry as fallback)
    const skillsGroup = skillsGroupRef.current;
    scene.add(skillsGroup);

    const totalSkills = skillsCategories.flatMap(cat => cat.skills).length;
    const sphereRadius = 8;
    let skillIndex = 0;

    skillsCategories.forEach((category, catIndex) => {
      category.skills.forEach((skill, skillIdx) => {
        const phi = Math.acos(-1 + (2 * skillIndex) / totalSkills);
        const theta = Math.sqrt(totalSkills * Math.PI) * phi;

        const x = sphereRadius * Math.cos(theta) * Math.sin(phi);
        const y = sphereRadius * Math.sin(theta) * Math.sin(phi);
        const z = sphereRadius * Math.cos(phi);

        const boxGeometry = new THREE.BoxGeometry(1, 0.5, 0.2);
        const material = new THREE.MeshPhongMaterial({ color: 0x007bff });
        const boxMesh = new THREE.Mesh(boxGeometry, material);
        boxMesh.position.set(x, y, z);
        boxMesh.userData = { skill: skill, category: category.category };
        skillsGroup.add(boxMesh);
        originalColorsRef.current.set(boxMesh.uuid, material.color.getHex());
        skillIndex++;
      });
    });

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      skillsGroupRef.current.rotation.y += 0.002; // Continuous rotation

      // Raycasting for hover effect
      if (rendererRef.current && cameraRef.current && sceneRef.current) {
        raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
        const intersects = raycasterRef.current.intersectObjects(skillsGroupRef.current.children);

        if (intersects.length > 0) {
          if (intersectedRef.current !== intersects[0].object) {
            if (intersectedRef.current) {
              // Restore original color
              const originalColor = originalColorsRef.current.get(intersectedRef.current.uuid);
              if (originalColor !== undefined) {
                intersectedRef.current.material.color.setHex(originalColor);
              }
            }
            intersectedRef.current = intersects[0].object;
            originalColorsRef.current.set(intersectedRef.current.uuid, intersectedRef.current.material.color.getHex());
            intersectedRef.current.material.color.setHex(0xff0000); // Highlight color
            document.body.style.cursor = 'pointer';
            // Display skill name/proficiency in tooltip
            const skillData = intersectedRef.current.userData.skill;
            setTooltip({
              visible: true,
              content: `${skillData.name} (${skillData.proficiency}%)`,
              x: mouseClientCoords.current.x,
              y: mouseClientCoords.current.y,
            });
          }
        } else {
          if (intersectedRef.current) {
            const originalColor = originalColorsRef.current.get(intersectedRef.current.uuid);
            if (originalColor !== undefined) {
              intersectedRef.current.material.color.setHex(originalColor);
            }
          }
          intersectedRef.current = null;
          document.body.style.cursor = 'auto';
          setTooltip(prev => ({ ...prev, visible: false }));
        }
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

    // Handle Mouse Move for Raycasting
    currentMount.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount) {
        currentMount.removeEventListener('mousemove', handleMouseMove);
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      controls.dispose();
      // Dispose geometries and materials if they are not shared
      skillsGroupRef.current.children.forEach(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
    };
  }, [skillsCategories, handleMouseMove, setTooltip]);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '500px', // Adjust height as needed
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {tooltip.visible && (
        <div
          className="skill-tooltip"
          style={{
            left: tooltip.x,
            top: tooltip.y,
          }}
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
}

export default Skills3D;
