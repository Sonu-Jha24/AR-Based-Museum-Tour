import React, { useState } from 'react';
import './Qutub.css';
import RedFort from './RedFort';
import Maindashbord from './Maindashbord';



const Qutub = () => {
      const [secound, setSecound] = useState(false);
  const [back, setBack] = useState(false);

  if (back) return <Maindashbord />;
  if (secound) return <RedFort />;
  
  
  return (
    <div className="container">
      {/* Navbar */}
      <div className="navbar">
        <h2 className="logo">EXHIBITX</h2>
        <div className="nav-links">
          <span className="active">IN INDIA</span>
          <span>EG EGYPT</span>
          <span>IT ROME</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="hero">
        <h4 className="subtitle">— SELECT THE WORLD TO DIVE INTO —</h4>
        <h1 className="title">INDIAN HERITAGE</h1>

        {/* Glass Card */}
        <div className="card">
          <div className="card-left">
            <p className="small">1193 CE • DELHI SULTANATE</p>
            <h2>QUTUB MINAR</h2>
            <p className="location">📍 Mehrauli,New Delhi</p>

            <p className="desc">
              Worlds tallest brick minaret at 72.5m.Five distinct storeys of alternating fluted and stellar
              cross-section built to proclaim the arrival of the Islam in India.
            </p>
          </div>

          <div className="card-right">
            <p><span>HEIGHT</span> 72.5m</p>
            <p><span>CONSTRUCTED</span> 1193 CE</p>
            <p><span>STATUS</span> UNESCO</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="controls">
          <button className="arrow" onClick={() => setBack(true)}>←</button>
          <button className="arrow" onClick={() => setSecound(true)}>→</button>
        </div>

        <div className="explore-wrapper">
  <button className="explore-btn">
    <span className="circle">+</span>
    <span>EXPLORE IN AR</span>
    <span className="circle">+</span>
  </button>
</div>
      </div>
    </div>
  );
};

export default Qutub;
