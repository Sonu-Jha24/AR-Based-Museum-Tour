import React from 'react';
import './First.css';

const Firstpage = () => {
  // Particles jada karne ke liye length 50 kar di
  const particles = Array.from({ length: 50 });

  return (
    <div className="hero-container">
      <div className="grid-floor"></div>

      <div className="particles">
        {particles.map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-20px`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              '--speed': `${1.5 + Math.random() * 3}s`, // Particles ki speed bhi fast
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="content">
        <h1 className="title">STEP INSIDE HISTORY</h1>
        <p className="subtitle">Experience ancient artifacts in Augmented Reality</p>
        
        <button className="begin-btn">
          LET'S BEGIN
        </button>
      </div>
    </div>
  );
};

export default Firstpage;