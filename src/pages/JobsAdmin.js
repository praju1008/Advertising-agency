import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AdminPanel.css';
const JobsAdmin = ({ token }) => {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({ id: null, title: '', description: '' });
  const [editing, setEditing] = useState(false);

  const fetchJobs = () =>
    axios.get('http://localhost:5000/api/jobs', { headers: {Authorization:'Bearer '+token}})
      .then(res => setJobs(res.data.data));

  useEffect(() => { fetchJobs(); }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    if (editing) {
      await axios.put(`http://localhost:5000/api/jobs/${form.id}`, { title: form.title, description: form.description }, { headers: {Authorization:'Bearer '+token}});
    } else {
      await axios.post('http://localhost:5000/api/jobs', { title: form.title, description: form.description }, {headers:{Authorization:'Bearer '+token}});
    }
    setForm({ id: null, title: '', description: '' });
    setEditing(false);
    fetchJobs();
  };

  const handleEdit = (job) => {
    setEditing(true);
    setForm(job);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this job?')) {
      await axios.delete(`http://localhost:5000/api/jobs/${id}`, { headers: {Authorization:'Bearer '+token}});
      fetchJobs();
    }
  };

  return (
    <div className="admin-panel-wrapper">
      <h2>Job Openings</h2>
      <form className="admin-form" onSubmit={handleSave}>
        <input
          value={form.title}
          onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
          placeholder="Job Title"
          required
        />
        <input
          value={form.description}
          onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
          placeholder="Description"
        />
        <button type="submit">{editing ? "Update" : "Add"} Job</button>
        {editing && <button type="button" onClick={() => {setEditing(false);setForm({id:null,title:'',description:''});}}>Cancel</button>}
      </form>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th><th>Title</th><th>Description</th><th>Posted At</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job.id}>
              <td>{job.id}</td>
              <td>{job.title}</td>
              <td>{job.description}</td>
              <td>{job.postedAt}</td>
              <td>
                <button className="admin-edit-btn" onClick={() => handleEdit(job)}>Edit</button>
                <button className="admin-delete-btn" onClick={() => handleDelete(job.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsAdmin;
