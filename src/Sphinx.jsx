import React, { useState } from 'react';
import './Rome.css';
import Firstpage from './Firstpage';
import Qutub from './Qutub';
import backgroundImage from './9069250.jpg';
import Tajmahalexplore from './Tajmahalexplore';
import ExploreAr from './ExploreAr';
import Egypt from './Egypt';
import Luxor from './Luxor'
import Egyptexplore from './Egyptexplore';

const Sphinx = () => {

  const [secound, setSecound] = useState(false);
  const [back, setBack] = useState(false);
  const[explore,setExplore]=useState(false);
  const[explorear,setExplorear]=useState(false);
  if(explorear) return <ExploreAr />
  if(explore) return <Egyptexplore />;

  if (back) return <Egypt />;
  if (secound) return <Luxor />;

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
        <h1 className="title">EGYPTIAN WONDERS</h1>

        <div className="card">
          <div className="card-left">
            <p className="small">2500 BCE • OLD KINGDOM</p>
            <h2>GREAT SPHINX</h2>
            <p className="location">📍 Giza,Egypt</p>

            <p className="desc">
              The world's largest monolithic status- a human-headed lion hewn from a single 
              limestone outcop.Gazes eastward toward the rising sun,possibly aligned to the vernal
              eqinox. 
            </p>
          </div>

          <div className="card-right">
            <p><span>HEIGHT</span> 20m</p>
            <p><span>CONSTRUCTED</span> 2500 BCE</p>
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

export default Sphinx;