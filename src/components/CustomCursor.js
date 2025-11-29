import React, { useEffect, useRef, useState } from 'react';

function CustomCursor() {
  const [pos, setPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);
  const requestRef = useRef();
  const cursorRef = useRef();
  const target = useRef({ x: pos.x, y: pos.y });

  useEffect(() => {
    const move = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    const down = () => setClicked(true);
    const up = () => setClicked(false);
    const over = (e) => {
      if (e.target.closest('a,button,.btn,.shadcn-btn,.shadcn-ui-button')) setHovering(true);
    };
    const out = (e) => {
      if (e.target.closest('a,button,.btn,.shadcn-btn,.shadcn-ui-button')) setHovering(false);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.body.addEventListener('mouseover', over);
    document.body.addEventListener('mouseout', out);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.body.removeEventListener('mouseover', over);
      document.body.removeEventListener('mouseout', out);
    };
  }, []);

  // Animate cursor position (lerp for smoothness)
  useEffect(() => {
    const animate = () => {
      setPos((prev) => {
        const dx = target.current.x - prev.x;
        const dy = target.current.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = '';
    };
  }, []);

  // Cursor style
  const size = hovering ? 38 : clicked ? 24 : 28;
  const opacity = hovering ? 0.18 : 0.28;
  const border = hovering ? '2.5px solid #6366f1' : '2px solid #ec4899';
  const bg = clicked ? 'rgba(99,102,241,0.12)' : 'rgba(236,72,153,0.10)';

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: pos.x - size / 2,
        top: pos.y - size / 2,
        width: size,
        height: size,
        borderRadius: '50%',
        border,
        background: bg,
        opacity,
        pointerEvents: 'none',
        zIndex: 10001,
        transition: 'width 0.18s, height 0.18s, border 0.18s, background 0.18s, opacity 0.18s',
        boxShadow: hovering ? '0 0 16px 2px #6366f1aa' : '0 2px 8px 0 #ec489955',
        mixBlendMode: 'exclusion',
        backdropFilter: 'blur(1.5px)',
        willChange: 'transform,width,height,opacity',
      }}
      aria-hidden="true"
    />
  );
}

export default CustomCursor;
