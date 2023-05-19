const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://<password>@cluster0.v9szxtm.mongodb.net/myFirstDatabase';

mongoose.connect(connectionString)
   .then(() => console.log('CONNECTED TO THE DB...'))
   .catch((err) => console.log(err));
