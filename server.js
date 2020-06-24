const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors');
const session = require('express-session');
const config = require('./app/config/jwt.config');

const app = express();

app.use(cors());

app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

app.set('llave', config.llave);

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "bienvenido a globals-app" });
});

require("./app/routes/user.routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online')
});