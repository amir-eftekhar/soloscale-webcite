import React, { useEffect, useRef } from 'react';

const Clients = ({ partners }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContent = scrollRef.current;
    if (scrollContent) {
      const scrollWidth = scrollContent.offsetWidth / 2;
      const scrollSpeed = scrollWidth / 180; // Adjust 30 to change speed
      document.documentElement.style.setProperty('--scroll-speed', `${scrollSpeed}s`);
      document.documentElement.style.setProperty('--scroll-width', `${scrollWidth}px`);
    }
  }, [partners]);

  return (
    <div className="w-full mb-8">
      <h2 className="text-center text-5xl font-bold text-white mb-20">Our Partners</h2>
      <div className="w-full bg-yellow-400 overflow-hidden py-8 rounded-md scroll-container">
        <div ref={scrollRef} className="flex animate-scroll scroll-content">
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="flex-shrink-0 mx-16">
              <img src={partner.logo} alt={partner.name} className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
