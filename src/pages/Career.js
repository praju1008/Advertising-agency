import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Career.css';

const jobOpenings = [
  "Senior Manager/Junior Manager - New Business Development (2-10 Yrs)",
  "Manager - Digital Marketing (2-6 Yrs)",
  "Executive - Digital Marketing (1-5 Yrs)",
  "Client Servicing Executive (3-10 Yrs)",
  "Senior Graphic Web Designer - Wireframe/Infographics (2-5 Yrs)",
  "Senior/Junior UI Designer - Photoshop/CorelDRAW (2-5 Yrs)",
  "Junior Graphic Designer"
];

const Career = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="career-page">
      <section className="career-hero" data-aos="fade-up">
        <img src="/assets/images/career.jpg" alt="Careers at Naval" className="career-hero-img" />
        <div className="career-hero-overlay" />
      </section>
      <div className="career-content">
        <h2 className="career-title">CURRENT OPENINGS</h2>
        <p className="career-email">
          Send your resumes on <a href="mailto:tpadvtvjp@gmail.com">tpadvtvjp@gmail.com</a>
        </p>
        <div className="career-job-list">
          {jobOpenings.map((title, i) => (
            <div className="career-job-row" key={i} data-aos="fade-up" data-aos-delay={i*60}>
              {title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
