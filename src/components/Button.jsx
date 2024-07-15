import React from 'react';

const scrollToCalendly = () => {
  const calendlySection = document.getElementById('get-started');
  if (calendlySection) {
    window.scrollTo({
      top: calendlySection.offsetTop - 100, // Adjust this value as needed
      behavior: 'smooth'
    });
  }
};

const Button = ({ styles }) => {
  return (
    <button 
      type="button" 
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-gray-900 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-[10px] outline-none transform transition-all duration-500 ease-in-out hover:bg-yellow-600 hover:scale-110 ${styles}`}
      onClick={scrollToCalendly}
    >
      Get Started
    </button>
  );
};

const Button1 = ({ styles, text }) => (
  <button 
    type="button" 
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-gray-900 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-[10px] outline-none transform transition-all duration-500 ease-in-out hover:bg-yellow-600 hover:scale-110 ${styles}`}
    onClick={scrollToCalendly}
  >
    {text}
  </button>
);

export default Button;
export { Button1 };
