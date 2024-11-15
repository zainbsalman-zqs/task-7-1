import React from 'react'
import './LogoAbout.css';
import logo from '../../assets/V7-task/brand.jpg';
import logo2 from '../../assets/V7-task/brand2.jpg';

function LogoAbout() {
  return (
    <div className="brands-section">
    <div className="brands-line"></div>
    <p className="brands-text">1k+ Brands Trust Us</p>
    <div className="brands-line"></div>
    <div className="brands-logos">
      <img src={logo2} alt="Brand Logo" className="brand-logo2" />
      <img src={logo2} alt="Brand Logo" className="brand-logo2" />
      <img src={logo} alt="Brand Logo" className="brand-logo" />
      <img src={logo2} alt="Brand Logo" className="brand-logo2" />
      <img src={logo2} alt="Brand Logo" className="brand-logo2" />
    </div>
  </div>
    )
}

export default LogoAbout