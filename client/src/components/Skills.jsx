const skills = [
  {
    title: 'AI Frameworks & LLMs',
    detail:
      'LangChain, LangGraph, LLMs (GPT / open-source), RAG, Agentic AI, LangSmith, MCP',
  },
  {
    title: 'Web & API Dev',
    detail:
      'MERN Stack, FastAPI, Flask, Streamlit, REST API Integration, HTML/CSS/JS',
  },
  {
    title: 'ML & Data Science',
    detail:
      'Python, Scikit-learn, TensorFlow, PyTorch, NLTK, NLP, Pandas, NumPy, Deep Learning',
  },
  {
    title: 'Tools & Platforms',
    detail:
      'Git/GitHub, Google Colab, AWS (ML + GenAI + Agentic AI certified), VS Code, Render',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-header">
        <h2>Skills</h2>
        <p>
          Strong foundation in AI/ML, LLM frameworks, and full-stack
          development.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((s, i) => (
          <div className="skill-card" key={i}>
            <h3>{s.title}</h3>
            <p>{s.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
