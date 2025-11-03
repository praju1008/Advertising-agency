import React from 'react';
import '../styles/Testimonials.css';
const logos = [
  ["/assets/images/Logo-84.png","Bank"],
  ["/assets/images/Logo-85.jpg","Excellent"],
  ["/assets/images/Logo-86.png","RNS"],
  ["/assets/images/Logo-87.jpeg","Bijjaragi Motors"],
  ["/assets/images/Logo-89.png","Planet Realty"],
  ["/assets/images/Logo-90.jpeg","Planet Realty"],
  ["/assets/images/Logo-91.png","Planet Realty"],
  ["/assets/images/Logo-92.png","Planet Realty"],
  ["/assets/images/Logo-93.png","Planet Realty"],
  ["/assets/images/Logo-94.png","Planet Realty"],
  ["/assets/images/Logo-95.png","Planet Realty"],
  ["/assets/images/Logo-96.jpeg","Planet Realty"],
  ["/assets/images/Logo-88.png","Planet Realty"],
  ["/assets/images/Logo-97.jpeg","Planet Realty"],
];

const Testimonials = () => {
  return (
    <div className="testimonials-demo-section">
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
