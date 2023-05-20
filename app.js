const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
app.use(express.json());

app.get('/hello', (req, res) => {
   res.send('Task manager App');
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async () => {
   try {
      await connectDB(process.env.CONNECTION_STRING);
      app.listen(port, console.log(`server is listening port ${port}`));
   } catch (error) {
      console.log(error);
   }
};

start();
