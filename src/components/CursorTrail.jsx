import React, { useState, useEffect } from 'react';

const CursorTrail = () => {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const updateTrail = (e) => {
      setTrail((prevTrail) => [
        ...prevTrail.slice(-20),
        { x: e.clientX, y: e.clientY, id: Date.now() },
      ]);
    };

    window.addEventListener('mousemove', updateTrail);

    return () => {
      window.removeEventListener('mousemove', updateTrail);
    };
  }, []);

  return (
    <>
      {trail.map((dot, index) => (
        <div
          key={dot.id}
          className="fixed w-2 h-2 rounded-full bg-blue-300 pointer-events-none"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            opacity: 1 - index * 0.05,
            transform: 'translate(-50%, -50%)',
            zIndex: 9998,
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;