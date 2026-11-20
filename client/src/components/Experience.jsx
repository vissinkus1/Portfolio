export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <h2>Work Experience &amp; Internships</h2>
        <p>Industry internships delivering production AI/ML systems, data engineering pipelines, and full-stack applications (newest first).</p>
      </div>

      {/* 1. Cisco-AICTE */}
      <div className="experience-card" style={{ marginBottom: '20px' }}>
        <div className="exp-head">
          <div>
            <h3>AI Intern</h3>
            <p style={{ color: 'var(--accent)', fontSize: '14px', marginTop: '2px', fontWeight: '500' }}>
              Cisco-AICTE Virtual Internship (Networking Academy)
            </p>
          </div>
          <span>Jun 2026 – Aug 2026</span>
        </div>
        <div className="exp-body">
          <p style={{ fontWeight: '500', color: 'var(--text)', marginBottom: '8px' }}>
            Built NetSage AI: An AI-powered Cisco network troubleshooting system combining deterministic rules with LLM reasoning.
          </p>
          <ul className="project-bullets" style={{ marginBottom: 0 }}>
            <li>
              Engineered a hybrid diagnostic architecture combining deterministic rule-based fault detection with a live Google Gemini API diagnosis engine.
            </li>
            <li>
              Curated a 34-case labeled ground-truth evaluation set across 9 Cisco fault domains, deliberately testing ambiguous cases to evaluate safe abstention behavior.
            </li>
            <li>
              Implemented 6 deterministic rule functions backed by a 71-test automated pytest suite across 8 test files covering rule logic, schema correctness, and API resilience.
            </li>
            <li>
              Integrated Gemini API with exponential retry/backoff and resumable batch processing to safely handle quota and rate-limit constraints.
            </li>
            <li>
              Delivered a Streamlit human-in-the-loop review app and metrics dashboard; achieved 100% schema-valid LLM output and a 76.5% human-verified agreement rate (26 Accepted / 4 Edited / 4 Rejected) recorded in a responsible-AI correction log.
            </li>
            <li>
              Identified and resolved 2 critical evaluation-pipeline bugs through structured root-cause analysis; authored a 13-slide presentation, 4-page summary, 8-page project report, and internship evaluation dossier.
            </li>
          </ul>
          <div className="tag-row" style={{ marginTop: '12px' }}>
            <span>Python</span>
            <span>Google Gemini API</span>
            <span>Streamlit</span>
            <span>pytest (71 tests)</span>
            <span>LangChain</span>
            <span>JSON Schema</span>
          </div>
          {/* GitHub & Certificate links: [ADD LINK] */}
        </div>
      </div>

      {/* 2. AWS Data Engineering */}
      <div className="experience-card" style={{ marginBottom: '20px' }}>
        <div className="exp-head">
          <div>
            <h3>Data Engineering Intern</h3>
            <p style={{ color: 'var(--accent)', fontSize: '14px', marginTop: '2px', fontWeight: '500' }}>
              AWS Academy (via EduSkills / AICTE)
            </p>
          </div>
          <span>Apr 2026 – Jun 2026 · <strong style={{ color: '#4ade80' }}>Grade O (Outstanding)</strong></span>
        </div>
        <div className="exp-body">
          <ul className="project-bullets" style={{ marginBottom: 0 }}>
            <li>
              Completed a 10-week intensive Data Engineering virtual internship based on AWS Academy curriculum, recognized by AICTE and the Ministry of Education via the National Internship Portal.
            </li>
            <li>
              Awarded <strong>Grade O (Outstanding)</strong> for overall performance across cloud data engineering modules.
            </li>
            <li>
              Built and configured cloud-based data ingestion pipelines, automated ETL workflows, and cloud data infrastructure on AWS.
            </li>
          </ul>
          <div className="tag-row" style={{ marginTop: '12px' }}>
            <span>AWS</span>
            <span>Data Engineering</span>
            <span>ETL Pipelines</span>
            <span>Cloud Infrastructure</span>
          </div>
          {/* Certificate link: [ADD LINK] */}
        </div>
      </div>

      {/* 3. Cognifyz Technologies */}
      <div className="experience-card" style={{ marginBottom: '20px' }}>
        <div className="exp-head">
          <div>
            <h3>Machine Learning Intern</h3>
            <p style={{ color: 'var(--accent)', fontSize: '14px', marginTop: '2px', fontWeight: '500' }}>
              Cognifyz Technologies (Remote)
            </p>
          </div>
          <span>Apr 2026 – May 2026</span>
        </div>
        <div className="exp-body">
          <ul className="project-bullets" style={{ marginBottom: 0 }}>
            <li>
              Executed end-to-end ML workflow on the Zomato restaurant dataset (9,551 records, 21 columns) covering data cleaning, EDA, and feature engineering.
            </li>
            <li>
              Built restaurant rating prediction models (Linear Regression and Decision Tree), achieving R²: 0.52 and identifying customer votes as the single strongest feature (82.7% importance).
            </li>
            <li>
              Engineered a content-based recommendation system spanning 146 cuisines and 141 cities using Pandas and Scikit-learn.
            </li>
            <li>
              Conducted location-based geospatial data analysis and visualization across 15 countries via Folium and Seaborn to inform expansion strategy; authored comprehensive technical reports for every milestone.
            </li>
          </ul>
          <div className="tag-row" style={{ marginTop: '12px' }}>
            <span>Python</span>
            <span>Pandas</span>
            <span>Scikit-learn</span>
            <span>Matplotlib</span>
            <span>Seaborn</span>
            <span>Folium</span>
            <span>Jupyter</span>
          </div>
          {/* Certificate / offer letter / GitHub / LinkedIn post: [ADD LINK] */}
        </div>
      </div>

      {/* 4. Google AI/ML EduSkill */}
      <div className="experience-card" style={{ marginBottom: '20px' }}>
        <div className="exp-head">
          <div>
            <h3>AI/ML Intern</h3>
            <p style={{ color: 'var(--accent)', fontSize: '14px', marginTop: '2px', fontWeight: '500' }}>
              Google AI/ML Virtual Internship (EduSkill)
            </p>
          </div>
          <span>Feb 2026 – Apr 2026</span>
        </div>
        <div className="exp-body">
          <ul className="project-bullets" style={{ marginBottom: 0 }}>
            <li>
              Built AI Job Portal capstone integrating LangChain-based intelligent job-matching and NLP resume parsing microservices into a full MERN stack application.
            </li>
            <li>
              Connected React.js frontend to Node.js/Express.js REST API backend with asynchronous data handling for real-time recommendations.
            </li>
            <li>
              Trained supervised machine learning models (classification and regression) with hyperparameter tuning and systematic model evaluation.
            </li>
          </ul>
          <div className="tag-row" style={{ marginTop: '12px' }}>
            <span>MERN Stack</span>
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>LangChain</span>
            <span>NLP</span>
            <span>REST APIs</span>
          </div>
        </div>
      </div>

      {/* 5. YBI Foundation */}
      <div className="experience-card">
        <div className="exp-head">
          <div>
            <h3>AI &amp; Generative AI Intern</h3>
            <p style={{ color: 'var(--accent)', fontSize: '14px', marginTop: '2px', fontWeight: '500' }}>
              YBI Foundation
            </p>
          </div>
          <span>Jun 2025 – Jul 2025</span>
        </div>
        <div className="exp-body">
          <ul className="project-bullets" style={{ marginBottom: 0 }}>
            <li>
              Developed and deployed Python ML/NLP pipelines and conversational AI features as live Flask REST API &amp; Streamlit web applications on Render.
            </li>
            <li>
              Reduced model-to-production deployment turnaround by ~40% through streamlined deployment pipelines and reusable component architecture.
            </li>
            <li>
              Maintained version control via Git/GitHub, performed post-deployment logging analysis, and resolved production runtime issues.
            </li>
          </ul>
          <div className="tag-row" style={{ marginTop: '12px' }}>
            <span>Python</span>
            <span>Flask</span>
            <span>Streamlit</span>
            <span>NLP</span>
            <span>Git/GitHub</span>
            <span>Render</span>
          </div>
          {/* Certificate: [ADD LINK] */}
        </div>
      </div>
    </section>
  );
}
