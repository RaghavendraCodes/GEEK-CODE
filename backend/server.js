import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './db.js';
import userRoutes from './routes/user.route.js'

// Load .env variables
dotenv.config();

// to create a express app. 
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// call DB 
connectDB();

// Define PORT (default to 5000 if not set in the environment variables)
const PORT = process.env.PORT;

// Define the root route
app.get('/', (req, res) => {
  res.send('Server is running');
});


// User routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
