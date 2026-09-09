import React, { useState } from 'react'
import Egyptexplore from './Egyptexplore';

const Tajmahalexplore = () => {
  const[next,setNext]=useState(false);
  if(next) {
    return <Egyptexplore />
  }
  return (
    /* Container ko absolute aur fixed kar dete hain */
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      margin: 0, 
      padding: 0, 
      overflow: 'hidden' 
    }}>
      {/* 1. Yahan se 'embedded' hata kar dekhein, ya phir niche wala style dein */}
      <a-scene style={{ height: '100vh', width: '100vw' }}>
        <a-assets>
          <a-audio id="tajAudio" src="./tajaudio.mp3"></a-audio>
        </a-assets>
        
        
        <a-camera position="-32 3 60" look-controls>
          <a-cursor color="yellow"></a-cursor>
        </a-camera>

        

        <a-light type="ambient" intensity="0.8"></a-light>
      <a-light type="directional" position="-0.22614 12.62656 -38.05302" intensity="2" light="intensity: 4.73"></a-light>
      <a-light type="directional" position="1.19297 16.55217 38.15947" intensity="2" light="intensity: 4.73"></a-light>
      <a-light type="directional" position="-34.78975 16.55217 -0.91331" intensity="2" light="intensity: 4.61"></a-light>
      <a-light type="directional" position="46.51516 14.10943 -7.28265" intensity="2" light="intensity: 4.61"></a-light>
      
        

<a-entity gltf-model="./taj_mahal_model.glb" position="-80.53498 14 0" scale="20.35 18.44 20.16"></a-entity>
<a-entity gltf-model="./sound.glb" sound="src: ./tajaudio.mp3; on: click;volume:5; refDistance: 4; rolloffFactor: 2" position="-45.25211 -3.79621 -14.72427"  scale="0.05 0.05 0.05  "></a-entity>      

        //Adding information tag
       {/* Information Tag - Scale ki jagah Width/Height use karein */}
{/* Information Tag - The 100% Fix */}
<a-entity
  position="-50.63 5.31 26.69"
  rotation="19.83 -89.22 -0.36" /* Aapki original rotation, isko mat chhedna */
  sound="src: ./tajaudio.mp3; on: click;volume:0; refDistance: 4; rolloffFactor: 2"
  
>
  {/* 1. Background Plane (Blue Glass Effect ke saath) */}
  <a-plane 
    width="16" 
    height="10" 
    color="#0055ff" 
    material="transparent: true; opacity: 0.5; side: double; metalness: 0.8; roughness: 0.1"
    position="0 0 0"
  ></a-plane>

  {/* 2. Text Component: Yahan hai asli jaadu */}
  <a-text 
    value="THE TAJ MAHAL
Monument of Eternal Love (1631 CE)

Located in Agra, the Taj Mahal is an exquisite 17th-century white marble mausoleum commissioned by Mughal Emperor Shah Jahan for his beloved wife, Mumtaz Mahal. This UNESCO World Heritage Site is a universal masterpiece, representing the absolute zenith of Mughal architectural ingenuity and devotion." 
    align="center" 
    color="#FFFFFF" 
    width="15" 
    position="0 0 -0.2"  
    rotation="0 180 0"   
    wrap-count="45"
    font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt"
    side="front" 
  ></a-text>
</a-entity>

// Qutub Minar 
<a-entity gltf-model="./qutub_minar.glb" position="-63.15805 19.29247 -85.19935" scale="22.83 21.66 21.09" rotation="0 -90 0"></a-entity>
<a-entity gltf-model="./sound.glb" sound="src: ./qutubminar.mp3; on: click;volume:5; refDistance: 15; rolloffFactor: 4" position="-55.25211 -3.79621 -98.72427" scale="0.05 0.05 0.05  "></a-entity> 
<a-light type="ambient" intensity="0.8"></a-light>
<a-light type="directional" position="-0.22614 12.62656 -38.05302" intensity="2" light="intensity: 4.73"></a-light>
<a-entity
  position="-50.63 5.31 -65.69"
  rotation="19.83 -89.22 -0.36" /* Aapki original rotation, isko mat chhedna */
>
  {/* 1. Background Plane (Blue Glass Effect ke saath) */}
  <a-plane 
    width="16" 
    height="10" 
    color="#0055ff" 
    material="transparent: true; opacity: 0.5; side: double; metalness: 0.8; roughness: 0.1"
    position="0 0 0"
  ></a-plane>

  {/* 2. Text Component: Yahan hai asli jaadu */}
  <a-text 
    value="QUTUB MINAR
The Tower of Victory (c. 1199 CE)

Located in New Delhi, this 73-meter tall red sandstone and marble tower is the world's tallest brick minaret.
 Initiated by Qutb-ud-din Aibak, this UNESCO World Heritage Site features five distinct storeys adorned with intricate Quranic carvings, representing a true masterpiece of early Indo-Islamic architecture."
    align="center"
    color="#FFFFFF" 
    width="15" 
    position="0 0 -0.2"  
    rotation="0 180 0"   
    wrap-count="45"
    font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt"
    side="front" 
  ></a-text>
</a-entity>


// RedFort
<a-entity gltf-model="./Red_fort.glb" position="52.91748 4.29247 8.08948" scale="40 40 40" rotation="0 -90 0"></a-entity>
<a-entity position="21.02686 -4.52174 -3.54846" gltf-model="./sound.glb" sound="src: ./REDFORT.mp3; on: click; volume: 5; refDistance: 15; rolloffFactor: 4"  scale="0.05 0.05 0.05"></a-entity>
<a-entity
  position="12.717 1.310 24.69"
  rotation="19.83 90.78 -0.36" /* Y-axis ko -89.22 se 90.78 kar diya (180 degree flip) */
>
  {/* Background Plane */}
  <a-plane 
    width="16" 
    height="10" 
    color="#0055ff" 
    material="transparent: true; opacity: 0.5; side: double; metalness: 0.8; roughness: 0.1"
    position="0 0 0"
  ></a-plane>

  {/* Text Component (Same as before, kyuki pura dabba ghoom gaya hai) */}
  <a-text 
    value="THE RED FORT (Lal Qila)
Seat of the Mughal Empire (1648 CE)

Built by Mughal Emperor Shah Jahan in Old Delhi, the Red Fort served as the main residence of the Mughal dynasty. Named for its massive red sandstone walls, this UNESCO World Heritage Site showcases the pinnacle of Mughal architecture, brilliantly blending Persian, Timurid, and Indian traditions." 
    align="center" 
    color="#FFFFFF" 
    width="15" 
    position="0 0 -0.2"  
    rotation="0 180 0"   
    wrap-count="45"
    font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt"
    side="front" 
  ></a-text>
</a-entity>

//Konark Temple 
<a-entity gltf-model="./kanarksun.glb" position="55.52279 3.25849 -128.92659" scale="30 30 30" rotation="0 -90 0"></a-entity>
<a-entity position="20.97496 -4.96898 -140.80569" gltf-model="./sound.glb" sound="src: ./konark.mp3; on: click; volume: 5; refDistance: 15; rolloffFactor: 4" scale="0.05 0.05 0.05"></a-entity>
<a-entity position="28.57449 1.5557 -100.54519" rotation="19.83 90.78 -0.36"><a-plane width="16" height="10" color="#0055ff" material="transparent: true; opacity: 0.5; side: double; metalness: 0.8; roughness: 0.1" position="" geometry=""></a-plane><a-text value="KONARK SUN TEMPLE
The Cosmic Chariot (13th Century CE)

Located in Odisha, the 13th-century Konark Sun Temple is a monumental representation of the sun god Surya's chariot. Built by King Narasimhadeva I, this UNESCO World Heritage Site features 24 elaborately carved stone wheels led by seven horses, showcasing the pinnacle of Kalinga architecture" align="center" color="#FFFFFF" width="15" position="0 0 -0.2" rotation="0 180 0" wrap-count="45" font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt" side="front" text=""></a-text></a-entity>


        

{/* Plane (Zameen) ko realistic banane ke liye */}

 <a-plane src="chess.jpg" position="2.83236 -5.7548 0" rotation="-90 0 0" scale="400 400 1" material="shader: flat; side: double" geometry=""></a-plane>         
        <a-sky color="#FFFFFF"></a-sky>

        
     <a-entity 
    position="-52 40 -149" 
    animation="property: position; to: -52 43 -149; dir: alternate; dur: 3000; easing: easeInOutSine; loop: true">
    
    <a-text 
        value="Way to the Egypt Wonders"
        position="0.3 -0.3 -0.5" 
        width="120" 
        wrap-count="30" 
        align="center" 
        color="#2A1B00" 
        opacity="0.8" 
        font="mozillavr" 
        side="front">
    </a-text>

    <a-text 
        value="Way to the Egypt Wonders"
        position="0 0 0" 
        width="120" 
        wrap-count="30" 
        align="center" 
        color="#FFD700" 
        font="mozillavr" 
        side="front"
        animation="property: opacity; from: 0.8; to: 1; dir: alternate; dur: 1500; loop: true">
    </a-text>

</a-entity> 
  
  <a-entity 
    
    animation="property: position;from:-52 2 35 ;to: -52 43 35; dir: alternate; dur: 5000; easing: easeInOutSine; loop: true">
    
    <a-text 
        value="Welcome to the Indian Heritage"
        position="25 -0.3 -0.5" 
        width="150" 
        wrap-count="40" 
        align="center" 
        color="#2A1B00" 
        opacity="0.8" 
        font="mozillavr" 
        side="front">
    </a-text>

    <a-text 
        value="Welcome to the Indian Heritage"
        position="25 0 0" 
        width="150" 
        wrap-count="40" 
        align="center" 
        color="#FFD700" 
        font="mozillavr" 
        side="front"
        animation="property: opacity; from: 0.8; to: 1; dir: alternate; dur: 1500; loop: true">
    </a-text>

</a-entity>

<a-light type="ambient" color="#b3c6ff" intensity="0.5"></a-light>

<a-light type="directional" color="#ffffff" intensity="1.2" position="0 20 0"></a-light>

<a-light type="point" color="#00ffff" intensity="2" distance="50" position="-35 15 -145"></a-light>

<a-entity gltf-model="./portal3.glb" position="-35 1 -150" scale="30 30 30"  onClick={()=>{setNext(true)}}></a-entity>       
       
      </a-scene>
    </div>
  )
}

export default Tajmahalexplore