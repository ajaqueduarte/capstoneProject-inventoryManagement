require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User'); // Mongoose user model
const db = require('./config/db'); // Require the db config to initialize the database connection
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); // Adjust the path as necessary
app.use('/api/users', userRoutes);
const cors = require('cors');
app.use(cors());

const dbConnection = 'mongodb+srv://admin:admin@cluster0.u3eb0kz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\n';

mongoose.connect(dbConnection).then(() => console.log("Database connected!")).catch(err => console.error(err));

app.use(express.json());

app.post('/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      fullName: req.body.fullName,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const newUser = await user.save();
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating the user' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user && await bcrypt.compare(req.body.password, user.password)) {
      const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json('Error logging in');
  }
});

// ... other middleware and routes ...

app.listen(3001, () => console.log('Server started on port 3001'));
