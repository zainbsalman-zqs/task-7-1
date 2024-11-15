import React from 'react'
import "./ServceContact.css"
import '../CardsComponent/CardsService.jsx'
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Woman from "../../assets/V7-task/video.webp";
function ServceContact() {
  const card = [
    { icon: <MdMarkEmailRead />, title: "Email", description: "info@example.com" },
    { icon: <FaPhoneAlt />, title: "Phone", description: "123-456-7890" },
  ];
  return (
    <div className="contact">
  <div className="contact-info">
    <div>
      {card.map((item, index) => (
        <div key={index} className="zq-card-item">
          <div className="zq-iconcard">{item.icon}</div>
          <div className="zq-textcard">
            <h3 className="zq-titlecard">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    <img className="Woman" src={Woman} alt="Woman " />
  </div>

  <div className="form-container">
    <h2>Ready to Get Started?</h2>
    <p>
      Nvarius eros, ut blandit felis odio in turpis. Quisque rhoncus, eros in auctor ultricies.
    </p>
    <form>
      <div className="form-group-conter">
        <div className="form-group">
          <label htmlFor="name">Your Name*</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group2">
          <label htmlFor="email">Your Email*</label>
          <input type="email" id="email" name="email" required />
        </div>
      </div>
      <div className="form-group3">
        <label htmlFor="message">Write Message*</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit" className="submit-btn">
        Send Message
      </button>
    </form>
  </div>
</div>
  )
}

export default ServceContact
