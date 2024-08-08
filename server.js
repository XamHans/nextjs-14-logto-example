const express = require('express');
const cors = require('cors');  // Add this line
const app = express();
const port = 8000;

// Enable CORS for all routes
app.use(cors());  // Add this line

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to check for API key in the Authorization header
function checkApiKey(req, res, next) {
  const apiKey = req.headers['authorization'];
  console.log('APIKEY', apiKey);
  if (apiKey && apiKey === "12345!") {
    next();
  } else {
    res.status(403).json({ error: 'Forbidden: Invalid API Key' });
  }
}

// Sample data
const sampleData = [
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  // ... (other data items)
];

// Protected route to get data
app.get('/data', checkApiKey, (req, res) => {
  try {
    res.json({
      success: true,
      data: sampleData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch data',
      message: error.message
    });
  }
});

// New route for /posts
app.get('/posts', checkApiKey, (req, res) => {
  try {
    res.json({
      success: true,
      data: sampleData  // Using the same sample data for posts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch posts',
      message: error.message
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Internal Server Error',
    message: err.message
  });
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Not Found',
    message: 'The requested resource does not exist'
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});