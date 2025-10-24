import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-page" style={{ backgroundImage: "url('/assets/images/counter.jpg')" }}>
      {/* Hero Section */}
      <section className="about-hero" data-aos="fade-up">
        <h1>About Naval</h1>
        <p>
          We are one of the leading & fastest growing advertising agencies in Pune,
          creating engaging content and innovative solutions for our clients.
        </p>
        <img src="/assets/images/bluesmall.jpg" alt="About Hero" className="about-hero-img" />
      </section>

      {/* Stats Section */}
      <section className="about-stats" data-aos="fade-up">
        <div className="stat">
          <img src="/assets/images/experience-icon.png" alt="Experience" />
          <h3>18+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat">
          <img src="/assets/images/clients-icon.png" alt="Clients" />
          <h3>300+</h3>
          <p>Clients</p>
        </div>
        <div className="stat">
          <img src="/assets/images/ads-icon.png" alt="Ads Published" />
          <h3>10000</h3>
          <p>Ads Published</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="about-gallery" data-aos="fade-up">
        <h2>Our Work</h2>
        <div className="gallery-grid">
          <img src="/assets/images/work1.jpg" alt="Work 1" />
          <img src="/assets/images/work2.jpg" alt="Work 2" />
          <img src="/assets/images/work3.jpg" alt="Work 3" />
          <img src="/assets/images/work4.jpg" alt="Work 4" />
        </div>
      </section>
    </div>
  );
};

export default About;
