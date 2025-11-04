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

  // Per-row status update state
  const [updatingId, setUpdatingId] = useState(null);
  const [nextStatus, setNextStatus] = useState(null);

  // Optional toast notification
  const [toast, setToast] = useState(null);
  const showAdminToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };

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

  // Accept/Reject handler (with warning on reject, and row removal on reject)
  const updateApplicationStatus = async (app, status) => {
    if (!app?.id) return;

    // Warn admin on reject
    if (status === "rejected") {
      const ok = window.confirm(
        `Are you sure you want to reject application from ${app.name}?`
      );
      if (!ok) return;
    }

    setUpdatingId(app.id);
    setNextStatus(status);
    setLoading(true);
    try {
      await axios.put(
        `http://localhost:5000/api/job-applications/${app.id}/status`,
        { status },
        { headers: authHeader }
      );

      if (status === "rejected") {
        // Remove the row immediately after successful reject
        setApplications((prev) => prev.filter((a) => a.id !== app.id));
        showAdminToast(`Rejected application from ${app.name}`);
      } else {
        // Otherwise just update status in place
        setApplications((prev) =>
          prev.map((a) => (a.id === app.id ? { ...a, status } : a))
        );
        showAdminToast(`Accepted application from ${app.name}`);
      }
    } finally {
      setLoading(false);
      setUpdatingId(null);
      setNextStatus(null);
    }
  };

  if (!token) return <AdminLogin setToken={setToken} />;

  return (
    <div>
      {toast && <div className="admin-toast">{toast}</div>}

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

        {/* Mobile cards */}
        <div className="apps-cards">
          {applications.length === 0 ? (
            <div className="apps-empty">No applications</div>
          ) : (
            applications.map((app, idx) => (
              <div className="app-card" key={app.id}>
                <div className="app-card-row">
                  <span className="badge badge-index">#{idx + 1}</span>
                  <span className={`badge ${app.status ? `badge-${app.status}` : 'badge-pending'}`}>
                    {app.status ? app.status : 'pending'}
                  </span>
                </div>

                <div className="app-card-row">
                  <div className="app-label">Job</div>
                  <div className="app-value">{app.jobTitle || app.jobId}</div>
                </div>

                <div className="app-card-row">
                  <div className="app-label">Name</div>
                  <div className="app-value">{app.name}</div>
                </div>

                <div className="app-card-row">
                  <div className="app-label">Email</div>
                  <div className="app-value">{app.email}</div>
                </div>

                <div className="app-card-row">
                  <div className="app-label">Phone</div>
                  <div className="app-value">{app.phone}</div>
                </div>

                <div className="app-card-row">
                  <div className="app-label">Resume</div>
                  <div className="app-value">
                    {app.resume ? (
                      <a
                        className="link-file"
                        href={`http://localhost:5000/uploads/${app.resume}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resume
                      </a>
                    ) : '—'}
                  </div>
                </div>

                <div className="app-card-row">
                  <div className="app-label">Message</div>
                  <div className="app-value" style={{ whiteSpace: 'pre-wrap' }}>
                    {app.message || '—'}
                  </div>
                </div>

                <div className="app-card-row">
                  <div className="app-label">Applied</div>
                  <div className="app-value">
                    {app.appliedAt && new Date(app.appliedAt).toLocaleString()}
                  </div>
                </div>

                <div className="app-actions">
                  <button
                    className="btn-accept"
                    disabled={loading}
                    onClick={() => updateApplicationStatus(app, 'accepted')}
                    title="Accept"
                  >
                    {loading && updatingId === app.id && nextStatus === 'accepted'
                      ? 'Accepting…'
                      : 'Accept'}
                  </button>
                  <button
                    className="btn-reject"
                    disabled={loading}
                    onClick={() => updateApplicationStatus(app, 'rejected')}
                    title="Reject"
                  >
                    {loading && updatingId === app.id && nextStatus === 'rejected'
                      ? 'Rejecting…'
                      : 'Reject'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Desktop table */}
        <table className="admin-table apps-table">
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
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.length === 0 ? (
              <tr>
                <td colSpan={10} style={{ textAlign: "center" }}>No applications</td>
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
                        className="link-file"
                        href={`http://localhost:5000/uploads/${app.resume}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resume
                      </a>
                    ) : '—'}
                  </td>
                  <td style={{ whiteSpace: "pre-wrap", maxWidth: 250 }}>{app.message}</td>
                  <td>{app.appliedAt && new Date(app.appliedAt).toLocaleString()}</td>
                  <td>
                    <span className={`badge ${app.status ? `badge-${app.status}` : 'badge-pending'}`}>
                      {app.status ? app.status : 'pending'}
                    </span>
                  </td>
                  <td>
                    <div className="apps-actions-inline">
                      <button
                        className="btn-accept"
                        disabled={loading}
                        onClick={() => updateApplicationStatus(app, 'accepted')}
                      >
                        {loading && updatingId === app.id && nextStatus === 'accepted'
                          ? 'Accepting…'
                          : 'Accept'}
                      </button>
                      <button
                        className="btn-reject"
                        disabled={loading}
                        onClick={() => updateApplicationStatus(app, 'rejected')}
                      >
                        {loading && updatingId === app.id && nextStatus === 'rejected'
                          ? 'Rejecting…'
                          : 'Reject'}
                      </button>
                    </div>
                  </td>
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
