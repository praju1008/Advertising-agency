import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Admin & Auth
import AdminPanel from './pages/AdminPanel';
import AdminLogin from './pages/AdminLogin';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Career from './pages/Career';
import Contact from './pages/Contact';

function App() {
  const [token, setToken] = useState(localStorage.getItem('admin_token') || '');

  // Private route: redirect to login if not authenticated
  const PrivateRoute = ({ children }) => (
    token ? children : <Navigate to="/admin-login" replace />
  );

  return (
    <Router>
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          {/* Admin login (ALWAYS shows login form) */}
          <Route path="/admin-login" element={<AdminLogin setToken={setToken} />} />
          {/* Protected admin panel (shows panel only if token set) */}
          <Route path="/admin" element={
            <PrivateRoute>
              <AdminPanel token={token} />
            </PrivateRoute>
          } />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
