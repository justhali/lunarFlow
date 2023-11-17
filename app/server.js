require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')
const quotesRoutes = require('./routes/api/quotes'); 
const usersRoutes = require('./routes/api/users'); 

const app = express();
const port = process.env.PORT || 3000;

app.use(passport.initialize());
// app.use(passport.session());

app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use('/api', quotesRoutes)
app.use('/api', usersRoutes)



app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})
