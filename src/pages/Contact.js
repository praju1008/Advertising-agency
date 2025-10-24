import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, form);
      setStatus('Message sent. Thank you!');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus('Error sending message.');
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero" data-aos="fade-up">
        <video className="contact-bg-video" autoPlay loop muted>
          <source src="/assets/videos/contact-bg.mp4" type="video/mp4" />
        </video>
        <div className="contact-hero-text">
          <h1>Contact Us</h1>
          <p>We are here to help. Reach out to us with any questions or project inquiries.</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section" data-aos="fade-up">
        <form className="contact-form" onSubmit={onSubmit}>
          <input
            required
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            required
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button type="submit">Send Message</button>
        </form>
        {status && <div className="status">{status}</div>}
      </section>

      {/* Office Info */}
      <section className="office-info" data-aos="fade-up">
        <div className="office-card">
          <img src="/assets/images/location-icon.png" alt="Location" />
          <h3>Our Office</h3>
          <p>Pune, Maharashtra, India</p>
        </div>
        <div className="office-card">
          <img src="/assets/images/email-icon.png" alt="Email" />
          <h3>Email</h3>
          <p>letstalk@naval.in</p>
        </div>
        <div className="office-card">
          <img src="/assets/images/phone-icon.png" alt="Phone" />
          <h3>Phone</h3>
          <p>+91 12345 67890</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
