const mongoose = require('mongoose');
require('dotenv').config();

const Project = require('./models/Project');

const projects = [
  {
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
    order: 1,
  },
  {
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
    order: 2,
  },
  {
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
    order: 3,
  },
  {
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
    order: 4,
  },
  {
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
    order: 5,
  },
  {
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
    order: 6,
  },
  {
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
    order: 7,
  },
  {
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
    order: 8,
  },
  {
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
    link: '',
    github: '',
    order: 9,
  },
];

const seedDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.log('⚠️  No MONGO_URI provided in .env');
      process.exit(0);
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    await Project.deleteMany({});
    console.log('🗑️  Cleared existing projects');

    await Project.insertMany(projects);
    console.log('🌱 Seeded', projects.length, 'projects');

    await mongoose.connection.close();
    console.log('👋 Connection closed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error.message);
    process.exit(1);
  }
};

if (require.main === module) {
  seedDB();
}

module.exports = projects;
