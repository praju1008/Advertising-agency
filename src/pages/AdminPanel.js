import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLogin from './AdminLogin';
import '../styles/AdminPanel.css'; // Make sure to import your CSS!

const AdminPanel = () => {
  const [token, setToken] = useState(localStorage.getItem('admin_token') || '');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = () => {
    axios
      .get('http://localhost:5000/api/contact-messages', {
        headers: { Authorization: "Bearer " + token }
      })
      .then(res => {
        setMessages(res.data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem('admin_token', token);
      fetchMessages();
    }
  }, [token]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure to delete this message?')) {
      await axios.delete(`http://localhost:5000/api/contact-messages/${id}`, {
        headers: { Authorization: "Bearer " + token }
      });
      fetchMessages();
    }
  };

  if (!token) return <AdminLogin setToken={setToken} />;

  return (
    <div>
      {/* Video Hero Section */}
      <section className="admin-hero-section">
        <video
          className="admin-hero-bg-video"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/images/contact-bg.jpg"
        >
          <source src="/assets/videos/contact-bg.mp4" type="video/mp4" />
        </video>
        <div className="admin-hero-overlay"></div>
        <div className="admin-hero-text">
          <h1>Admin Dashboard</h1>
          <p>Welcome to the control center for your website.</p>
        </div>
      </section>
      
      {/* Your Admin Table */}
      <div className="admin-panel-wrapper">
        <h2>All Contact Messages</h2>
        {loading && <div>Loading...</div>}
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Email</th><th>Message</th><th>Phone</th><th>Date</th><th>Action</th>
            </tr>
          </thead>
          <tbody>
            {messages.map(msg => (
              <tr key={msg.id}>
                <td>{msg.id}</td><td>{msg.name}</td><td>{msg.email}</td>
                <td>{msg.message}</td><td>{msg.phone}</td><td>{msg.createdAt}</td>
                <td>
                  <button className="admin-delete-btn" onClick={() => handleDelete(msg.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
