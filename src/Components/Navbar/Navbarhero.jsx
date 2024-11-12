import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbarhero.css';
import heroImg from '../../assets/V7-task/logo.svg'; 
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

function Navbarhero() {
  return (
    <nav className='zq-nav'>
      <div><img className='zq-logo' src={heroImg} alt="logo" /></div>
      <div>
        <ul className='zq-item'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Pages</a></li>
          <li><a href='#'>Blog</a></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
      <span className='iconsearch'><CiSearch /><span className='iconcart'><FaShoppingCart /></span></span>
      <button>GET A QUOTE <GoArrowRight /></button>
    </nav>
  );
}

export default Navbarhero;
