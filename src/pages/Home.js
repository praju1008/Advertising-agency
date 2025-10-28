import React, { useState, useEffect } from 'react';
import ServicesGrid from '../components/ServicesGrid';
import ProjectsGrid from '../components/ProjectsGrid';
import Testimonials from '../components/Testimonials';
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
          <h2>About <span className="highlight">Thimashetti</span></h2>
          <p>
            We are one of the leading & fastest growing advertising agencies in Vijayapur creating engaging content for services that we provide in print and electronic media.
          </p>
          <p>
            Our mission is to generate leads for your product or service. We also have an adept designing team to satisfy your needs.
          </p>
          <p>
            Our team is dedicated to creating, planning and handling advertising and other forms of promotions and marketing for its clients.
          </p>
          <p>
            We consciously provide services to the clients which are crafted by domain experts who really work hard to make your experience worthwhile.
          </p>
          <p>
            "Creativity with strategy is called advertising". Reach out to us today and make your product or service stand out in market.
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

      {/* Projects Section */}
      <section className="projects-section">
        <div className="projects-header">
          <h2>Our <span className="highlight">Projects</span></h2>
          <p>
            We build exceptional digital experiences that influence consumer decisions, motivate engagement and foster sharing.
          </p>
        </div>
        <ProjectsGrid />
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" style={{ background: '#27213c' }}>
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;
