import React from 'react'
import "../Servic/Servic.css"
function Cards({ title, description , image }) {
  return (
    <div className="service-card">
    <img src={image} alt={title} className="card-image"/>
    <h3>{title}</h3>
    <p>{description}</p>
    <button className='btncard'>Read more</button>
  </div>
  )
}

export default Cards