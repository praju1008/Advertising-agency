import React, { useEffect, useState } from "react";
import axios from "axios";

const JobsAdmin = ({ token }) => {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editing, setEditing] = useState(null); // job being edited
  const [loading, setLoading] = useState(false);

  const authHeader = { Authorization: "Bearer " + token };

  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/jobs", {
        headers: authHeader,
      });
      setJobs(res.data?.data || []);
    } catch {
      setJobs([]);
    }
  };

  useEffect(() => {
    if (token) fetchJobs();
    // eslint-disable-next-line
  }, [token]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setEditing(null);
  };

  const handleAdd = async () => {
    if (!title.trim()) return;
    setLoading(true);
    try {
      await axios.post(
        "http://localhost:5000/api/jobs",
        { title: title.trim(), description: description.trim() },
        { headers: authHeader }
      );
      resetForm();
      fetchJobs();
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    if (!editing) return;
    if (!title.trim()) return;
    setLoading(true);
    try {
      await axios.put(
        `http://localhost:5000/api/jobs/${editing.id}`,
        { title: title.trim(), description: description.trim() },
        { headers: authHeader }
      );
      resetForm();
      fetchJobs();
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (job) => {
    if (!window.confirm(`Delete "${job.title}"?`)) return;
    setLoading(true);
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${job.id}`, {
        headers: authHeader,
      });
      // Optimistic update then refetch to keep order consistent
      setJobs((prev) => prev.filter((j) => j.id !== job.id));
      fetchJobs();
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (job) => {
    setEditing(job);
    setTitle(job.title || "");
    setDescription(job.description || "");
  };

  return (
    <div className="admin-panel-wrapper">
      <h2>Job Openings</h2>

      {/* Add / Edit form */}
      <div className="admin-jobs-toolbar" style={{ background: "#fff7d6", padding: 12, borderRadius: 8, marginBottom: 12 }}>
        <input
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: 220, marginRight: 12 }}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: 320, marginRight: 12 }}
        />
        {!editing ? (
          <button onClick={handleAdd} disabled={loading}>
            {loading ? "Adding..." : "Add Job"}
          </button>
        ) : (
          <>
            <button onClick={handleUpdate} disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </button>
            <button onClick={resetForm} style={{ marginLeft: 8 }} disabled={loading}>
              Cancel
            </button>
          </>
        )}
      </div>

      {/* Jobs table (SL No. instead of ID) */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>SL No.</th>
            <th>Title</th>
            <th>Description</th>
            <th>Posted At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>No openings</td>
            </tr>
          ) : (
            jobs.map((job, idx) => (
              <tr key={job.id}>
                {/* Serial number that always re-indexes 1..N */}
                <td>{idx + 1}</td>
                <td>{job.title}</td>
                <td style={{ whiteSpace: "pre-wrap" }}>{job.description}</td>
                <td>{job.createdAt || job.postedAt || "—"}</td>
                <td>
                  <button className="admin-edit-btn" onClick={() => startEdit(job)} disabled={loading}>
                    Edit
                  </button>
                  <button className="admin-delete-btn" onClick={() => handleDelete(job)} disabled={loading} style={{ marginLeft: 8 }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default JobsAdmin;
