const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
const CONNECTION_URL = 'mongodb://localhost:27017/agri-vision'; 

// 2. This command uses that URL to connect
mongoose.connect(CONNECTION_URL)
  .then(() => console.log('✅ MongoDB Connected to Agri-Vision'))
  .catch((err) => console.log(err));

// Routes
app.use('/api/user', authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));