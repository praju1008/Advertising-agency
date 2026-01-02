import React from 'react';
import '../styles/Testimonials.css';

const logos = [
  ["/assets/images/Logo-84.png","Bank"],
  ["/assets/images/Logo-85.jpg","Excellent"],
  // ["/assets/images/Logo-86.png","RNS"],
  ["/assets/images/Logo-87.jpeg","Bijjaragi Motors"],
  ["/assets/images/Logo-89.png","Ayush Hospital"],
  ["/assets/images/Logo-90.jpeg","Chetana college"],
  ["/assets/images/Logo-91.png","Gurukul pu college"],
  ["/assets/images/Logo-92.png","Saaol heart center"],
  ["/assets/images/Logo-93.png","oxford"],
  ["/assets/images/Logo-94.png","s-mart"],
  ["/assets/images/Logo-95.png","svamitva"],
  ["/assets/images/Logo-96.jpeg","yashodha hospital"],
  ["/assets/images/Logo-88.png","sonar and sons"],
  ["/assets/images/Logo-97.jpeg","hyundai"],
];

const Testimonials = () => {
  return (
    <div className="testimonials-demo-section">
      <h1
        style={{
          color: '#ffffff',
          textAlign: 'center',
          fontSize: '46px',
          fontWeight: 700,
          marginBottom: '40px',
        }}
      >
        Our Clients
      </h1>

      <div className="client-logos-demo">
        <div className="logos-lane">
          <div className="logos-track">
            {logos.map(([src, alt], i) => (
              <div className="logo-demo-box" key={`a-${i}`}>
                <img src={src} alt={alt} />
              </div>
            ))}
          </div>

          <div className="logos-track logos-track--clone" aria-hidden="true">
            {logos.map(([src, alt], i) => (
              <div className="logo-demo-box" key={`b-${i}`}>
                <img src={src} alt={alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
