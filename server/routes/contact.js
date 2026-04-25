const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// @route   POST /api/contact
// @desc    Save a new contact message
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    const newMessage = await Message.create({ name, email, message });

    res.status(201).json({
      success: true,
      data: {
        id: newMessage._id,
        name: newMessage.name,
        email: newMessage.email,
        createdAt: newMessage.createdAt,
      },
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ success: false, error: messages.join(', ') });
    }
    console.error('Contact error:', error);
    res.status(500).json({ success: false, error: 'Server error. Please try again later.' });
  }
});

module.exports = router;
