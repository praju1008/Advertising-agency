import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminLogin.css';

const AdminLogin = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setErr('');
    setSubmitting(true);
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', { username, password });
      setToken(res.data.token);
      localStorage.setItem('admin_token', res.data.token);
      navigate('/admin');
    } catch {
      setErr('Wrong credentials.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="admin-login-bg">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h3>Admin Login</h3>

        <input
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          autoFocus
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit" disabled={submitting}>
          {submitting ? (
            <>
              <span className="admin-spinner" aria-hidden="true" />
              Logging in...
            </>
          ) : (
            'Login'
          )}
        </button>

        {err && <div className="err">{err}</div>}
      </form>
    </div>
  );
};

export default AdminLogin;
