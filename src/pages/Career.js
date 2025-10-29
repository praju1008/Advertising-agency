import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Career.css';
import axios from 'axios';

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [showApply, setShowApply] = useState(false);
  const [applyingJob, setApplyingJob] = useState(null);
  const [applyForm, setApplyForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [resumeFile, setResumeFile] = useState(null);
  const [applyStatus, setApplyStatus] = useState('');
  const fileInputRef = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    axios.get('http://localhost:5000/api/jobs')
      .then(res => setJobs(res.data.data));
  }, []);

  const openApply = (job) => {
    setApplyingJob(job);
    setShowApply(true);
    setApplyStatus('');
    setApplyForm({ name: '', email: '', phone: '', message: '' });
    setResumeFile(null);
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  const handleApplyChange = e => {
    setApplyForm({ ...applyForm, [e.target.name]: e.target.value });
  };

  const handleFileChange = e => {
    setResumeFile(e.target.files[0]);
  };

  const handleApply = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(applyForm).forEach(key => formData.append(key, applyForm[key]));
    formData.append("jobId", applyingJob.id);
    formData.append("jobTitle", applyingJob.title);
    if (resumeFile) formData.append("resume", resumeFile);

    try {
      await axios.post('http://localhost:5000/api/job-apply', formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setApplyStatus('Application submitted! Thank you.');
      setApplyForm({ name: '', email: '', phone: '', message: '' });
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = null;
    } catch {
      setApplyStatus('There was an error submitting your application.');
    }
  };

  return (
    <div className="career-page">
      <section className="career-hero" data-aos="fade-up">
        <img src="/assets/images/career.jpg" alt="Careers at Naval" className="career-hero-img" />
        <div className="career-hero-overlay" />
      </section>
      <div className="career-content">
        <h2 className="career-title">CURRENT OPENINGS</h2>
        <p className="career-email">
          Send your resumes on <a href="mailto:tpadvtvjp@gmail.com">tpadvtvjp@gmail.com</a>
        </p>
        <div className="career-job-list">
          {jobs.length === 0 ? (
            <div style={{ textAlign: "center", color: "#bbb", fontSize: 19 }}>No current openings.</div>
          ) : (
            jobs.map((job, i) => (
              <div
                className="career-job-row"
                key={job.id}
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <div className="career-job-title">{job.title}</div>
                {job.description && (
                  <div className="career-job-desc">{job.description}</div>
                )}
                <button className="career-apply-btn" onClick={() => openApply(job)}>
                  Apply
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal for Apply */}
      {showApply && (
        <div className="apply-modal" onClick={() => setShowApply(false)}>
          <div className="apply-modal-content" onClick={e => e.stopPropagation()}>
            <button className="apply-modal-close" onClick={() => setShowApply(false)}>×</button>
            <h3>Apply for: {applyingJob?.title}</h3>
            <form className="apply-form" onSubmit={handleApply} encType="multipart/form-data">
              <input name="name" value={applyForm.name} onChange={handleApplyChange} required placeholder="Your Name" />
              <input name="email" value={applyForm.email} onChange={handleApplyChange} required placeholder="Your Email" type="email" />
              <input name="phone" value={applyForm.phone} onChange={handleApplyChange} required placeholder="Your Phone" />
              <label style={{ marginTop: '0.6rem' }}>Upload Resume (PDF/DOC):
                <input
                  ref={fileInputRef}
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  style={{ marginTop: '8px' }}
                  required
                />
              </label>
              <textarea name="message" value={applyForm.message} onChange={handleApplyChange} placeholder="Message/Intro" rows={3} />
              <button type="submit" className="career-apply-submit">Submit Application</button>
            </form>
            {applyStatus && <div className="apply-status">{applyStatus}</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
