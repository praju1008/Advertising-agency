import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section with Background */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>ABOUT US</h1>
        </div>
      </section>

      {/* About Content Section */}
      <section className="about-content" data-aos="fade-up">
        <h2>About <span className="highlight">Us</span></h2>
        <p>
          We are one of the leading & fastest growing advertising agencies in Pune creating engaging content for services that we provide in print and electronic media.
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
      </section>

      {/* Meet The Team Section */}
      <section className="team-section" data-aos="fade-up">
        <h2>Meet <span className="highlight">The Team</span></h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/assets/images/team1.jpg" alt="Team Member" />
          </div>
          <div className="team-member">
            <img src="/assets/images/team2.jpg" alt="Team Member" />
          </div>
          <div className="team-member">
            <img src="/assets/images/team3.jpg" alt="Team Member" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
