// Create web server
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let comments = [];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const { name, comment } = req.body;
  if (name && comment) {
    const newComment = {
      id: comments.length + 1,
      name,
      comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  } else {
    res.status(400).json({ error: 'Name and comment are required fields.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
