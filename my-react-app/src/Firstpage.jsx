import React from 'react';
import './First.css';

const Firstpage = () => {
  
  
  const handleBeginJourney = () => {
    const intro = document.getElementById('intro');
    if (intro) {
      intro.classList.add('exit');
      
      console.log("Journey Started");
    }
  };

  return (
         <div className='body'>
              <div id="app">
      <div id="intro">
        <div className="intro-bg"></div>
        <div className="intro-candle-glow"></div>

        {/* Top Left Corner Flourish */}
        <div className="corner corner-tl">
          <svg viewBox="0 0 80 80" fill="none">
            <path 
              d="M4 76 L4 4 L76 4" 
              stroke="rgba(201,168,76,0.4)" 
              strokeWidth="1" 
            />
            <circle cx="4" cy="4" r="3" fill="rgba(201,168,76,0.5)" />
          </svg>
        </div>

        {/* Top Right Corner Flourish */}
        <div className="corner corner-tr">
          <svg viewBox="0 0 80 80" fill="none" style={{ transform: 'scaleX(1)' }}>
            <path 
              d="M4 76 L4 4 L76 4" 
              stroke="rgba(201,168,76,0.4)" 
              strokeWidth="1" 
            />
            <circle cx="4" cy="4" r="3" fill="rgba(201,168,76,0.5)" />
          </svg>
        </div>

        <div className="corner corner-bl">
  <svg viewBox="0 0 80 80" fill="none" style={{ transform: 'scaleY(1)' }}>
    <path 
      d="M4 76 L4 4 L76 4" 
      stroke="rgba(201,168,76,0.4)" 
      strokeWidth="1" 
    />
    <circle cx="4" cy="4" r="3" fill="rgba(201,168,76,0.5)" />
  </svg>
</div>


     <div className="corner corner-br">
  <svg viewBox="0 0 80 80" fill="none" style={{ transform: 'scale(1)' }}>
    <path 
      d="M4 76 L4 4 L76 4" 
      stroke="rgba(201,168,76,0.4)" 
      strokeWidth="1" 
    />
    <circle cx="4" cy="4" r="3" fill="rgba(201,168,76,0.5)" />
  </svg>
</div>

        <div className="intro-content">
          <div className="intro-pre">Anno Domini · A Journey Through Time</div>
          
          <div className="ornament-line">
            <span className="ornament-symbol">⸻ ✦ ⸻</span>
          </div>

          <h1 className="intro-title">
            Step Inside<br />History
          </h1>

          <div className="ornament-line">
            <span className="ornament-symbol">⸻ ✦ ⸻</span>
          </div>

          <p className="intro-tagline">
            Experience human civilisation through Augmented Reality — 
            Indian heritage, Egyptian wonders & Roman grandeur.
          </p>

          <button className="btn-wax" onClick={handleBeginJourney}>
            <div className="btn-wax-bg"></div>
            <div className="btn-wax-text">
              <span className="btn-wax-icon">⚔</span>
              Begin the Journey
              <span className="btn-wax-icon">⚔</span>
            </div>
          </button>

          <div className="intro-stamp">ExhibitX · AR Museum · Est. MMXXVI</div>
        </div>
      </div>
    </div>
         </div>
  );
};

export default Firstpage;
