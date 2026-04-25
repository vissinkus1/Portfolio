const mongoose = require('mongoose');

const connectDB = async () => {
  const maxRetries = 5;
  for (let i = 1; i <= maxRetries; i++) {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
      return;
    } catch (error) {
      console.error(`❌ MongoDB Error (attempt ${i}/${maxRetries}): ${error.message}`);
      if (i < maxRetries) {
        console.log(`⏳ Retrying in ${i * 3} seconds...`);
        await new Promise((r) => setTimeout(r, i * 3000));
      } else {
        console.error('⚠️  All MongoDB connection attempts failed. Server will run without DB.');
      }
    }
  }
};

module.exports = connectDB;
