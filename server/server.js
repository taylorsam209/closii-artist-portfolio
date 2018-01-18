const cors = require('cors');
const bodyParser =  require('body-parser');
const express = require('express');

const CORS_WHITELIST = require('./constants/frontend');

const corsOptions = {
    origin: (origin, callback) =>
    (CORS_WHITELIST.indexOf(origin) !== -1)
    ? callback(null, true)
    : callback(new Error('Not allowed by CORS'))
};

const configureServer = app => {
    app.use(cors());

    app.use(bodyParser.json());
    app.use( express.static( `${__dirname}/../build` ) );
};

module.exports = configureServer;