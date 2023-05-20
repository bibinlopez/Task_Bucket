const mongoose = require('mongoose');

// const connectionString = 'mongodb+srv://john:cool123@cluster0.v9szxtm.mongodb.net/myFirstDB' || process.env.CONNECTION_STRING;


const connectDB = (url) => {
   return mongoose.connect(url);
};


module.exports = connectDB;