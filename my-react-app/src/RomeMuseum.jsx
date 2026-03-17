import React, { useState } from 'react';
import './Rome.css';
import rome from './rome.jpg';
import EgyptMuseum from './EgyptMuseum';

const RomeMuseum = () => {
    const[back,setBack]=useState(false);
    if(back){
        return <EgyptMuseum />
    }
  return (
    <div className="museum-container">
   
      <div className="bg-overlay1" style={{ backgroundImage: `url(${rome})` }}></div>

      
      <h1 className="main-title">Select the World to Dive Into</h1>

      <div className="carousel-section">
        <button className="nav-btn" onClick={()=>{setBack(true)}}> ❮ </button>

        <div className="info-card">
          <h2 className="card-title">Rome Museum</h2>
          <p className="card-desc">
            Step inside the rise of ancient Roman civilisation
          </p>
        </div>

        
      </div>

   
      <button className="explore-btn">Explore in AR</button>
    </div>
  );
};

export default RomeMuseum;
