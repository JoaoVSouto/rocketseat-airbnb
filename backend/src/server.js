require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose
  .connect(process.env.DB_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to database!'))
  .catch(err => console.log('Error while connecting to database:', err));

app.use(express.json());

app.use(require('./routes'));

app.listen(3333, () => console.log('server listening on 3333...'));
