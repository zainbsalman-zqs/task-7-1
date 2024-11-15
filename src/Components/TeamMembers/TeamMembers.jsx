import React from 'react';
import './TeamMembers.css';
import ImgTeam1 from '../../assets/V7-task/04.webp'; 
import ImgTeam2 from '../../assets/V7-task/05.webp'; 
import ImgTeam3 from '../../assets/V7-task/06.webp'; 
import ImgTeam4 from '../../assets/V7-task/07.webp'; 
import CardTeamMembers from './CardTeamMembers';
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

function TeamMembers() {
  const members = [
    { name: 'Masirul Islam', role: 'Web Designer', img2: ImgTeam1 },
    { name: 'Jessica Mardol', role: 'Cyber Expert', img2: ImgTeam2 },
    { name: 'Arnold Hemingway', role: 'Web Expert', img2: ImgTeam3 },
    { name: 'Shikon Haque', role: 'Data Analyst', img2: ImgTeam4 },
  ];

  return (
    <section className="team-members-section">
      <span className='litel-title'><GoArrowLeft className='left-icon' />TEAM MEMBERS<GoArrowRight  className='right-icon'  /></span>
        <div className="dec-zq" >
      <h2 className="title">Our Dedicated Team Members</h2>
      <button className="btn-memzq"> All Members <span className="Righticon-btn"><GoArrowRight /></span></button>
      </div>
      <div className="team-members">
        {members.map((member, index) => (
          <CardTeamMembers
            key={index}
             name={member.name}
            role={member.role}
            img2={member.img2}
          />
        ))}
             
      </div>
    </section>
  );
}

export default TeamMembers;
