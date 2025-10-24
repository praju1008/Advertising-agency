import React, { useEffect } from 'react';
import '../styles/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero" data-aos="fade-up">
        <h1>About Naval</h1>
        <p>
          We are one of the leading & fastest growing advertising agencies in Pune creating engaging content...
        </p>
      </section>

      <section className="about-stats" data-aos="fade-up">
        <div className="stat">18+ Years of Experience</div>
        <div className="stat">300+ Clients</div>
        <div className="stat">10000 Ads Published</div>
      </section>
    </div>
  );
};

export default About;
