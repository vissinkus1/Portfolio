export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2>About Me</h2>
        <p>
          B.Tech CSE (AI &amp; ML) student at IILM University (CGPA: 7.9) with 3 internships delivering real-world ML and full-stack projects. Strong foundation in Java (primary language), DSA, and OOP with hands-on experience in Python, ML pipelines, LangChain, and MERN stack. Built deployed AI apps, a RAG-based ESG system (AWS Bedrock + FAISS), and an LSTM stock forecasting model (98.55% accuracy). AWS certified in ML, Generative AI, and Agentic AI.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>Education</h3>
          <div className="list">
            <div className="list-row">
              <span>B.Tech CSE (AI &amp; ML)</span>
              <span>IILM University, Greater Noida</span>
              <span style={{ color: 'var(--accent-2)', fontWeight: '500' }}>2023–2027 · CGPA 7.9</span>
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
          <h3>Achievements</h3>
          <div className="chip-grid">
            <span className="chip">Naukri Campus Young Turks 2025</span>
            <span className="chip">Hackathon Participant – Green Illusions (RAG + Multi-Agent AI)</span>
            <span className="chip">School House Captain (2 consecutive years)</span>
            <span className="chip">Active on LeetCode, HackerRank &amp; Codeforces</span>
          </div>
        </div>
      </div>
    </section>
  );
}

