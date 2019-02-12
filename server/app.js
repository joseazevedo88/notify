const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const dbName = 'NotesApp';
const url = `mongodb://localhost:27017/${dbName}`;

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => console.log('db created'))
  .catch(err => console.log(err));

const notes = require('./routes/api/notes');
app.use('/api/notes', notes);

app.listen('5000', () => console.log('listening on port 5000'));
