require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const View = require('./models/View');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
// GET /api/views - Increment and get view count
app.get('/api/views', async (req, res) => {
  try {
    let view = await View.findOne();
    if (!view) {
      view = new View({ count: 1 });
    } else {
      view.count += 1;
    }
    await view.save();
    res.json({ count: view.count });
  } catch (error) {
    console.error('Error updating view count:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Serve frontend in production
const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
