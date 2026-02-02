import React, { useState } from 'react';

const GlitchHeader = ({ title, className }) => {
  const [text, setText] = useState(title);
  const chars = "!@#$%^&*()_+NKJVHFD";

  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setText(prev => 
        title.split("").map((letter, index) => {
          if(index < iteration) return title[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      
      if(iteration >= title.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <h2 
      onMouseEnter={scramble} 
      className={className} 
      style={{ cursor: 'crosshair' }}
    >
      {text}
    </h2>
  );
};

export default GlitchHeader;