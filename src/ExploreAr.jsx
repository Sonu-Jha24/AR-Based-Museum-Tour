import React, { useState } from 'react';
import './ExploreAr.css';
import Konark from './Konark'; // Jiss page par wapas jana hai, use import karein

const ExploreAr = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [goBack, setGoBack] = useState(false); // Back button ke liye state

  const serverLink = "https://sonu-jha24.github.io/Location-based-AR/First.html";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(serverLink);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); 
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  // Jab back button dabega, toh ye pichla component render kar dega
  if (goBack) return <Konark />; 

  return (
    <div className="ar-guide-wrapper">
      <div className="ar-guide-card">
        
        {/* 🔥 NEW: Premium Back Button */}
        <button className="ar-back-btn" onClick={() => setGoBack(true)}>
          ← Back
        </button>

        {/* Header Section */}
        <div className="ar-header">
          <span className="ar-icon">🌍</span>
          <h2>Bring the Museum to Your Room!</h2>
          <p>Follow these simple steps to experience the Indian Heritage 3D model in real life.</p>
        </div>

        {/* Steps Section */}
        <div className="ar-steps">
          <div className="step-item">
            <div className="step-number">1</div>
            <div className="step-text">Copy the server link below and send it to your smartphone.</div>
          </div>
          <div className="step-item">
            <div className="step-number">2</div>
            <div className="step-text">Open the copied link in any mobile browser (Chrome/Safari).</div>
          </div>
          <div className="step-item">
            <div className="step-number">3</div>
            <div className="step-text">Allow access to your <b>Camera</b> and <b>Location</b> when prompted.</div>
          </div>
          <div className="step-item">
            <div className="step-number">4</div>
            <div className="step-text">Slowly move your phone around your space to reveal the model!</div>
          </div>
        </div>

        {/* Copy Link Section */}
        <div className="ar-link-section">
          <input 
            type="text" 
            value={serverLink} 
            readOnly 
            className="ar-link-input"
          />
          <button 
            className={`ar-copy-btn ${isCopied ? 'copied' : ''}`} 
            onClick={handleCopy}
          >
            {isCopied ? 'COPIED ✓' : 'COPY LINK'}
          </button>
        </div>

      </div>
    </div>
  );
}

export default ExploreAr;