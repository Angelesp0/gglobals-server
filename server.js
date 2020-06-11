const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors');
var session = require('express-session');
const sql = require("./app/models/db.js");




const app = express();
app.use(cors());


app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "bienvenido a globals-app" });
});

app.post('/auth', function(request, response) {
    console.log("1.- Controlador");
    var username = request.query.email;
    var password = request.query.password;
    if (username && password) {
        console.log("2.- Model");
        sql.query('SELECT * FROM users WHERE email = ? AND password = ?', [username, password], function(error, results, fields) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('/home');
            } else {
                response.send('Incorrect email and/or Password!');
            }
            response.end();
        });
    } else {
        response.send('Please enter email and Password!');
        response.end();
    }
});

app.get('/home', function(request, response) {
    if (request.session.loggedin) {
        response.send('Welcome back, ' + request.session.username + '!');
    } else {
        response.send('Please login to view this page!');
    }
    response.end();
});

require("./app/routes/user.routes.js")(app);


// set port, listen for requests
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online')
});