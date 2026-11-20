const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Project = require('../models/Project');
const seedProjects = require('../seed');

// @route   GET /api/projects
// @desc    Get all projects, sorted by order
// @access  Public
router.get('/', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.json({ success: true, data: seedProjects });
    }
    const projects = await Project.find().sort({ order: 1 });
    if (!projects || projects.length === 0) {
      return res.json({ success: true, data: seedProjects });
    }
    res.json({ success: true, data: projects });
  } catch (error) {
    console.error('Projects error:', error);
    res.json({ success: true, data: seedProjects });
  }
});

module.exports = router;
