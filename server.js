import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import multer from "multer";
import db from "./db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// File uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });
app.use('/uploads', express.static('uploads'));

const ADMIN_USER = "admin";
const ADMIN_PASS = "admin";
const JWT_SECRET = "Praju@1008";

// Admin check middleware
const requireAdmin = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ success: false, message: "No token" });
  try {
    const token = auth.split(" ")[1];
    jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};

// Admin login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const token = jwt.sign({ admin: true }, JWT_SECRET, { expiresIn: '8h' });
    return res.json({ success: true, token });
  }
  res.status(401).json({ success: false, message: "Unauthorized" });
});

// CONTACTS (admin)
app.get('/api/contact-messages', requireAdmin, (req, res) => {
  db.query('SELECT * FROM contact_messages ORDER BY id DESC', (err, results) => {
    if (err) return res.status(500).json({ success: false, error: err.message });
    res.json({ success: true, data: results });
  });
});
app.delete('/api/contact-messages/:id', requireAdmin, (req, res) => {
  const msgId = req.params.id;
  db.query('DELETE FROM contact_messages WHERE id = ?', [msgId], (err, result) => {
    if (err) return res.status(500).json({ success: false, error: err.message });
    res.json({ success: true, message: "Deleted" });
  });
});

// CONTACT FORM (public)
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    db.query(
      "INSERT INTO contact_messages (name, email, phone, message) VALUES (?, ?, ?, ?)",
      [name, email, phone, message],
      async (err, result) => {
        if (err) return res.status(500).json({ success: false, error: err.message });

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
        });

        const mailHtml = `
          <h2 style="color:#124388;">New Contact Message</h2>
          <table cellpadding="8" style="border-collapse:collapse;">
            <tr><td><b>Name</b></td><td>${name}</td></tr>
            <tr><td><b>Email</b></td><td>${email}</td></tr>
            <tr><td><b>Phone</b></td><td>${phone}</td></tr>
            <tr><td><b>Message</b></td><td>${message.replace(/\n/g, "<br>")}</td></tr>
          </table>
          <p style="color:#888;font-size:13px;">Sent at ${new Date().toLocaleString()}</p>
        `;
        await transporter.sendMail({
          from: `"Website Contact" <${process.env.MAIL_USER}>`,
          to: process.env.RECEIVER_EMAIL,
          subject: 'New Contact Form Message',
          html: mailHtml,
        });

        res.status(200).json({ success: true, message: 'Stored and emailed!' });
      }
    );
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// JOBS (public + admin)
app.get('/api/jobs', (req, res) => {
  db.query('SELECT * FROM jobs ORDER BY id DESC', (err, results) => {
    if (err) return res.status(500).json({ success: false, error: err.message });
    res.json({ success: true, data: results });
  });
});
app.post('/api/jobs', requireAdmin, (req, res) => {
  const { title, description } = req.body;
  db.query('INSERT INTO jobs (title, description) VALUES (?, ?)', [title, description], (err, result) => {
    if (err) return res.status(500).json({ success: false, error: err.message });
    res.json({ success: true, insertedId: result.insertId });
  });
});
app.put('/api/jobs/:id', requireAdmin, (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  db.query('UPDATE jobs SET title=?, description=? WHERE id=?', [title, description, id], (err, result) => {
    if (err) return res.status(500).json({ success: false, error: err.message });
    res.json({ success: true });
  });
});
app.delete('/api/jobs/:id', requireAdmin, (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM jobs WHERE id=?', [id], (err, result) => {
    if (err) return res.status(500).json({ success: false, error: err.message });
    res.json({ success: true });
  });
});

// JOB APPLICATION FORM (file upload)
app.post('/api/job-apply', upload.single("resume"), (req, res) => {
  const { jobId, jobTitle, name, email, phone, message } = req.body;
  const resumeFile = req.file ? req.file.filename : null;

  db.query(
    'INSERT INTO job_applications (jobId, jobTitle, name, email, phone, resume, message) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [jobId, jobTitle, name, email, phone, resumeFile, message],
    (err, result) => {
      if (err) return res.status(500).json({ success: false, error: err.message });

      res.json({ success: true });
    }
  );
});

// ADMIN: Get all job applications
app.get('/api/job-applications', requireAdmin, (req, res) => {
  db.query('SELECT * FROM job_applications ORDER BY appliedAt DESC', (err, results) => {
    if (err) return res.status(500).json({ success: false, error: err.message });
    res.json({ success: true, data: results });
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
});
