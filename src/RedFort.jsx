import React, { useState } from 'react'

import Konark from './Konark';
import Qutub from './Qutub';
import Tajmahalexplore from './Tajmahalexplore';
import ExploreAr from './ExploreAr';
import backgroundImage from './redfort.jpg';


const RedFort = () => {
    const[secound, setSecound]=useState(false);
     const [back, setBack] = useState(false);
     const[explore,setExplore]=useState(false);
     const[explorear,setExplorear]=useState(false);
  if(explorear) return <ExploreAr />

     if(explore) return <Tajmahalexplore />

  if (back) return <Qutub />;
  if (secound) return <Konark />;

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
  )
}

export default RedFort