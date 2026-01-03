import React, { useState, useEffect } from 'react';
import ServicesGrid from '../components/ServicesGrid';
import ProjectsGrid from '../components/ProjectsGrid';
import Testimonials from '../components/Testimonials';
import PublisherLogos from '../components/Publishers';
import '../styles/Home.css';



const HERO_WORDS = ['CREATIVITY', 'PASSION', 'EXPERIENCE'];


const Home = () => {
  const [videoError, setVideoError] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);


  useEffect(() => {
    const timer = setTimeout(
      () => setHeroIndex((prev) => (prev + 1) % HERO_WORDS.length),
      2200
    );
    return () => clearTimeout(timer);
  }, [heroIndex]);


  const handleVideoError = () => setVideoError(true);


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
              {HERO_WORDS.map((word, i) => {
                const prevIndex = heroIndex === 0 ? HERO_WORDS.length - 1 : heroIndex - 1;
                let cls = "";
                if (i === heroIndex) cls = "is-slide-visible";
                else if (i === prevIndex) cls = "is-slide-leave";
                return <b key={word} className={cls}>{word}</b>
              })}
            </span>
          </h1>
        </div>
      </section>


      {/* About Preview */}
      <section
        className="about-preview"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/assets/images/counter.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="about-preview-content">
          <h2>About <span className="highlight">Timashetti</span></h2>
     <p>
  We are a leading, fast-growing advertising agency in Vijayapur that crafts engaging campaigns across print and electronic media; our mission is to generate qualified leads for your products and services with an adept in‑house design team; we plan, create, and manage end‑to‑end advertising, promotions, and marketing programs for clients; every engagement is handled by domain experts who work diligently to make your experience effective and worthwhile; and because "creativity with strategy is called advertising," reach out today to make your product or service stand out in the market.
</p>


          <a href="/about" className="about-btn">MORE ABOUT US</a>
        </div>
      </section>


      {/* What We Do Section */}
      <section className="services-section">
        <h2>
          What <span className="bold_header">We Do</span>
        </h2>
        <ServicesGrid />
      </section>


      {/* Stats Section */}
      <section
        className="stats"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/assets/images/counter.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="stat">
          <h3 className="counter">30+</h3>
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


      {/* Publisher Logos Section */}
      <PublisherLogos />


      {/* Projects Section */}
      <section className="projects-section">
        <div className="projects-header">
          <h2>Our <span className="highlight">Projects</span></h2>
          <p>
            We build exceptional digital experiences that influence consumer decisions, motivate engagement and faster sharing.
          </p>
        </div>
        <ProjectsGrid />
      </section>


      {/* Testimonials Section */}
      <section className="testimonials-section" style={{ background: '#27213c' }}>
         {/* <h2>Communication With difference</h2> */}
        <Testimonials />
      </section>
    </div>
  );
};


export default Home;
