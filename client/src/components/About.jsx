export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2>About Me</h2>
        <p>
          AI Developer with hands-on experience in RAG, Multi-Agent AI,
          LangChain, and full-stack development. Passionate about building
          intelligent, explainable AI systems using modern LLM frameworks
          including LangChain, LangGraph, and RAG architectures.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>Education</h3>
          <div className="list">
            <div className="list-row">
              <span>B.Tech CSE (AI &amp; ML)</span>
              <span>IILM University, Greater Noida</span>
              <span>2023–2027</span>
            </div>
            <div className="list-row">
              <span style={{ color: 'var(--accent-2)' }}>CGPA: 8.38 / 10.0</span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="about-card">
          <h3>Achievements</h3>
          <div className="chip-grid">
            <span className="chip">Won Naukri Campus Young Turks 2025</span>
            <span className="chip">Hackathon Participant (Competitive AI Problem Solving)</span>
            <span className="chip">Active on LeetCode, HackerRank &amp; Codeforces</span>
            <span className="chip">School House Captain (2 consecutive years)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
