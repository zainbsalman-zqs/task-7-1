import React from 'react'
import "./Logos.css"
import Imghero1 from '../../assets/V7-task/brandLogo1_1.svg'
import Imghero2 from '../../assets/V7-task/brandLogo1_2.svg'
import Imghero3 from '../../assets/V7-task/brandLogo1_3.svg'
import Imghero4 from '../../assets/V7-task/brandLogo1_4.svg'
import Imghero5 from '../../assets/V7-task/brandLogo1_5.svg'
function Logos() {
  return (
    <div className="brands-logos">
      <img src={Imghero1} alt="Brand Logo" className="brand-logo2" />
      <img src={Imghero2} alt="Brand Logo" className="brand-logo2" />
      <img src={Imghero3} alt="Brand Logo" className="brand-logo" />
      <img src={Imghero4} alt="Brand Logo" className="brand-logo2" />
      <img src={Imghero5} alt="Brand Logo" className="brand-logo2" />
    </div>

  )
}

export default Logos