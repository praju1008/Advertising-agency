import React, { useEffect } from 'react';
import '../styles/Career.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Career = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="career-page" data-aos="fade-up">
      <h1>Careers</h1>
      <p>Openings will be listed here. Please send your resume to <a href="mailto:letstalk@naval.in">letstalk@naval.in</a></p>
    </div>
  );
};

export default Career;
