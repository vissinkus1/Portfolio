const skillCategories = [
  {
    title: 'Languages',
    detail: 'Java (Primary / DSA & OOP), Python (ML & AI), JavaScript (ES6+), TypeScript, SQL, C',
  },
  {
    title: 'GenAI, LLMs & Agents',
    detail: 'LangChain, LangGraph, Multi-Agent Systems, RAG, FAISS Vector Search, pgvector, Google Gemini API, AWS Bedrock, Prompt Engineering, Human-in-the-Loop Review',
  },
  {
    title: 'ML & Deep Learning',
    detail: 'Scikit-learn, TensorFlow, Keras (Stacked LSTM), PyTorch, BERT / Transformers, NLP, Feature Engineering, Model Evaluation (RMSE, MAE, MAPE, R², Kappa)',
  },
  {
    title: 'Backend & Full-Stack',
    detail: 'React 19, Vite, Node.js 20, Express 5, FastAPI, Flask, REST APIs, JWT Auth, Socket.io (WebSockets), Spring Boot, Hibernate',
  },
  {
    title: 'Databases & Data',
    detail: 'PostgreSQL (pgvector), MongoDB Atlas, Mongoose, SQLite, H2, Pandas, NumPy, Matplotlib, Seaborn, Folium, Google Earth Engine',
  },
  {
    title: 'DevOps & Testing',
    detail: 'Docker, Docker Compose, Git/GitHub, Render, Vercel, pytest (71 automated tests), Vitest, Streamlit, Postman, Linux/Unix',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-header">
        <h2>Skills</h2>
        <p>
          Technical competencies spanning Agentic AI, machine learning engineering, full-stack systems, and core computer science.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((s, i) => (
          <div className="skill-card" key={i}>
            <h3>{s.title}</h3>
            <p>{s.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
