import React from 'react';
import '../styles/ServicesGrid.css';

const services = [
  {title: 'Identity Design', tag: '#LetsBeDistinctive', img: '/assets/images/1.png', desc: 'Developing a distinctive identity...' },
  {title: 'Strategic Branding', tag: '#LetsBuildBrands', img: '/assets/images/2.png', desc: 'Long term plans for brand development...' },
  {title: 'Packing Design', tag: '#LetsPackPerfection', img: '/assets/images/3.png', desc: 'Packaging design that sells...' },
  {title: 'Website Design & Development', tag: '#LetsClick', img: '/assets/images/4.png', desc: 'Websites that convert...' },
  {title: 'Digital Marketing', tag: '#LetsGetDigital', img: '/assets/images/5.png', desc: 'Comprehensive online marketing...' },
  {title: 'Social Media Marketing', tag: '#LetsGetSocial', img: '/assets/images/6.png', desc: 'Engaging social media strategies...' },
  {title: 'Video Production', tag: '#LetsCreateVisuals', img: '/assets/images/7.png', desc: 'Captivating video content...' },
  {title: 'Media Planning & Buying', tag: '#LetsBeEverywhere', img: '/assets/images/8.png', desc: 'Strategic media placement...' },
  {title: 'Advertising Campaigns', tag: '#LetsMakeAnImpact', img: '/assets/images/9.png', desc: 'Innovative campaigns that deliver...' },
  // add more as needed
];

const ServicesGrid = () => (
  <section className="services" data-aos="fade-up">
    <h2>What we do</h2>
    <div className="services-grid">
      {services.map((s, idx) => (
        <div className="service-card" key={idx} data-aos="zoom-in" data-aos-delay={idx*100}>
          <img src={s.img} alt={s.title}/>
          <h3>{s.title}</h3>
          <small>{s.tag}</small>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesGrid;
