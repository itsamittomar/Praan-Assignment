const path = require('path');
const routes = require('./routes')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const feedRoutes = require('./routes/feed');
const authRoutes = require('./routes/auth');

const app = express();


app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.use(routes)

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message,data:data });
});

mongoose.connect(
  'mongodb+srv://amit:EtegrClfk0c59hZz@cluster0.waxlwqg.mongodb.net/test?retryWrites=true&w=majority')
  .then( rtesult =>{
      app.listen(8080);
  }).catch(err =>{
      console.log(err)
  })
