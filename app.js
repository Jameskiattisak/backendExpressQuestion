const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Questions = require('./models/Questions');

const app = express();
const PORT = 3000;

mongoose
.connect(
    "mongodb+srv://jameskiattisakk:VAY1GBo3LrdMUz9M@cluster0.tdnxtsp.mongodb.net/RealSmart", 
    {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.use(cors());

app.post('/questions', async (req, res) => {
  try {
    const newItem = new Questions(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/questions', async (req, res) => {
  try {
    const items = await Questions.find({}).exec();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
