export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <h2>Work Experience</h2>
        <p>Industry internships delivering real-world ML models, full-stack pipelines, and production AI apps.</p>
      </div>

      <div className="experience-card" style={{ marginBottom: '20px' }}>
        <div className="exp-head">
          <h3>ML Intern</h3>
          <span>Cognifyz Technologies · Apr 2026 – May 2026</span>
        </div>
        <div className="exp-body">
          <p>
            Built restaurant rating prediction model (Linear Regression + Decision Tree) on 9,551 records — R²: 0.52; identified customer votes as strongest feature (82.7% importance). Developed content-based recommendation system across 146 cuisines, 141 cities; geospatial analysis of 15 countries via Folium + Seaborn.
          </p>
        </div>
      </div>

      <div className="experience-card" style={{ marginBottom: '20px' }}>
        <div className="exp-head">
          <h3>AI/ML Intern</h3>
          <span>Google AI/ML Virtual Internship (EduSkill) · Feb 2026 – Apr 2026</span>
        </div>
        <div className="exp-body">
          <p>
            Trained supervised ML models (classification &amp; regression) with hyperparameter tuning; built AI Job Portal capstone using MERN stack + LangChain job-matching + NLP resume parsing microservices.
          </p>
        </div>
      </div>

      <div className="experience-card">
        <div className="exp-head">
          <h3>AI &amp; GenAI Intern</h3>
          <span>YBI Foundation · Jun 2025 – Jul 2025</span>
        </div>
        <div className="exp-body">
          <p>
            Deployed Python ML/NLP pipelines as live Flask &amp; Streamlit apps on Render, reducing model-to-production time by ~40%. Maintained version-controlled development via Git/GitHub; monitored post-deployment reliability of AI-powered features.
          </p>
        </div>
      </div>
    </section>
  );
}

