import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

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
    <div className="contact-page" data-aos="fade-up">
      <h1>Contact</h1>
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
    </div>
  );
};

export default Contact;
