import React, { useState, useEffect } from 'react';

const useTypingEffect = (words, typingSpeed = 100, deletingSpeed = 75, pauseDuration = 750) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }, deletingSpeed);

      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }, typingSpeed);

      if (currentText === currentWord) {
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return currentText;
};

const TypingAnimation = ({ words, textSize = 'text-4xl' }) => {
  const text = useTypingEffect(words);

  return (
    <div className={`${textSize} font-bold text-gradient`}>
      {text}<span className="animate-blink">|</span>
    </div>
  );
};

export default TypingAnimation;