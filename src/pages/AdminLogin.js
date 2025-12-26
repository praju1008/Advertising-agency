import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";

const AdminLogin = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setSubmitting(true);

    try {
      // PRODUCTION: GoDaddy backend
      const res = await axios.post(
        "http://timashettipublicity.in/api/admin/login",
        { username, password }
      );

      // LOCAL (use this only when testing locally)
      // const res = await axios.post("http://localhost:5000/api/admin/login", {
      //   username,
      //   password,
      // });

      // Save token to localStorage
      setToken(res.data.token);
      localStorage.setItem("admin_token", res.data.token);
      localStorage.setItem("admin_username", username);

      // Redirect to admin dashboard
      navigate("/admin");
    } catch (error) {
      if (error.response) {
        setErr(error.response.data.message || "Wrong credentials.");
      } else if (error.request) {
        setErr("Server not responding. Please check your connection.");
      } else {
        setErr("Something went wrong. Please try again.");
      }
      console.error("Login error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="admin-login-bg">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h3>Admin Login</h3>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoFocus
          disabled={submitting}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={submitting}
        />

        <button type="submit" disabled={submitting}>
          {submitting ? (
            <>
              <span className="admin-spinner" aria-hidden="true" />
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </button>

        {err && <div className="err">{err}</div>}
      </form>
    </div>
  );
};

export default AdminLogin;
