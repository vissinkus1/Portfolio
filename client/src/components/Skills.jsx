const skills = [
  {
    title: 'Languages',
    detail: 'Java (Primary), Python, C, JavaScript',
  },
  {
    title: 'DSA & CS Core',
    detail:
      'Data Structures, Algorithms, OOP, DBMS, OS Concepts — Practised on LeetCode, HackerRank, Codeforces',
  },
  {
    title: 'ML & Data',
    detail:
      'Scikit-learn, TensorFlow, PyTorch, NLP, Deep Learning, Pandas, NumPy, Matplotlib, Seaborn, Plotly, Folium',
  },
  {
    title: 'LLMs & GenAI',
    detail:
      'LangChain, RAG, FAISS, AWS Bedrock, Multi-Agent AI, Agentic AI, LangGraph',
  },
  {
    title: 'Web & Deploy',
    detail:
      'MERN Stack (MongoDB, Express.js, React.js, Node.js), Flask, FastAPI, Streamlit, REST APIs, Git/GitHub, AWS, Render',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-header">
        <h2>Skills</h2>
        <p>
          Strong technical foundation in Java, AI/ML, LLM frameworks, DSA, and full-stack development.
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

