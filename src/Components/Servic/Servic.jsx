import React from 'react';
import "./servic.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import ServiceCard from '../CardsComponent/CardsService';
import InfoCard from '../CardsComponent/CardsInfo';
import ImgServic1 from '../../assets/V7-task/serviceIcon1_2.svg';
import ImgServic2 from '../../assets/V7-task/serviceIcon1_3.svg';
import ImgServic3 from '../../assets/V7-task/serviceIcon1_4.svg';
import ImgServic4 from '../../assets/V7-task/serviceIcon1_1.svg';

function Servic() {
  const services = [
    { title: 'Woo Commerce', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aliquam omnis voluptatem vitae error rem cupiditate qui, nihil, alias iure sed' ,   image:ImgServic1 },
    { title: 'CRM Solutions', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aliquam omnis voluptatem vitae error rem cupiditate qui, nihil, alias iure sed',   image:ImgServic2   },
    { title: 'Web Design', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aliquam omnis voluptatem vitae error rem cupiditate qui, nihil, alias iure sed ' ,   image:ImgServic3  },
    { title: 'Data Guard Sentinel', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aliquam omnis voluptatem vitae error rem cupiditate qui, nihil, alias iure sed' ,   image:ImgServic4  },
  ];

  const Info = [
    { number: "01", title: "Requirement", description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aliquam omnis voluptatem vitae error rem cupiditate qui, nihil, alias iure sed .'},
    { number: "02", title: "UI/UX Design", description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aliquam omnis voluptatem vitae error rem cupiditate qui, nihil, alias iure sed .' },
    { number: "03", title: "Prototype", description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aliquam omnis voluptatem vitae error rem cupiditate qui, nihil, alias iure sed .' },
    { number: "04", title: "Development", description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aliquam omnis voluptatem vitae error rem cupiditate qui, nihil, alias iure sed .' }
  ];

  return (
    <section>
      <div>
        <span>OUR SERVICES</span>
        <h2>Elevating Business With IT Ingenuity</h2>
      </div>
      <div>
        <span><GoArrowLeft /></span>
        <span><GoArrowRight /></span>
      </div>
      <div className="services-cards">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            image={service.image} 
            title={service.title} 
            description={service.description} 
          />
        ))}
      
        <iframe className='video'
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/w4fq2SREm4Y?si=aiTL7AndJXcxo1Bw" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
      <div className='Info-zq'>
        {Info.map((step, index) => (
          <InfoCard 
            key={index} 
            number={step.number} 
            titleInfo={step.title} 
            descriptionInfo={step.description} 
          />
        ))}
      </div>
   
    </section>
  );
}

export default Servic;
