/* eslint-disable no-unused-vars */
const { join } = require('path');

const express = require('express');
const formData = require('express-form-data');

require('dotenv').config();

const router = require('./controllers');

const PORT = process.env.PORT || 5000;
const app = express();

app.set('port', PORT);

app.use(express.json());
app.use(formData.parse());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.use('/api/v1', router);
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(err);
  res.status(500).send({ message: 'Internal Server Error', statusCode: 500 });
});
module.exports = app;
