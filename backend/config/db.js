const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://admin:admin@cluster0.u3eb0kz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI)
  .then(() => console.log('Database connection established'))
  .catch(err => console.error('Database connection error:', err));

module.exports = mongoose;