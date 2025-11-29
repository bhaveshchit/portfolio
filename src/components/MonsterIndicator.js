import React from 'react';

// Simple SVG monster (can be customized further)
export default function MonsterIndicator({ style = {}, ...props }) {
  return (
    <svg
      width="54"
      height="44"
      viewBox="0 0 38 32"
      fill="none"
      style={{
        display: 'block',
        filter: 'drop-shadow(0 4px 16px #6366f1aa)',
        ...style,
      }}
      {...props}
    >
      <ellipse cx="19" cy="20" rx="16" ry="10" fill="#6366f1" />
      <ellipse cx="12" cy="18" rx="2.5" ry="3.5" fill="#fff" />
      <ellipse cx="26" cy="18" rx="2.5" ry="3.5" fill="#fff" />
      <ellipse cx="12" cy="18" rx="1.1" ry="1.5" fill="#222" />
      <ellipse cx="26" cy="18" rx="1.1" ry="1.5" fill="#222" />
      <ellipse cx="19" cy="27" rx="5" ry="2" fill="#ec4899" />
      <rect x="7" y="7" width="4" height="8" rx="2" fill="#6366f1" transform="rotate(-18 7 7)" />
      <rect x="27" y="7" width="4" height="8" rx="2" fill="#6366f1" transform="rotate(18 27 7)" />
      <ellipse cx="19" cy="10" rx="3.5" ry="2.5" fill="#f59e0b" />
    </svg>
  );
}
