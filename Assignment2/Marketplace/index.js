const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./src/routes/productRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', productRoutes);

// MongoDB connection
const mongoURI = 'mongodb+srv://amonani:Aniket18022002%23%40@amonani.bttilnw.mongodb.net/Marketplace?retryWrites=true&w=majority&appName=amonani';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
