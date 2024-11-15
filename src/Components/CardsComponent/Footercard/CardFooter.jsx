import React from 'react'

function CardFooter({icon, title, description  })  {
  return (
     <div className='zq-cardfooter'>
  <span>{icon}</span>
       <h6>{ title}</h6>
       <p>{ description}</p>
      </div>
)
}

export default CardFooter