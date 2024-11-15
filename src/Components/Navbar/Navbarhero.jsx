import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbarhero.css';
import heroImg from '../../assets/V7-task/logo.svg'; 
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { SlArrowDown } from "react-icons/sl";
function Navbarhero() {
  return (
    <nav className='zq-nav'>
      <div><img className='zq-logo' src={heroImg} alt="logo" /></div>
      <div>
        <ul className='zq-item'>
          <li><Link to='/'>Home <SlArrowDown /> </Link></li>
          <li><Link to='/about'>About </Link></li>
          <li><a href='#'>Services <SlArrowDown /> </a></li>
          <li><a href='#'>Pages <SlArrowDown /> </a></li>
          <li><a href='#'>Blog <SlArrowDown /></a></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
      <span className='iconsearch'><CiSearch /><span className='iconcart'><FaShoppingCart /></span></span>
      <button>GET A QUOTE <GoArrowRight /></button>
    </nav>
  );
}

export default Navbarhero;
