require('dotenv').config();
const express = require("express"),
    bodyParser = require("body-parser"),
    cors = require('cors'),
    axios = require('axios')

    const port = 3020;
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    app.listen(port, ()=> console.log(`Running on port ${port}`))