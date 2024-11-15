import React from 'react'
import './TeamMembers.css';
import { FaShareAlt } from "react-icons/fa";
function CardTeamMembers({ name, role, img2 }) {
  return (
    <div className="team-membercard-zq">
      <img src={img2} alt={name} className="member-image" />
      <div className="member-info">
        <h3 >{name}</h3>
        <p >{role}</p>
      <div  className='icon-card-zq'> <FaShareAlt /> </div> 
   
      </div>
    </div>
  )
}

export default CardTeamMembers