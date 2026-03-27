

import React, { useState } from 'react';
import RedFort from './RedFort';


const Konark = () => {
        
  const [back, setBack] = useState(false);

  if (back) return <RedFort />;
  
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
            <p className="small">1250 CE • EASTERN GANGA DYNASTY</p>
            <h2>KONARK SUN TEMPLE</h2>
            <p className="location">📍 Konark,Odisha</p>

            <p className="desc">
              Chariot shaped temple dedicated to the Sun God Surya with 24 intricately 
              carved wheels.A kalinga architecture - each wheel double as a precious sundial
            </p>
          </div>

          <div className="card-right">
            <p><span>HEIGHT</span> ~57m</p>
            <p><span>CONSTRUCTED</span> 1250 CE</p>
            <p><span>STATUS</span> UNESCO</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="controls">
          <button className="arrow" onClick={() => setBack(true)}>←</button>
          
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
  )
}

export default Konark
