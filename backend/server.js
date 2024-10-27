const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const postRoutes = require('./routes/posts')
const categoryRoutes = require('./routes/categories')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 8000

//Middlewares
app.use(bodyParser.json())
app.use(cors())


//Connect to MongoDB
const connectToDB = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/blog');
      console.log('MongoDB Connected');
      // Additional asynchronous operations can be awaited here
    } catch (err) {
      console.log('DB error', err);
    }
  };

connectToDB();

// use routes
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);

//Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
