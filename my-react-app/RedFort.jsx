import React, { useState } from 'react'

import Konark from './Konark';
import Qutub from './Qutub';


const RedFort = () => {
    const[secound, setSecound]=useState(false);
     const [back, setBack] = useState(false);

  if (back) return <Qutub />;
  if (secound) return <Konark />;
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
            <p className="small">1648 CE • MUGHAL EMPIRE</p>
            <h2>RED FORT</h2>
            <p className="location">📍 Old Delhi, Delhi</p>

            <p className="desc">
              Imperial residence of Mughal emperor for nearly two centuries.
              Built in red sandstone by Shah jahan - site of India,s Independence Day flag hoisting.
            </p>
          </div>

          <div className="card-right">
            <p><span>HEIGHT</span> walls 33m</p>
            <p><span>CONSTRUCTED</span> 1648 CE</p>
            <p><span>STATUS</span> UNESCO</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="controls">
          <button className="arrow" onClick={() => setBack(true)}>←</button>
          <button className="arrow"onClick={() => setSecound(true)}>→</button>
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

export default RedFort
