const mongoose = require('mongoose');
require('dotenv').config();

const Project = require('./models/Project');

const projects = [
  {
    title: 'Stock Price Forecasting – LSTM Neural Network',
    description:
      '3-layer Stacked LSTM (128→64→32) on 5-yr Yahoo Finance data — RMSE: 26.52 INR, MAPE: 1.45% (98.55% accuracy); 60-day sliding window, 80/20 chronological split, zero data leakage. Interactive Streamlit dashboard with candlestick charts, Bollinger Bands, RSI, 60-day autoregressive forecast — live on Render.',
    tags: ['Python', 'TensorFlow', 'Keras', 'LSTM', 'Streamlit', 'Plotly', 'yfinance', 'Render'],
    link: '',
    order: 1,
  },
  {
    title: 'Green Illusions – ESG Claim Verification',
    description:
      'Multi-agent RAG pipeline (Retrieval, Verification, Verdict, Explanation Agents) verifying ESG claims via FAISS + AWS Bedrock — evidence-grounded verdicts with hallucination prevention and responsible AI guardrails.',
    tags: ['RAG', 'Multi-Agent AI', 'AWS Bedrock', 'FAISS', 'LangChain', 'Python'],
    link: '',
    order: 2,
  },
  {
    title: 'AI Job Portal – MERN + LLM Microservices',
    description:
      'Architecting full-stack AI job portal with LangChain intelligent job-matching, NLP resume parsing microservices, and RAG inspired semantic similarity — React.js frontend connected via REST APIs.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Python', 'NLP', 'LangChain'],
    link: '',
    order: 3,
  },
  {
    title: 'Sentiment Analysis NLP App',
    description:
      'End-to-end NLP text classifier (positive/negative/neutral) deployed as a live web app via Flask REST API + Streamlit frontend on Render.',
    tags: ['Python', 'NLTK', 'Scikit-learn', 'Flask', 'Streamlit', 'Render'],
    link: 'https://sentiment-flask-app-i1vg.onrender.com',
    order: 4,
  },
];

const seedDB = async () => {
  try {
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

seedDB();
