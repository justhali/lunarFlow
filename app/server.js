const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000; 

const app = express();
console.log(process.env.MONGODB_URI)


app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
