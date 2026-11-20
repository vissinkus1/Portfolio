export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-content">
        <p className="eyebrow">
          Final-year B.Tech CSE (AI &amp; ML) student · ML Engineer · Full-Stack Developer · Agentic AI builder
        </p>
        <h1>Vishal Singh Kushwaha</h1>
        <p className="subtitle">
          Final-year B.Tech CSE (AI &amp; ML) student at IILM University, Greater Noida. I build end-to-end AI systems: RAG platforms, multi-agent pipelines, ML models and full-stack web apps, and deploy them with Docker. Currently looking for roles in ML engineering, MLOps, software development, full-stack development and agentic AI.
        </p>
        <div className="cta-row">
          <a className="btn primary" href="#projects">
            View Projects
          </a>
          <a className="btn ghost" href="#contact">
            Contact
          </a>
          {/* Resume (PDF) placeholder - Upload latest one-page resume to client/public/resume.pdf when available:
          <a className="btn ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Resume (PDF)</a> */}
        </div>
        <div className="quick-info">
          <span>Greater Noida, India</span>
          <span>singhkushwahavishal344@gmail.com</span>
          <span>+91-7755090060</span>
        </div>
      </div>

      <div className="hero-card">
        <div className="monogram">VK</div>
        <div className="card-text">
          <p className="card-title">B.Tech CSE (AI &amp; ML)</p>
          <p>IILM University · CGPA: 7.92 · 2023–2027</p>
          <div className="socials">
            <a
              href="https://github.com/vissinkus1"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/vishal-singh-kushwaha27"
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
