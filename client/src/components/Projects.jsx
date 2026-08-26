import { useState, useEffect } from 'react';
import axios from 'axios';

/* Hardcoded fallback if API is unreachable */
const FALLBACK_PROJECTS = [
  {
    _id: '1',
    title: 'Stock Price Forecasting – LSTM Neural Network',
    badge: 'Live Demo',
    description:
      '3-layer Stacked LSTM (128→64→32) on 5-yr Yahoo Finance data — RMSE: 26.52 INR, MAPE: 1.45% (98.55% accuracy); 60-day sliding window, 80/20 chronological split, zero data leakage. Interactive Streamlit dashboard with candlestick charts, Bollinger Bands, RSI, 60-day autoregressive forecast — live on Render.',
    tags: ['Python', 'TensorFlow', 'Keras', 'LSTM', 'Streamlit', 'Plotly', 'yfinance', 'Render'],
    link: '',
  },
  {
    _id: '2',
    title: 'Green Illusions – ESG Claim Verification',
    badge: 'Hackathon',
    description:
      'Multi-agent RAG pipeline (Retrieval, Verification, Verdict, Explanation Agents) verifying ESG claims via FAISS + AWS Bedrock — evidence-grounded verdicts with hallucination prevention and responsible AI guardrails.',
    tags: ['RAG', 'Multi-Agent AI', 'AWS Bedrock', 'FAISS', 'LangChain', 'Python'],
    link: '',
  },
  {
    _id: '3',
    title: 'AI Job Portal – MERN + LLM Microservices',
    badge: 'In Progress',
    description:
      'Architecting full-stack AI job portal with LangChain intelligent job-matching, NLP resume parsing microservices, and RAG inspired semantic similarity — React.js frontend connected via REST APIs.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Python', 'NLP', 'LangChain'],
    link: '',
  },
  {
    _id: '4',
    title: 'Sentiment Analysis NLP App',
    badge: 'Live Demo',
    description:
      'End-to-end NLP text classifier (positive/negative/neutral) deployed as a live web app via Flask REST API + Streamlit frontend on Render.',
    tags: ['Python', 'NLTK', 'Scikit-learn', 'Flask', 'Streamlit', 'Render'],
    link: 'https://sentiment-flask-app-i1vg.onrender.com',
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
        <p>Real-world ML, RAG systems, and full-stack AI applications with live deployments.</p>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <span className="spinner"></span>
        </div>
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project._id || project.title}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                <h3 style={{ margin: 0 }}>{project.title}</h3>
                {project.badge && (
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      background:
                        project.badge === 'Live Demo'
                          ? 'rgba(74, 222, 128, 0.15)'
                          : project.badge === 'Hackathon'
                          ? 'rgba(229, 181, 103, 0.15)'
                          : 'rgba(106, 215, 221, 0.15)',
                      color:
                        project.badge === 'Live Demo'
                          ? '#4ade80'
                          : project.badge === 'Hackathon'
                          ? '#e5b567'
                          : '#6ad7dd',
                      border: `1px solid ${
                        project.badge === 'Live Demo'
                          ? 'rgba(74, 222, 128, 0.3)'
                          : project.badge === 'Hackathon'
                          ? 'rgba(229, 181, 103, 0.3)'
                          : 'rgba(106, 215, 221, 0.3)'
                      }`,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {project.badge}
                  </span>
                )}
              </div>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              {project.link && (
                <div style={{ marginTop: '14px' }}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: 'var(--accent-2)',
                      fontSize: '13px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    Live Demo ↗
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

