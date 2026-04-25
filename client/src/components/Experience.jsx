export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <h2>Experience</h2>
        <p>Industry exposure and production-level AI development.</p>
      </div>

      <div className="experience-card" style={{ marginBottom: '20px' }}>
        <div className="exp-head">
          <h3>AI/ML Engineer Intern</h3>
          <span>Google AI/ML Internship (via Eduskill) · Feb 2026 – Present</span>
        </div>
        <div className="exp-body">
          <p>
            Developed Python-based AI pipelines for ML model training, evaluation, and API integration within the Google AI/ML track. Built an AI Job Portal capstone using MERN stack with Python ML microservices, integrating NLP-based resume parsing and intelligent recommendation APIs. Explored LangChain and RAG-based architectures for intelligent retrieval workflows.
          </p>
        </div>
      </div>

      <div className="experience-card">
        <div className="exp-head">
          <h3>AI Developer Intern</h3>
          <span>AI &amp; Generative AI Internship · Jun 2025 – Jul 2025</span>
        </div>
        <div className="exp-body">
          <p>
            Built responsive AI-powered web applications integrating Python ML/NLP pipelines with Flask and FastAPI backends. Deployed AI applications to cloud platforms using Streamlit and Render, reducing model-to-production deployment time by ~40%. Integrated third-party APIs and generative AI features into full-stack applications.
          </p>
        </div>
      </div>
    </section>
  );
}
