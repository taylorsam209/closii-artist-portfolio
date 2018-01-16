require('dotenv').config();
const express = require('express');

const SERVER_CONFIGS = require('./constants/server');

const configureServer = require('./server');
const configureRoutes = require('./routes');

const app = express();

configureServer(app);
configureRoutes(app);

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(SERVER_CONFIGS.PORT, error =>{
    if(error) throw error;
    console.log('Server running on port: ' + SERVER_CONFIGS.PORT);
});