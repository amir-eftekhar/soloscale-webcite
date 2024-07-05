import React, { useState, useEffect, useCallback } from 'react';

const CursorEffect = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isMoving, setIsMoving] = useState(false);

  const updateCursor = useCallback((e) => {
    setCursor({ x: e.clientX, y: e.clientY });
    setIsMoving(true);
    setTrail((prevTrail) => [
      ...prevTrail.slice(-30),
      { x: e.clientX, y: e.clientY, timestamp: Date.now() },
    ]);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, [updateCursor]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTrail((prevTrail) => 
        prevTrail.filter((dot) => Date.now() - dot.timestamp < 500)
      );
      setIsMoving(false);
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div 
        className="fixed w-8 h-8 rounded-full pointer-events-none mix-blend-difference z-50"
        style={{
  left: `${cursor.x}px`,
  top: `${cursor.y}px`,
  transform: isMoving ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.5)',
  background: 'radial-gradient(circle, rgba(51,187,207,1) 0%, rgba(51,187,207,0) 70%)',
  boxShadow: '0 0 15px rgba(51,187,207,0.5)',
  transition: 'transform 0.1s ease-out',
}}
      />

      {/* Cursor Trail */}
      {trail.map((dot, index) => (
        <div
          key={dot.timestamp}
          className="fixed w-2 h-2 rounded-full pointer-events-none"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            opacity: 1 - index * 0.03,
            transform: `translate(-50%, -50%) scale(${1 - index * 0.02})`,
            background: `rgba(51, 187, 207, ${1 - index * 0.03})`,
            boxShadow: `0 0 ${10 - index * 0.3}px rgba(51, 187, 207, ${0.5 - index * 0.01})`,
            zIndex: 49 - index,
          }}
        />
      ))}
    </>
  );
};

export default CursorEffect;