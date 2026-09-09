import React, { useState } from 'react';
import './Rome.css';
import Firstpage from './Firstpage';
import Qutub from './Qutub';
import backgroundImage from './9069250.jpg';
import Tajmahalexplore from './Tajmahalexplore';
import ExploreAr from './ExploreAr';
import Sphinx from './Sphinx';
import Rome from './Rome';
import Forum from './Forum';
import Romeexplore from './Romeexplore';


const Pantheon = () => {

  const [secound, setSecound] = useState(false);
  const [back, setBack] = useState(false);
  const[explore,setExplore]=useState(false);
  const[explorear,setExplorear]=useState(false);
  if(explorear) return <ExploreAr />
  if(explore) return <Romeexplore />;

  if (back) return <Rome />;
  if (secound) return <Forum />;

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
        <h1 className="title"> ROMAN GRANDEUR</h1>

        <div className="card">
          <div className="card-left">
            <p className="small">125 CE • ROMAN EMPIRE</p>
            <h2>THE PANTHEON</h2>
            <p className="location">📍Rome,Italy</p>

            <p className="desc">
              Best preserved ancient Roman building .Its unreinforced concrete dome spanning 43m
              with a 9m oculus has endured for 1900years -still the world's largest unreinforced 
              concrete dome. 
            </p>
          </div>

          <div className="card-right">
            <p><span>HEIGHT</span> Dome 43m</p>
            <p><span>CONSTRUCTED</span> 125 CE</p>
            <p><span>STATUS</span> Heritage</p>
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

export default Pantheon;