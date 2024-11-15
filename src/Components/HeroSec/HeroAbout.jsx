import React from 'react'
import "./HeroAbout.css";
import { IoIosArrowForward } from "react-icons/io"; 
import  ImgPos from '../../assets/V7-task/element.webp'
import  ImgPos1 from '../../assets/V7-task/line-element.webp'

function HeroAbout() {
  return (
   <>
   <div className='herosec-zq'>
    <h1 className='titleHero-zq'>About Us</h1>
    <p  >Home <span className='iconHero-zq'> <IoIosArrowForward /></span> About Us </p>
    <div  className='ImgPos-zq'><img src= {ImgPos} alt="" /></div>
    <div  className='ImgPos1-zq'><img src= {ImgPos1} alt="" /></div>
   </div>

   </>
  )
}

export default HeroAbout