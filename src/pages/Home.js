import React, { useEffect } from 'react';
import ServicesGrid from '../components/ServicesGrid';
import ProjectsGrid from '../components/ProjectsGrid';
import Testimonials from '../components/Testimonials';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Home.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section with Video Background */}
      <section className="hero">
        <video className="hero-video" autoPlay loop muted>
          <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-inner" data-aos="fade-up">
          <h1>Creativity. Passion. Experience.</h1>
          <p>We are one of the leading & fastest growing advertising agencies in Pune creating engaging content.</p>
          <a href="/contact" className="cta">Let's Talk</a>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview" data-aos="fade-up">
        <h2>About Naval</h2>
        <p>We are one of the leading & fastest growing advertising agencies in Pune, delivering creative advertising solutions that engage and inspire.</p>
        <a href="/about" className="more">More about us</a>
      </section>

      {/* Services Section */}
      <section className="services-section" data-aos="fade-up">
        <h2>Our Services</h2>
        <ServicesGrid />
      </section>

      {/* Stats Section */}
      <section className="stats" data-aos="fade-up">
        <div className="stat">
          <h3>18+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat">
          <h3>300+</h3>
          <p>Clients</p>
        </div>
        <div className="stat">
          <h3>10000</h3>
          <p>Ads Published</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" data-aos="fade-up">
        <h2>Our Projects</h2>
        <ProjectsGrid />
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" data-aos="fade-up">
        <h2>What Clients Say</h2>
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;
