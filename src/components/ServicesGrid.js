import React from 'react';
import '../styles/ServicesGrid.css';

const services = [
  {title: 'Identity Design', tag: '#LetsBeDistinctive', img: '/assets/service-identity.png', desc: 'Developing a distinctive identity...' },
  {title: 'Strategic Branding', tag: '#LetsBuildBrands', img: '/assets/service-brand.png', desc: 'Long term plans for brand development...' },
  {title: 'Packing Design', tag: '#LetsPackPerfection', img: '/assets/service-pack.png', desc: 'Packaging design that sells...' },
  {title: 'Website Design & Development', tag: '#LetsClick', img: '/assets/service-web.png', desc: 'Websites that convert...' },
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
