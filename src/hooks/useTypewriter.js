import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!text) return;
    
    setDisplayText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (!text || currentIndex >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayText(prevText => prevText + text[currentIndex]);
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [text, currentIndex, speed]);

  return displayText;
};

export default useTypewriter;
