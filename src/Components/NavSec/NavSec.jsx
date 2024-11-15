import React from 'react';
import './NavSec.css';
import { Link } from 'react-router-dom'; 
import NavImg from '../../assets/V7-task/Logo.svg'; 
import NavImg2 from '../../assets/V7-task/plane.webp'; 
import { CiSearch } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import { FaBars } from "react-icons/fa6";

function NavSec() {
  return (
    <nav className='zq-navSec'>
      <div><img className='zq-logo2' src={NavImg2} alt="logo" /></div>
      <div><img className='zq-logo1' src={NavImg} alt="logo" /></div>
      <div>
        <ul className='zq-itemSec'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Pages</a></li>
          <li><a href='#'>Blog</a></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
      <span className="icon-container">
        <span className="zq-iconsearch">
          <CiSearch />
        </span>
        <span className="icon-media">
          <FaBars />
        </span>
      </span>
      <div className='btn-zq'>
        <button className='btn'>GET A QUOTE <span className='btn-icon'><GoArrowRight /></span></button>
      </div>
    </nav>
  );
}

export default NavSec;
