const express = require('express');
const cors = require('cors');
require('dotenv').config();

const  users = require('./data.js')
const jwt = require('jsonwebtoken');


const app = express();
const SECRET_KEY = 'dainish';
app.use(express.json());

app.use(cors())

const port = process.env.PORT||3000;

app.post('/signup',(req, res)=>{
    
    const {username, password} = req.body;
    console.log(username);
    
    res.send({message:"successfully account created"});
});


app.post('/login', (req, res)=>{
    const {username, password} = req.body;

    const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        const token = jwt.sign({ username: user.username }, SECRET_KEY, {
          expiresIn:'5m',
        });
        res.json({ message: 'Login successful', token });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      } 
})

// Protected route
app.get('/protected', (req, res) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader) return res.status(403).json({ message: 'No token provided' });
  
    const token = authHeader.split(' ')[1]; // Format: "Bearer <token>"
  
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      res.json({ message: `Welcome, ${decoded.username}! This is a protected route.` });
    } catch (error) {
      res.status(401).json({ message: 'Invalid token' });
    }
  });


app.listen(port, (req, res)=>{
    console.log(`app is running on ${port}`);
    
});