import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-demo-section">
      <div className="testimonials-center">
        <div className="testimonials-blockquote">
          <p>
            Consummate professionals that are highly knowledgeable and well skilled. We highly recommend Naval Publicity to anyone looking for a great company to work with.
          </p>
          <div className="quote-demo-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M10 9V15C10 16.1 9.1 17 8 17H4C2.9 17 2 16.1 2 15V11C2 7.69 4.69 5 8 5H9V7H8C5.79 7 4 8.79 4 11H8C9.1 11 10 11.9 10 13V15ZM22 9V15C22 16.1 21.1 17 20 17H16C14.9 17 14 16.1 14 15V11C14 7.69 16.69 5 20 5H21V7H20C17.79 7 16 8.79 16 11H20C21.1 11 22 11.9 22 13V15Z" fill="#fff"/></svg>
          </div>
          <div className="testimonials-author-demo">R N Arakeri</div>
        </div>
        <div className="client-logos-demo">
          <div className="logo-demo-box">
            <img src="/assets/images/Logo-84.png" alt="Bank" />
          </div>
          <div className="logo-demo-box">
            <img src="/assets/images/Logo-85.jpg" alt="Excellent" />
          </div>
          <div className="logo-demo-box">
            <img src="/assets/images/Logo-86.png" alt="RNS" />
          </div>
          <div className="logo-demo-box">
            <img src="/assets/images/Logo-87.jpeg" alt=" Bijjaragi Motors" />
          </div>
          <div className="logo-demo-box">
            <img src="/assets/images/Logo-88.png" alt="Planet Realty" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
