import { useState, useEffect } from 'react';
import axios from 'axios';

/* Hardcoded fallback matching portfolio_update_content.md */
const FALLBACK_PROJECTS = [
  {
    _id: '1',
    title: 'Green Illusions: Multi-Agent RAG for ESG Claim Verification',
    badge: 'Hackathon',
    summary:
      'Multi-agent RAG system that verifies corporate ESG claims against retrieved evidence with hallucination prevention and responsible AI guardrails.',
    bullets: [
      'Originated and presented at a hackathon; architected a multi-agent pipeline with specialized agents (Retrieval, Verification, Verdict, and Explanation agents) using LangChain & LangGraph.',
      'Verifies corporate ESG claims against retrieved sustainability evidence using FAISS vector search and AWS Bedrock foundation model embeddings.',
      'Enforces evidence-grounded verdicts with strict anti-hallucination guardrails, modular agent topology, and a full decision audit trail to detect greenwashing.',
    ],
    tags: ['AWS Bedrock', 'FAISS', 'LangChain', 'LangGraph', 'Python', 'RAG', 'Multi-Agent AI'],
    link: '',
    github: '',
  },
  {
    _id: '2',
    title: 'Institutional Document Question Answering System using RAG',
    badge: 'Team Capstone',
    summary:
      'Enterprise full-stack RAG platform for institutional policy and document Q&A with verifiable source citations and multi-turn conversation memory.',
    bullets: [
      'Team capstone (team of 4, sole developer of the implementation; Guide: Dr. Mohd Danish) enabling users to sign in, upload policy documents, and query them.',
      'Dense vector retrieval pipeline powered by PostgreSQL 16 with the pgvector extension for high-performance semantic search.',
      'LLM reasoning layer built with LangChain and Google Gemini, delivering precise answers accompanied by exact source citations for verifiable auditability.',
      'Containerized full-stack deployment via Docker Compose featuring a React 19 + Vite frontend and a FastAPI backend with JWT authentication.',
    ],
    tags: ['React 19', 'Vite', 'FastAPI', 'LangChain', 'Google Gemini', 'PostgreSQL', 'pgvector', 'JWT', 'Docker Compose'],
    link: '',
    github: 'https://github.com/vissinkus1/document-intelligence-rag',
  },
  {
    _id: '3',
    title: 'JobMatrix AI: Job Portal & Recommendation System',
    badge: 'Live Demo',
    summary:
      'Full-stack MERN recruitment platform featuring a custom TF-IDF + cosine-similarity recommendation engine, ATS resume scorer, and real-time chat.',
    bullets: [
      'Built solo: custom TF-IDF + cosine-similarity recommendation engine implementing a 7-factor weighted match score (Skills 40%, TF-IDF semantic match 25%, Experience 15%, Location 10%, Job type 5%, Profile completeness 3%, Freshness 2%).',
      'Automated PDF ATS resume scorer (0–100 evaluating skill match, semantic similarity, and structure) with improvement tips and skill-gap learning roadmap.',
      'Real-time Socket.io chat with typing indicators, live notifications, and role-based dashboards for job seekers, employers, and admins.',
      'Enterprise security: dual JWT (15-min access token + 30-day httpOnly refresh cookie with rotation), bcrypt, Helmet CSP, rate limiting, and NoSQL injection sanitization; seeded with 51+ realistic tech jobs.',
      'Deployed with a multi-stage Docker build on Render; database hosted on MongoDB Atlas.',
    ],
    tags: ['React 19', 'Vite 7', 'Node.js 20', 'Express 5', 'MongoDB Atlas', 'Mongoose', 'Socket.io', 'JWT', 'Docker', 'Render'],
    link: 'https://ai-job-portal-2zk5.onrender.com/',
    github: 'https://github.com/vissinkus1/ai-job-portal',
  },
  {
    _id: '4',
    title: 'NetSage AI: Network Troubleshooting with Rules + LLM',
    badge: 'Cisco AICTE',
    summary:
      'Production-grade hybrid diagnostic system combining deterministic rules and Gemini API with human-in-the-loop verification for Cisco networks.',
    bullets: [
      'Built during Cisco-AICTE Virtual Internship: hybrid diagnostic engine coupling deterministic rule-based checks with Google Gemini LLM reasoning.',
      'Engineered schema-enforced prompt pipeline with retry/backoff and resumable batch processing, achieving 100% schema-valid JSON output.',
      'Curated 34-case ground-truth evaluation set across 9 fault domains (including ambiguous cases); achieved 76.5% human-verified agreement rate with interactive reviewer correction log.',
      'Validated with 71 automated pytest unit and integration tests across 8 test files; resolved 2 evaluation-pipeline bugs through systematic root-cause analysis.',
    ],
    tags: ['Python', 'Google Gemini API', 'Streamlit', 'pytest', 'LangChain', 'JSON Schema'],
    link: '',
    github: '',
  },
  {
    _id: '5',
    title: 'Support Desk System (Campus-Drive Practical Task)',
    badge: 'Full-Stack',
    summary:
      'Full-stack support-ticket application built within a timed practical assessment featuring type-safe validation and automated test coverage.',
    bullets: [
      'Built under a timed practical assessment for campus recruitment with complete end-to-end full-stack functionality.',
      'React + Vite + TypeScript frontend with reusable component architecture and responsive design.',
      'Express + TypeScript backend with SQLite (better-sqlite3), Zod request schema validation, and database seed script.',
      'High test coverage verified by 16 passing Vitest backend unit and integration tests.',
    ],
    tags: ['React', 'Vite', 'TypeScript', 'Express', 'SQLite', 'Zod', 'Vitest'],
    link: '',
    github: '',
  },
  {
    _id: '6',
    title: 'Crop Classification Using Sentinel-1 SAR Time-Series and Random Forest',
    badge: 'Research Capstone',
    summary:
      'Remote sensing study classifying Rabi 2023–24 crops in Greater Noida using Sentinel-1 SAR time-series and Google Earth Engine.',
    bullets: [
      'Team project and co-authored research paper analyzing crop classification in the Greater Noida region for Rabi 2023–24 season.',
      'Processed multi-temporal Sentinel-1 SAR data (GRD, IW mode, VV/VH dual polarization) using Google Earth Engine.',
      'Trained Random Forest classifier (100 trees), achieving 98.77% overall accuracy and Kappa coefficient of 0.98 (noting spatial autocorrelation as an acknowledged limitation).',
      'Presented and defended study methodology and classification pipeline during academic evaluation.',
    ],
    tags: ['Google Earth Engine', 'Sentinel-1 SAR', 'Random Forest', 'Remote Sensing', 'Python'],
    link: '',
    github: '',
  },
  {
    _id: '7',
    title: 'Stock Price Forecasting using 3-layer Stacked LSTM',
    badge: 'Live Demo',
    summary:
      'Financial time-series deep learning forecaster trained on 5 years of NSE stock data deployed with an interactive Streamlit dashboard.',
    bullets: [
      'Trained a 3-layer stacked LSTM network (128 → 64 → 32) on 5 years of Yahoo Finance daily price data (RELIANCE.NS) with zero data leakage (strict chronological 80/20 split).',
      'Evaluated with rigorous metrics: RMSE 26.52 INR, MAE 20.88 INR, and MAPE 1.45% (98.55% forecasting accuracy).',
      'Built interactive Streamlit dashboard on Render with real-time candlestick charts, Bollinger Bands, RSI technical indicators, and 60-day autoregressive projections.',
      'Resolved Keras 2/3 production compatibility issues by decoupling model weights from architecture.',
    ],
    tags: ['Python', 'TensorFlow', 'Keras', 'LSTM', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit', 'Plotly', 'Render'],
    link: '',
    github: '',
  },
  {
    _id: '8',
    title: 'Sentiment Analysis NLP App',
    badge: 'Live Demo',
    summary:
      'Sentiment analysis web application serving transformer/ML inference via a Flask REST API backend.',
    bullets: [
      'End-to-end NLP text classification pipeline (positive/negative/neutral) with text preprocessing and feature engineering.',
      'Flask REST API backend serving real-time model predictions with error handling and loading states.',
      'Live web deployment on Render with monitored uptime and low-latency inference.',
    ],
    tags: ['Python', 'BERT / Transformers', 'Scikit-learn', 'NLTK', 'Flask', 'Streamlit', 'Render'],
    link: 'https://sentiment-flask-app-i1vg.onrender.com',
    github: '',
  },
  {
    _id: '9',
    title: 'UPI Mesh – Offline Payment System',
    badge: 'Java Full-Stack',
    summary:
      'Full-stack Java Spring Boot application implementing offline mesh peer-to-peer transaction simulation with cryptographic security.',
    bullets: [
      'Architected complete MVC pattern (Controller → Service → Repository) with H2 SQL database, Hibernate ORM, and Maven.',
      'Implemented RSA/AES hybrid encryption, peer-to-peer mesh packet routing simulation, and idempotency layer preventing duplicate transactions.',
      'Validated concurrent transaction handling with comprehensive integration tests; frontend deployed on Vercel, backend on Render.',
    ],
    tags: ['Java', 'Spring Boot', 'Hibernate', 'SQL (H2)', 'Maven', 'REST APIs', 'Thymeleaf', 'Vercel', 'Render'],
    link: 'https://upi-without-internet-ten.vercel.app/',
    github: 'https://github.com/vissinkus1/UPI_WITHOUT_INTERNET',
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get('/api/projects');
        // Only use DB data if it has been updated with the full schema and all projects
        if (
          data.success &&
          Array.isArray(data.data) &&
          data.data.length >= 8 &&
          data.data[0]?.bullets?.length
        ) {
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
        <p>Production RAG systems, multi-agent frameworks, machine learning models, and full-stack platforms ordered by technical depth.</p>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <span className="spinner"></span>
        </div>
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project._id || project.title}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '10px' }}>
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
                          : project.badge === 'Team Capstone'
                          ? 'rgba(192, 132, 252, 0.15)'
                          : project.badge === 'Cisco AICTE'
                          ? 'rgba(56, 189, 248, 0.15)'
                          : 'rgba(106, 215, 221, 0.15)',
                      color:
                        project.badge === 'Live Demo'
                          ? '#4ade80'
                          : project.badge === 'Hackathon'
                          ? '#e5b567'
                          : project.badge === 'Team Capstone'
                          ? '#c084fc'
                          : project.badge === 'Cisco AICTE'
                          ? '#38bdf8'
                          : '#6ad7dd',
                      border: `1px solid ${
                        project.badge === 'Live Demo'
                          ? 'rgba(74, 222, 128, 0.3)'
                          : project.badge === 'Hackathon'
                          ? 'rgba(229, 181, 103, 0.3)'
                          : project.badge === 'Team Capstone'
                          ? 'rgba(192, 132, 252, 0.3)'
                          : project.badge === 'Cisco AICTE'
                          ? 'rgba(56, 189, 248, 0.3)'
                          : 'rgba(106, 215, 221, 0.3)'
                      }`,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {project.badge}
                  </span>
                )}
              </div>

              {project.summary && (
                <p className="project-summary">{project.summary}</p>
              )}

              {project.bullets && project.bullets.length > 0 && (
                <ul className="project-bullets">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}

              <div className="tag-row">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              {(project.link || project.github) && (
                <div className="project-links">
                  {project.link && (
                    <a
                      className="project-btn primary"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {project.github && (
                    <a
                      className="project-btn outline"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
