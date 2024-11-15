import React from 'react';
import './ServiceAbout.css';
import img from '../../assets/V7-task/asterisk.svg';
import ServiceAboutCard from './ServiceAboutCard';

function ServiceAbout() {
    const services = [
        { title: 'Cyber Security', img: img },
        { title: 'IT Solution', img: img },
        { title: 'Technology', img: img },
        { title: 'Data Security', img: img },
   
    ]; 

    return (
        <div className="service-tags">
            {services.map((service, index) => (
                <ServiceAboutCard 
                    key={index} 
                    img={service.img} 
                    title={service.title} 
                />
            ))}
        </div>
    );
}

export default ServiceAbout;
