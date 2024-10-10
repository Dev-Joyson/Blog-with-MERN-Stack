const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 8000

//Middlewares
app.use(bodyParser.json())

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

//Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
