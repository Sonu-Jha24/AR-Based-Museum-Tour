import React from 'react'


const Aframe = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, overflow: 'hidden' }}>

      <a-scene 
        vr-mode-ui="enabled: false"
        embedded
        /* Yahan se videoTexture: true HATA DIYA HAI taaki phone par camera chale 👇 */
        arjs="sourceType: webcam; debugUIEnabled: false;"
        renderer="logarithmicDepthBuffer: true; alpha: true;"
      >

        <a-entity>
          <a-camera 
            gps-camera  
            rotation-reader /* Spelling theek kar di hai */
            simulateLatitude="28.624020" 
            simulateLongitude="77.284583"
          ></a-camera>
        </a-entity>

        <a-box 
          color="#00AA00" 
          position="0 2 0" 
          gps-new-entity-place="latitude: 28.624020; longitude: 77.284583;"
        ></a-box>
      
      </a-scene>
    </div>
  )
}

export default Aframe;