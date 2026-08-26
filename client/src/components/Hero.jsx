export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-content">
        <p className="eyebrow">AI &amp; ML Engineer · Java · LangChain · RAG · MERN</p>
        <h1>Vishal Singh Kushwaha</h1>
        <p className="subtitle">
          B.Tech CSE (AI &amp; ML) student at IILM University (CGPA: 7.9) with 3 internships delivering real-world ML and full-stack projects. Strong foundation in Java (primary language), DSA, and OOP with hands-on experience in Python, ML pipelines, LangChain, and MERN stack. Built deployed AI apps, a RAG-based ESG system (AWS Bedrock + FAISS), and an LSTM stock forecasting model (98.55% accuracy). AWS certified in ML, Generative AI, and Agentic AI.
        </p>
        <div className="cta-row">
          <a className="btn primary" href="#projects">
            View Projects
          </a>
          <a className="btn ghost" href="#contact">
            Contact
          </a>
        </div>
        <div className="quick-info">
          <span>Greater Noida</span>
          <span>singhkushwahavishal344@gmail.com</span>
          <span>+91-7755090060</span>
        </div>
      </div>

      <div className="hero-card">
        <div className="monogram">VK</div>
        <div className="card-text">
          <p className="card-title">B.Tech CSE (AI &amp; ML)</p>
          <p>IILM University · CGPA: 7.9 · 2023–2027</p>
          <div className="socials">
            <a
              href="https://github.com/vissinkus1"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-singh-kushwaha27"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

