import React from 'react'

function ServiceAboutCard({title,img}) {
  return (
    <>
       <img src={img} alt="icon star" />
    <h2>{title}</h2>
    </>
  )
}

export default ServiceAboutCard