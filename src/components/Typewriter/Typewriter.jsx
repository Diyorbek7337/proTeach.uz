import React, { useState, useEffect } from 'react';
import './Typewriter.css';

const Typewriter = ({ text, speed = 150, cursorBlinkSpeed = 500, hideDelay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    } else {
      // Matn yozilib bo'lgandan keyin kursorni yo'qotish
      const hideCursorTimeout = setTimeout(() => {
        setShowCursor(false);
      }, hideDelay);
      return () => clearTimeout(hideCursorTimeout);
    }
  }, [index, text, speed, hideDelay]);

  useEffect(() => {
    if (index < text.length) {
      const blinkCursor = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, cursorBlinkSpeed);
      return () => clearInterval(blinkCursor);
    }
  }, [index, cursorBlinkSpeed, text.length]);

  return (
    <span>
      {displayedText}
      {showCursor && <span className="cursor"></span>}
    </span>
  );
};

export default Typewriter;
