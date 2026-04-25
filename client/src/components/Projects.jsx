import { useState, useEffect } from 'react';
import axios from 'axios';

/* Hardcoded fallback if API is unreachable */
const FALLBACK_PROJECTS = [
  {
    _id: '1',
    title: 'Green Illusions – ESG Claim Verification',
    description:
      'Built a multi-agent RAG system to verify ESG sustainability claims against real documents using FAISS vector search and AWS Bedrock (Titan Embeddings + Claude/Titan Text), delivering Supported / Contradicted / Insufficient Evidence verdicts with full explainability.',
    tags: ['RAG', 'Multi-Agent AI', 'AWS Bedrock', 'FAISS', 'LangChain', 'Python'],
  },
  {
    _id: '2',
    title: 'AI Job Portal – MERN + LLM Microservices',
    description:
      'Architecting an AI-powered job portal integrating LLM-based intelligent job matching and NLP resume parsing, with Python AI microservices connected to a MERN full-stack frontend.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Python', 'NLP', 'LangChain'],
  },
  {
    _id: '3',
    title: 'Sentiment Analysis – Live NLP Web App',
    description:
      'Built and deployed an end-to-end NLP classification AI application (positive/negative/neutral) with Flask REST API backend and Streamlit frontend, enabling real-time API calls for text classification.',
    tags: ['Python', 'NLTK', 'Scikit-learn', 'Flask', 'Streamlit', 'Render'],
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get('/api/projects');
        if (data.success && data.data.length > 0) {
          setProjects(data.data);
        } else {
          setProjects(FALLBACK_PROJECTS);
        }
      } catch {
        setProjects(FALLBACK_PROJECTS);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Real-world AI &amp; full-stack projects demonstrating end-to-end development.</p>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <span className="spinner"></span>
        </div>
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project._id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
