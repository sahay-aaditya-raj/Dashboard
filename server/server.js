// modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const jwt = require('jsonwebtoken')

// initialing express
const app = express();


// secret key
const secretKey = "secretKey"


const users = [
  { id: 1, username: 'user1', password: 'password1', role: 'user' },
  { id: 2, username: 'admin', password: 'admin123', role: 'admin' }
];



// Middleware to parse incoming JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:3000",
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization']
}))




// Route for user Login
app.post('/login', (req, res) => {
  // Data form frontend
  const { username, password } = req.body;
  console.log(username, password);
  // Data Login
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(200).json({ message: 'Invalid credentials' });
  }

  // Generate a JWT token upon successful authentication
  //const token = jwt.sign({ userId: user.id, role: user.role }, secretKey);
  
  // Send a response back to the React frontend
  return res.status(200).json({ message: 'Authentication successful' });
});


app.get('/protected', authorizeUser, (req, res) => {
  res.json({ message: 'Authorized - Access granted to protected route' });
});
function authorizeUser(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized - Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1];

  // Verify and decode the token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }

    // User is authorized, proceed to the next middleware or route handler
    req.user = decoded;
    next();
  });
}

// Start the server on a specific port
const PORT = 3001; // Choose an appropriate port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
