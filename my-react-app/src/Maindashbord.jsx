import React, { useState } from 'react';
import './Rome.css';
import Firstpage from './Firstpage';
import Qutub from './Qutub';
import backgroundImage from './9069250.jpg';

const Maindashbord = () => {

  const [secound, setSecound] = useState(false);
  const [back, setBack] = useState(false);

  if (back) return <Firstpage />;
  if (secound) return <Qutub />;

  const myStyle = {
    backgroundImage: `
      linear-gradient(to bottom, rgba(58,31,77,0.7), rgba(42,15,26,0.9)),
      url(${backgroundImage})
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  };

  return (
    <div className="container" style={myStyle}>
      
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

        <div className="card">
          <div className="card-left">
            <p className="small">1631–1653 CE • MUGHAL EMPIRE</p>
            <h2>TAJ MAHAL</h2>
            <p className="location">📍 Agra, Uttar Pradesh</p>

            <p className="desc">
              Ivory-white marble mausoleum commissioned by Emperor Shah Jahan
              in memory of his wife.
            </p>
          </div>

          <div className="card-right">
            <p><span>HEIGHT</span> 73m</p>
            <p><span>CONSTRUCTED</span> 1631 CE</p>
            <p><span>STATUS</span> UNESCO</p>
          </div>
        </div>

        {/* Arrows */}
        <div className="controls">
          <button className="arrow" onClick={() => setBack(true)}>←</button>
          <button className="arrow" onClick={() => setSecound(true)}>→</button>
        </div>

        {/* Explore Button */}
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

export default Maindashbord;
