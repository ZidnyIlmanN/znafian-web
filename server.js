// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk menangani file statis
app.use(express.static(path.join(__dirname, 'dist')));

// Route default
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});

