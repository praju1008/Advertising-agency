import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Services.css';

const servicesData = [
  {
    title: 'Branding',
    description: 'We create unique brand identities that help your business stand out.',
    icon: '/assets/images/service-branding.png',
  },
  {
    title: 'Digital Marketing',
    description: 'Comprehensive online marketing strategies to reach your audience.',
    icon: '/assets/images/service-digital.png',
  },
  {
    title: 'Graphic Design',
    description: 'Creative designs for all your print and digital needs.',
    icon: '/assets/images/service-design.png',
  },
  {
    title: 'Video Production',
    description: 'Professional video content to engage and attract your audience.',
    icon: '/assets/images/service-video.png',
  },
  {
    title: 'Media Planning',
    description: 'Strategic media placement for maximum impact.',
    icon: '/assets/images/service-media.png',
  },
  {
    title: 'Advertising Campaigns',
    description: 'Innovative campaigns that deliver results for your business.',
    icon: '/assets/images/service-campaign.png',
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services-page">
      <h1 className="services-title" data-aos="fade-up">Our Services</h1>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
