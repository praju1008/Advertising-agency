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

  const fetchMessages = () => {
    axios
      .get("http://localhost:5000/api/contact-messages", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setMessages(res.data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const fetchApplications = () => {
    axios
      .get("http://localhost:5000/api/job-applications", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => setApplications(res.data.data))
      .catch(() => setApplications([]));
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
    if (window.confirm("Are you sure to delete this message?")) {
      await axios.delete(`http://localhost:5000/api/contact-messages/${id}`, {
        headers: { Authorization: "Bearer " + token },
      });
      fetchMessages();
    }
  };

  // Tawk.to: load only on Admin page and clean up on unmount
  useEffect(() => {
    // Do not load if already present
    if (document.getElementById("tawk-embed-script")) return;

    const s1 = document.createElement("script");
    s1.id = "tawk-embed-script";
    s1.async = true;
    s1.src = "https://embed.tawk.to/69048183b22c021953b686b7/1j8spjqso";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(s1, firstScript);

    return () => {
      // remove widget script and global object when leaving Admin
      const existing = document.getElementById("tawk-embed-script");
      if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
      // try to remove the injected iframe/container if present
      const tawkContainer = document.querySelector("#tawkchat-container, #tawk_visitor, iframe[src*='tawk.to']");
      if (tawkContainer && tawkContainer.parentNode) tawkContainer.parentNode.removeChild(tawkContainer);
      window.Tawk_API = undefined;
    };
  }, []); // mount once on Admin render [web:213][web:208]

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

      {/* Contact Messages Table */}
      <div className="admin-panel-wrapper">
        <h2>All Contact Messages</h2>
        {loading && <div>Loading...</div>}
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id}>
                <td>{msg.id}</td>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.message}</td>
                <td>{msg.phone}</td>
                <td>{msg.createdAt}</td>
                <td>
                  <button
                    className="admin-delete-btn"
                    onClick={() => handleDelete(msg.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Job Applications Table */}
      <div className="admin-panel-wrapper">
        <h2>Job Applications</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
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
            {applications.map((app) => (
              <tr key={app.id}>
                <td>{app.id}</td>
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

                <td style={{ whiteSpace: "pre-wrap", maxWidth: 250 }}>
                  {app.message}
                </td>
                <td>
                  {app.appliedAt && new Date(app.appliedAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Job Openings Admin */}
      <JobsAdmin token={token} />
    </div>
  );
};

export default AdminPanel;
