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
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <h1>ABOUT US</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="about-content" data-aos="fade-up">
        <h2>About <span className="highlight">Us</span></h2>
        <p>
         1) 25+ years of trust: Established in 2000, serving brands across Vijayapura with measurable, lead‑driven advertising outcomes.
        </p>
        <p>
         2) Full‑service partner: Strategy, creative design, print, and electronic media under one roof for faster turnarounds and consistent quality.
        </p>
        <p>
          3) Expert team leadership: Proprietor Ashok Shivappa Timashetti with on‑ground management by Manager Kailas Timashetti for seamless execution.
        </p>
        <p>
         4) Easy to reach: CTS No.133C, Talikoti Building, S S Road, Vijayapura 586103; 9980322520 / 9844248804; tpadvtvjp@gmail.com.
        </p>
        <p>
          5) Dedicated support: One‑Point Contact Representative (OPCR) for agency matters—Kailas Timashetti, ensuring quick responses and clear updates.
        </p>
        <p>
          6) Local insight, real impact: Deep Vijayapura market knowledge that turns campaigns into results, whether brand awareness or direct response.
        </p>
      </section>

      {/* Organization Profile */}
      <section className="about-cards" data-aos="fade-up">
        <h2>Organization <span className="highlight">Profile</span></h2>

        <div className="info-grid">
          <div className="info-card">
            <h3>Agency</h3>
            <p><strong>Name:</strong> Timashetti Publicity</p>
            <p><strong>Date of Establishment:</strong> 2000</p>
            <p><strong>Type:</strong> Proprietary Concern</p>
            <p><strong>Proprietor:</strong> Ashok Shivappa Timashetti</p>
          </div>

          <div className="info-card">
            <h3>Head Office</h3>
            <p>
              CTS No.133C, Talikoti Building, Opp. Kannayya Sweet Mart, Behind Talikoti Medicals, S S Road, Vijayapura – 586103 (Karnataka)
            </p>
            <p><strong>Mobile:</strong> 9980322520 / 9844248804</p>
            <p><strong>Email:</strong> tpadvtvjp@gmail.com</p>
            <p><strong>Website:</strong> —</p>
          </div>

          {/* <div className="info-card">
            <h3>Senior Staff</h3>
            <p><strong>Name:</strong> Kailas Timashetti</p>
            <p><strong>Designation:</strong> Manager</p>
          </div>

          <div className="info-card">
            <h3>Representative</h3>
            <p><strong>Name:</strong> Basavaraj Hosur</p>
            <p><strong>Business Office:</strong> Running text as per requirement</p>
          </div>

          <div className="info-card">
            <h3>OPCR</h3>
            <p><strong>Name:</strong> Kailas Timashetti</p>
            <p><strong>Designation:</strong> Manager</p>
            <p><strong>Address:</strong> Vijayapura</p>
            <p><strong>Phone:</strong> 9844248804</p>
            <p><strong>Email:</strong> 2061kailash@gmail</p>
          </div> */}
        </div>
      </section>

      {/* Meet The Team */}
      <section className="team-section" data-aos="fade-up">
        <h2>Meet <span className="highlight">The Team</span></h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/assets/images/team1.jpeg" alt="Team Member" />
          </div>
          <div className="team-member">
            <img src="/assets/images/team2.jpeg" alt="Team Member" />
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
