import React, { useEffect, useState } from 'react';
import ServicesGrid from '../components/ServicesGrid';
import ProjectsGrid from '../components/ProjectsGrid';
import Testimonials from '../components/Testimonials';
import '../styles/Home.css';

const Home = () => {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        {!videoError ? (
          <video 
            className="hero-video" 
            autoPlay 
            loop 
            muted 
            playsInline
            onError={handleVideoError}
          >
            <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="hero-video-fallback"></div>
        )}
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            <span className="cd-words-wrapper">
              <b>CREATIVITY</b>
              <b>PASSION</b>
              <b>EXPERIENCE</b>
            </span>
          </h1>
          <p>
            We are one of the leading & fastest growing advertising agencies in Pune creating engaging content.
          </p>
          <a href="/contact" className="cta">LET'S TALK</a>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="about-preview-content">
          <h2>About Thimashetti</h2>
          <p>
            We are one of the leading & fastest growing advertising agencies in Vijayapur, delivering creative advertising solutions that engage and inspire.
          </p>
          <a href="/about" className="about-btn">MORE ABOUT US</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>We Do</h2>
        <ServicesGrid />
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat">
          <h3 className="counter">20+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat">
          <h3 className="counter">300+</h3>
          <p>Clients</p>
        </div>
        <div className="stat">
          <h3 className="counter">10000+</h3>
          <p>Ads Published</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="projects-header">
          <h2>Our <span className="highlight">Projects</span></h2>
          <p>we build exceptional digital experiences that influence consumer decisions, motivate engagement and foster sharing.</p>
        </div>
        <ProjectsGrid />
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Clients Say</h2>
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;
