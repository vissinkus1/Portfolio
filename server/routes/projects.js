const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// @route   GET /api/projects
// @desc    Get all projects, sorted by order
// @access  Public
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1 });
    res.json({ success: true, data: projects });
  } catch (error) {
    console.error('Projects error:', error);
    res.status(500).json({ success: false, error: 'Server error.' });
  }
});

module.exports = router;
