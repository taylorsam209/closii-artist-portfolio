require('dotenv').config();
const express = require("express"),
    bodyParser = require("body-parser"),
    cors = require('cors'),
    axios = require('axios'),
    exphbs = require("express-handlebars"),
    stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const port = process.env.PORT;
const app = express();
app.use(cors());

//Handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Set Static Folder
app.use(express.static(`${__dirname}/public`))

//Index Route
app.get('/', (req, res) => {
    res.render("index");
});

app.listen(port, () => console.log(`Running on port ${port}`))