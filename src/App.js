import React, { useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [applications, setApplications] = useState([]);
  const [applicantData, setApplicantData] = useState({ name: "", email: "", contact: "", education: "", address: "" });

  const postJob = () => {
    if (jobTitle && jobDescription) {
      setJobs([...jobs, { title: jobTitle, description: jobDescription }]);
      setJobTitle("");
      setJobDescription("");
    }
  };

  const applyForJob = (jobIndex) => {
    if (applicantData.name && applicantData.email && applicantData.contact && applicantData.education && applicantData.address) {
      setApplications([...applications, { job: jobs[jobIndex], ...applicantData }]);
      setApplicantData({ name: "", email: "", contact: "", education: "", address: "" });
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Job Board</h1>

      {/* Job Posting Section */}
      <div style={styles.section}>
        <h2>Post a Job</h2>
        <input type="text" placeholder="Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} style={styles.input} />
        <input type="text" placeholder="Job Description" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} style={styles.input} />
        <button onClick={postJob} style={styles.button}>Post Job</button>
      </div>

      {/* Job Listings */}
      <div style={styles.section}>
        <h2>Available Jobs</h2>
        {jobs.length === 0 ? <p>No jobs posted yet.</p> : jobs.map((job, index) => (
          <div key={index} style={styles.jobCard}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>

            {/* Job Application Form */}
            <h4>Apply for this Job</h4>
            <input type="text" placeholder="Your Name" value={applicantData.name} onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })} style={styles.input} />
            <input type="email" placeholder="Your Email" value={applicantData.email} onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })} style={styles.input} />
            <input type="text" placeholder="Your Contact" value={applicantData.contact} onChange={(e) => setApplicantData({ ...applicantData, contact: e.target.value })} style={styles.input} />
            <input type="text" placeholder="Your Education" value={applicantData.education} onChange={(e) => setApplicantData({ ...applicantData, education: e.target.value })} style={styles.input} />
            <input type="text" placeholder="Your Address" value={applicantData.address} onChange={(e) => setApplicantData({ ...applicantData, address: e.target.value })} style={styles.input} />
            <button onClick={() => applyForJob(index)} style={styles.button}>Apply</button>
          </div>
        ))}
      </div>

      {/* Applications List */}
      <div style={styles.section}>
        <h2>Applications</h2>
        {applications.length === 0 ? <p>No applications submitted yet.</p> : applications.map((app, index) => (
          <div key={index} style={styles.applicationCard}>
            <h3>Applied for: {app.job.title}</h3>
            <p><strong>Name:</strong> {app.name}</p>
            <p><strong>Email:</strong> {app.email}</p>
            <p><strong>Contact:</strong> {app.contact}</p>
            <p><strong>Education:</strong> {app.education}</p>
            <p><strong>Address:</strong> {app.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    color: "#333",
  },
  section: {
    marginBottom: "20px",
    padding: "10px",
    borderBottom: "2px solid #ddd",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "5px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    width: "100%",
    marginTop: "10px",
    borderRadius: "5px",
    fontSize: "16px",
  },
  jobCard: {
    border: "1px solid #ddd",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  applicationCard: {
    border: "1px solid #28a745",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "5px",
    backgroundColor: "#e8f5e9",
  },
};

export default App;
