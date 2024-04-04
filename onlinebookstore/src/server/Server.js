const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const booksPath = path.join(__dirname, 'Books.json');

// Endpoint to get all books
app.get('/api/books', (req, res) => {
  fs.readFile(booksPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading books data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    const books = JSON.parse(data).books;
    res.json(books);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('API server is running on port 3000');
});