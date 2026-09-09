import React, { useState } from 'react';
import './Rome.css';
import Firstpage from './Firstpage';
import Qutub from './Qutub';
import backgroundImage from './9069250.jpg';
import Tajmahalexplore from './Tajmahalexplore';
import ExploreAr from './ExploreAr';
import Sphinx from './Sphinx';
import Rome from './Rome'
import Egyptexplore from './Egyptexplore';

const Egypt = () => {

  const [secound, setSecound] = useState(false);
  const [back, setBack] = useState(false);
  const[explore,setExplore]=useState(false);
  const[explorear,setExplorear]=useState(false);
  const[change,setChange]=useState(false);
    if(change) return <Rome />
  if(explorear) return <ExploreAr />
  if(explore) return <Egyptexplore />;

  if (back) return <Firstpage />;
  if (secound) return <Sphinx />;

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
          <span onClick={()=>{setChange(true)}}>IT ROME</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="hero">
        <h4 className="subtitle">— SELECT THE WORLD TO DIVE INTO —</h4>
        <h1 className="title">EGYPT WONDERS</h1>

        <div className="card">
          <div className="card-left">
            <p className="small">2560 BCE • OLD KINGDOM</p>
            <h2>GREAT PYRAMID OF GIZA</h2>
            <p className="location">📍 Giza plateau,Egypt</p>

            <p className="desc">
              Oldest of the seven wonders and the only one still standing .Built for Pharaoh Khufu using
              2.3million stone blocks .Talleast man-made structure on earth for 3,800years. 
            </p>
          </div>

          <div className="card-right">
            <p><span>HEIGHT</span> 138.5m</p>
            <p><span>CONSTRUCTED</span> 2560 BCE</p>
            <p><span>STATUS</span> Wonders</p>
          </div>
        </div>

        {/* Arrows */}
        <div className="controls">
          <button className="arrow" onClick={() => setBack(true)}>←</button>
          <button className="arrow" onClick={() => setSecound(true)}>→</button>
        </div>

        {/* Explore Button */}
        <div className="explore-wrapper">
          <button className="explore-btn" onClick={()=>{setExplorear(true)}}>
            <span className="circle">+</span>
            <span>EXPLORE IN AR</span>
            <span className="circle">+</span>
          </button>
          <button className='explore-VR-btn' onClick={()=>{setExplore(true)}}>
            Explore in VR
          </button>
        </div>

              

      </div>
    </div>
  );
};

export default Egypt;