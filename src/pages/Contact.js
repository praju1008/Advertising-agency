import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Contact.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero" data-aos="fade-up">
        <video
          className="contact-bg-video"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/images/contact-bg.jpg"
        >
          <source src="/assets/videos/contact-bg.mp4" type="video/mp4" />
        </video>
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-text">
          <h1>Contact Us</h1>
          <p>
            Let's talk about your project or business goals. We're happy to connect.
          </p>
        </div>
      </section>

      {/* Full Width Map */}
      <section className="map-section-full" data-aos="fade-up">
        <iframe
          title="Naval Publicity Map"
          className="contact-map-full"
          src="https://www.google.com/maps?q=Timashetti+Publicity,16.8324585,75.7126404&hl=en&z=17&output=embed"
          width="100%"
          height="700"
          frameBorder="0"
          style={{ border: 0, borderRadius: "16px" }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
