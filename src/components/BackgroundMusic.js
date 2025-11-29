import React, { useEffect, useRef, useState } from 'react';
import './BackgroundMusic.css';

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try to autoplay with muted first, then unmute on user interaction
    audio.muted = false;
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay failed, wait for user interaction
          const handleUserInteraction = () => {
            audio.play();
            setIsPlaying(true);
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('touchstart', handleUserInteraction);
          };
          document.addEventListener('click', handleUserInteraction);
          document.addEventListener('touchstart', handleUserInteraction);
        });
    }

    return () => {
      document.removeEventListener('click', () => {});
      document.removeEventListener('touchstart', () => {});
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        style={{ display: 'none' }}
      >
        <source src="/music/mixkit-hip-hop-02-738.mp3" type="audio/mpeg" />
      </audio>
      <button
        className={`music-toggle-btn${isPlaying ? ' playing' : ''}`}
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        <span className="music-icon">
          {isPlaying ? '🎵' : '🔇'}
        </span>
      </button>
    </>
  );
}
