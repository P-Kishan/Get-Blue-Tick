const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dbConnection = require('./dbConnection');

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Connect to DB at startup
dbConnection();

// ✅ Define schema & model ONCE
const studentSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const Student = mongoose.model('Student', studentSchema);

// ✅ Test route
app.get('/', (req, res) => {
  res.send('Hello World');
});


app.post('/register', async (req, res) => {
  try {
    const obj = {
      username: req.body.username,
      password: req.body.password,
    };

    const result = await Student.create(obj);

    res.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    console.error("Error inserting student:", error);
    res.status(500).json({ status: "failed", error: error.message });
  }
});

// ✅ Start server
app.listen(8000, () => {
  console.log("Server running on port 8000");
});
