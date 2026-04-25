# Vishal Singh Kushwaha — MERN Portfolio

A personal portfolio website built with the **MERN** stack (MongoDB, Express, React, Node.js).

## 🚀 Tech Stack

| Layer      | Technology                      |
| ---------- | ------------------------------- |
| Frontend   | React (Vite), React Router, CSS |
| Backend    | Node.js, Express                |
| Database   | MongoDB (Mongoose)              |
| HTTP       | Axios                           |

## 📦 Setup & Run

### Prerequisites

- Node.js ≥ 18
- MongoDB (local or Atlas)

### Install

```bash
# Install root + all sub-project dependencies
npm install
npm run install-all
```

### Seed Projects

```bash
npm run seed
```

### Run Dev Servers

```bash
npm run dev
```

This runs:
- **Frontend** → `http://localhost:5173`
- **Backend** → `http://localhost:5000`

## 🗂️ Project Structure

```
Portfolio/
├── client/          # React frontend (Vite)
│   └── src/
│       ├── components/   # Navbar, Hero, About, Skills, Projects, etc.
│       ├── pages/        # Home page
│       └── styles/       # Global CSS
├── server/          # Express backend
│   ├── config/      # MongoDB connection
│   ├── models/      # Mongoose schemas (Message, Project)
│   ├── routes/      # API endpoints (/contact, /projects)
│   ├── seed.js      # Seed projects into DB
│   └── server.js    # Entry point
└── package.json     # Root scripts (concurrently)
```

## 📬 API Endpoints

| Method | Endpoint        | Description                |
| ------ | --------------- | -------------------------- |
| GET    | /api/projects   | Get all projects           |
| POST   | /api/contact    | Submit a contact message   |
| GET    | /api/health     | Server health check        |

## 👤 Author

**Vishal Singh Kushwaha**
- GitHub: [vissinkus1](https://github.com/vissinkus1)
- LinkedIn: [Vishal Singh Kushwaha](https://www.linkedin.com/in/vishal-singh-kushwaha-b11803306)
