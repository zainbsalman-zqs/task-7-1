import React from 'react'
import { IoIosArrowForward } from "react-icons/io"; 
import  ImgPos from '../../assets/V7-task/element.webp'
import  ImgPos1 from '../../assets/V7-task/line-element.webp'
import "./HeroCont.css"
function HeroCont() {
  return (
    <div className='heroCont-zq'>
    <h1 className='titleHeroCon-zq'>Contact Us</h1>
    <p  >Home <span className='iconHeroCon-zq'> < IoIosArrowForward/></span> Contac Us </p>
    <div  className='ImgCon-zq'><img src= {ImgPos} alt="" /></div>
    <div  className='ImgCon1-zq'><img src= {ImgPos1} alt="" /></div>
   </div>
  )
}

export default HeroCont