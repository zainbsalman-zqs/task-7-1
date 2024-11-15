import React from 'react'
import './Herosection.css'
import ImgHero from '../../assets/V7-task/heroThumb1_1.webp'
import { GiCheckMark } from "react-icons/gi";
import { CiWavePulse1 } from "react-icons/ci";

function Herosection() {
  return (
    <div className='hero'>
    <div className="hero-div">
    <div className="hero-content">
   <div className='par'>
     <p ><span className='zq-wave'><CiWavePulse1 /></span>Everything You Need To Create A Website</p>
     </div>
      <h1>Business Innovation With IT Services Expertise</h1>
      <ul className='hero-menu'>
        <div >
        <li className='menu1'><span><GiCheckMark /></span>Deployment and Support</li>
        <li className='menu1'><span><GiCheckMark /></span>Discovery and Solutions </li>
        </div>
        <div>
        <li  className='menu2'><span><GiCheckMark /></span>Flexibility and Adaptability</li>
        <li  className='menu2'><span><GiCheckMark /></span>Competitive Advantage</li>
        </div> </ul>
      <button className="get-started-btn">Get Started</button>
    </div>
    <div className="hero-image">
      <img src={ImgHero} alt="person" />
    </div>
    </div>
 
  </div>
  )
}

export default Herosection