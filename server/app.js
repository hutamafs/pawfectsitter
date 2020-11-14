const express = require("express");
const mongoose = require("mongoose");
const bodyParser= require('body-parser');
const config = require('./config');
const env = process.env.NODE_ENV || 'development';
require('dotenv').config();
const cors = require('cors')

const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler')

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(config.db[env], config.dbParams);

mongoose.connection.on("error", err => {
    console.log("err", err)
});
  
mongoose.connection.on("connected", () => {
  console.log("mongoose is connected...")
});

mongoose.connection.on("disconnected", () => {
  console.log("mongoose is disconnected...")
});

app.use("/", routes);
app.use(errorHandler);


module.exports = app;