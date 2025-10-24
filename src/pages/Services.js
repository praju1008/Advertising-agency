import React, { useEffect } from 'react';
import '../styles/Services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServicesGrid from '../components/ServicesGrid';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services-page" data-aos="fade-up">
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Services</h1>
      <ServicesGrid />
    </div>
  );
};

export default Services;
