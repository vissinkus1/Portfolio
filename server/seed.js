const mongoose = require('mongoose');
require('dotenv').config();

const Project = require('./models/Project');

const projects = [
  {
    title: 'Green Illusions – ESG Claim Verification',
    description:
      'Built a multi-agent RAG system to verify ESG sustainability claims against real documents using FAISS vector search and AWS Bedrock (Titan Embeddings + Claude/Titan Text), delivering Supported / Contradicted / Insufficient Evidence verdicts with full explainability.',
    tags: ['RAG', 'Multi-Agent AI', 'AWS Bedrock', 'FAISS', 'LangChain', 'Python'],
    link: '',
    order: 1,
  },
  {
    title: 'AI Job Portal – MERN + LLM Microservices',
    description:
      'Architecting an AI-powered job portal integrating LLM-based intelligent job matching and NLP resume parsing, with Python AI microservices connected to a MERN full-stack frontend.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Python', 'NLP', 'LangChain'],
    link: '',
    order: 2,
  },
  {
    title: 'Sentiment Analysis – Live NLP Web App',
    description:
      'Built and deployed an end-to-end NLP classification AI application (positive/negative/neutral) with Flask REST API backend and Streamlit frontend, enabling real-time API calls for text classification.',
    tags: ['Python', 'NLTK', 'Scikit-learn', 'Flask', 'Streamlit', 'Render'],
    link: 'https://sentiment-flask-app-i1vg.onrender.com',
    order: 3,
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
