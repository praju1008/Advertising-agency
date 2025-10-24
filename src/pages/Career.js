import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Career.css';

const Career = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const jobOpenings = [
    {
      title: 'Graphic Designer',
      location: 'Pune, India',
      description: 'Looking for a creative graphic designer with experience in digital and print media.',
    },
    {
      title: 'Digital Marketing Executive',
      location: 'Pune, India',
      description: 'Responsible for managing social media, SEO, and online campaigns.',
    },
    {
      title: 'Content Writer',
      location: 'Pune, India',
      description: 'Create compelling content for web, ads, and social media.',
    },
  ];

  return (
    <div className="career-page">
      <section className="career-hero" data-aos="fade-up">
        <img src="/assets/images/career-hero.jpg" alt="Careers at Naval" className="career-hero-img" />
        <div className="career-hero-text">
          <h1>Join Our Team</h1>
          <p>Openings will be listed below. Please send your resume to <a href="mailto:letstalk@naval.in">letstalk@naval.in</a></p>
        </div>
      </section>

      <section className="job-listings" data-aos="fade-up">
        {jobOpenings.map((job, index) => (
          <div className="job-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <img src="/assets/images/job-icon.png" alt={job.title} className="job-icon" />
            <h3>{job.title}</h3>
            <p className="location">{job.location}</p>
            <p className="description">{job.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Career;
