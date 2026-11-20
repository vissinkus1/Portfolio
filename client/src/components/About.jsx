export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2>About Me</h2>
        <p>
          Final-year B.Tech CSE (AI &amp; ML) student at IILM University, Greater Noida (CGPA: 7.92). I build end-to-end AI systems: RAG platforms with verifiable source citations, multi-agent pipelines (LangChain &amp; LangGraph), deep learning models (LSTM), and production full-stack MERN &amp; FastAPI applications deployed with Docker. Experienced across 5 industry internships including Cisco-AICTE, AWS Academy, Cognifyz, and YBI Foundation, alongside co-inventorship on a published patent application and a co-authored SAR remote sensing study. Strong foundation in Java (DSA &amp; OOP) and Python (ML/AI), with disciplined practices in model evaluation, Docker containerization, and automated testing (71 pytest tests). Currently targeting roles in ML Engineering, MLOps, Software Development, Full-Stack Development, and Agentic AI.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>Education</h3>
          <div className="list">
            <div className="list-row">
              <span>B.Tech CSE (AI &amp; ML)</span>
              <span>IILM University, Greater Noida</span>
              <span style={{ color: 'var(--accent-2)', fontWeight: '500' }}>2023–2027 · CGPA 7.92</span>
            </div>
            <div className="list-row">
              <span>Class 12th</span>
              <span>St. John's School, Ghazipur</span>
              <span style={{ color: 'var(--accent-2)', fontWeight: '500' }}>2022–2023 · 76.6%</span>
            </div>
            <div className="list-row">
              <span>Class 10th</span>
              <span>St. John's School, Ghazipur</span>
              <span style={{ color: 'var(--accent-2)', fontWeight: '500' }}>2020–2021 · 89.5%</span>
            </div>
          </div>
        </div>

        <div className="about-card">
          <h3>Achievements &amp; Leadership</h3>
          <div className="chip-grid">
            <span className="chip">Naukri Campus Young Turks 2025</span>
            <span className="chip">Hackathon – Green Illusions (Multi-Agent RAG System)</span>
            <span className="chip">Published Patent Application – Indian Patent Office (Aug 2026)</span>
            <span className="chip">School House Captain (2 consecutive years)</span>
            <span className="chip">Event Manager at School</span>
            <span className="chip">Active on LeetCode, HackerRank &amp; Codeforces</span>
          </div>
        </div>
      </div>
    </section>
  );
}
