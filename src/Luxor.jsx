import React, { useState } from 'react';
import './Rome.css';
import Firstpage from './Firstpage';
import Qutub from './Qutub';
import backgroundImage from './9069250.jpg';
import Tajmahalexplore from './Tajmahalexplore';
import ExploreAr from './ExploreAr';
import Sphinx from './Sphinx';
import Simbel from './Simbel';
import Egyptexplore from './Egyptexplore';

const Luxor = () => {

  const [secound, setSecound] = useState(false);
  const [back, setBack] = useState(false);
  const[explore,setExplore]=useState(false);
  const[explorear,setExplorear]=useState(false);
  if(explorear) return <ExploreAr />
  if(explore) return <Egyptexplore />;

  if (back) return <Sphinx />;
  if (secound) return <Simbel />;

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
        <h1 className="title">EGYPT WONDERS</h1>

        <div className="card">
          <div className="card-left">
            <p className="small">1400 BCE • OLD KINGDOM</p>
            <h2>LUXOR TEMPLE</h2>
            <p className="location">📍 Luxor(Thebest),Egypt</p>

            <p className="desc">
              Not dedicated to a god but to the rejuvenation of kingship .Built Amenhotep III and Ramesses II,
              connected to Karnak by a 3km sphinx-lined ceremonial avenue. 
            </p>
          </div>

          <div className="card-right">
            <p><span>HEIGHT</span> Pylos 24m</p>
            <p><span>CONSTRUCTED</span> 1400 BCE</p>
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

export default Luxor;