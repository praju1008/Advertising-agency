import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLogin from "./AdminLogin";
import JobsAdmin from "./JobsAdmin";
import "../styles/AdminPanel.css";

const AdminPanel = () => {
  const [token, setToken] = useState(localStorage.getItem("admin_token") || "");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [applications, setApplications] = useState([]);

  const authHeader = { Authorization: "Bearer " + token };

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contact-messages", {
        headers: authHeader,
      });
      setMessages(res.data?.data || []);
    } catch {
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchApplications = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/job-applications", {
        headers: authHeader,
      });
      setApplications(res.data?.data || []);
    } catch {
      setApplications([]);
    }
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("admin_token", token);
      fetchMessages();
      fetchApplications();
    }
    // eslint-disable-next-line
  }, [token]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this message?")) return;
    await axios.delete(`http://localhost:5000/api/contact-messages/${id}`, {
      headers: authHeader,
    });
    setMessages((prev) => prev.filter((m) => m.id !== id)); // optimistic
    fetchMessages(); // sync
  };

  // Tawk.to: load only on Admin page and clean up on unmount
  // useEffect(() => {
  //   if (document.getElementById("tawk-embed-script")) return;

  //   const s1 = document.createElement("script");
  //   s1.id = "tawk-embed-script";
  //   s1.async = true;
  //   s1.src = "https://embed.tawk.to/69048183b22c021953b686b7/1j8spjqso";
  //   s1.charset = "UTF-8";
  //   s1.setAttribute("crossorigin", "*");

  //   const firstScript = document.getElementsByTagName("script")[0];
  //   firstScript.parentNode.insertBefore(s1, firstScript);

  //   return () => {
  //     const existing = document.getElementById("tawk-embed-script");
  //     if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
  //     const tawkContainer = document.querySelector(
  //       "#tawkchat-container, #tawk_visitor, iframe[src*='tawk.to']"
  //     );
  //     if (tawkContainer && tawkContainer.parentNode)
  //       tawkContainer.parentNode.removeChild(tawkContainer);
  //     window.Tawk_API = undefined;
  //   };
  // }, []);

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

      {/* Contact Messages */}
      <div className="admin-panel-wrapper">
        <div className="admin-header-row">
          <h2>All Contact Messages</h2>
          {loading && <div className="admin-inline-loading">Loading…</div>}
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 && !loading ? (
              <tr>
                <td colSpan={7} style={{ textAlign: "center" }}>No messages</td>
              </tr>
            ) : (
              messages.map((msg, idx) => (
                <tr key={msg.id}>
                  <td>{idx + 1}</td>
                  <td>{msg.name}</td>
                  <td>{msg.email}</td>
                  <td style={{ whiteSpace: "pre-wrap", maxWidth: 300 }}>{msg.message}</td>
                  <td>{msg.phone}</td>
                  <td>{msg.createdAt}</td>
                  <td>
                    <button className="admin-delete-btn" onClick={() => handleDelete(msg.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Job Applications */}
      <div className="admin-panel-wrapper">
        <h2>Job Applications</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Job</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Resume</th>
              <th>Message</th>
              <th>Applied At</th>
            </tr>
          </thead>
          <tbody>
            {applications.length === 0 ? (
              <tr>
                <td colSpan={8} style={{ textAlign: "center" }}>No applications</td>
              </tr>
            ) : (
              applications.map((app, idx) => (
                <tr key={app.id}>
                  <td>{idx + 1}</td>
                  <td>{app.jobTitle || app.jobId}</td>
                  <td>{app.name}</td>
                  <td>{app.email}</td>
                  <td>{app.phone}</td>
                  <td>
                    {app.resume ? (
                      <a
                        href={`http://localhost:5000/uploads/${app.resume}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resume
                      </a>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td style={{ whiteSpace: "pre-wrap", maxWidth: 250 }}>{app.message}</td>
                  <td>{app.appliedAt && new Date(app.appliedAt).toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Job Openings Admin (CRUD) */}
      <JobsAdmin token={token} />
    </div>
  );
};

export default AdminPanel;
