const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the environment's port or 3000 if it's not set

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
