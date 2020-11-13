const express = require('express');
const PORT = 3000;
const app = express();
require('./config/mongo');

app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.listen(PORT, () => {
    console.log(`server is running on ${port}`);
})

module.exports = app;