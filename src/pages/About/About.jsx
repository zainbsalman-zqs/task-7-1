import React from 'react'
import NavSec from '../../Components/NavSec/NavSec'
import HeroSec from '../../Components/HeroSec/HeroAbout'
import ServiceAbout from '../../Components/ServiceAbout/ServiceAbout'
import TeamMembers from '../../Components/TeamMembers/TeamMembers'
import LogoAbout from '../../Components/LogoAbout/LogoAbout'

function About() {
  return (
    <>
    <NavSec />
    <HeroSec />
    <ServiceAbout/>
    <TeamMembers/>
<LogoAbout/>
    </>
  )
}

export default About