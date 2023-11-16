require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')

const app = express();
const port = 3000 || process.env.PORT;

app.use(express.json());

// Connect to Database
connectDB();

