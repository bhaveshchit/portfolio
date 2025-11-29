import React, { useEffect, useRef, useState } from 'react';

const COLORS = [
  '#6366f1', // indigo
  '#ec4899', // pink
  '#f59e0b', // amber
  '#06b6d4', // cyan
  '#8b5cf6', // purple
  '#22d3ee', // teal
  '#f43f5e', // rose
];

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function CursorBlast() {
  const [blasts, setBlasts] = useState([]);
  const blastId = useRef(0);

  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const color = randomColor();
      const size = 18 + Math.random() * 16;
      const id = blastId.current++;
      setBlasts((prev) => [
        ...prev,
        { id, x, y, color, size, created: Date.now() }
      ]);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Remove old blasts
  useEffect(() => {
    if (!blasts.length) return;
    const timeout = setTimeout(() => {
      const now = Date.now();
      setBlasts((prev) => prev.filter(b => now - b.created < 500));
    }, 80);
    return () => clearTimeout(timeout);
  }, [blasts]);

  return (
    <div style={{
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 10000,
      overflow: 'hidden',
      mixBlendMode: 'lighter',
    }}>
      {blasts.map(({ id, x, y, color, size }) => (
        <span
          key={id}
          style={{
            position: 'absolute',
            left: x - size / 2,
            top: y - size / 2,
            width: size,
            height: size,
            borderRadius: '8px', // subtle rounding for modern look
            background: `linear-gradient(135deg, ${color} 0%, transparent 80%)`,
            opacity: 0.7,
            pointerEvents: 'none',
            filter: 'blur(1.2px)',
            animation: 'cursor-blast-fade-square 0.5s cubic-bezier(.4,0,.2,1) forwards',
            boxShadow: `0 0 12px 2px ${color}55`,
          }}
        />
      ))}
      <style>{`
        @keyframes cursor-blast-fade-square {
          0% { opacity: 0.8; transform: scale(1) rotate(0deg); }
          60% { opacity: 0.7; transform: scale(1.18) rotate(12deg); }
          100% { opacity: 0; transform: scale(1.38) rotate(24deg); }
        }
      `}</style>
    </div>
  );
}

export default CursorBlast;
