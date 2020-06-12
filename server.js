const express = require("express");
const bodyParser = require("body-parser");
const sql = require("./app/models/db.js");
var cors = require('cors');
var multer = require('multer')
const path = require('path')

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './files')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage });

const app = express();

app.use(cors())



// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "bienvenido a globals-app" });
});

// auth user route
app.post('/auth', function(request, response) {
    console.log("1.- Controlador");
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
        console.log("2.- Model");
        sql.query('SELECT * FROM users WHERE email = ? AND password = ?', [username, password], function(error, results, fields) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                console.log("true");
                response.send(results);
                //response.redirect('/users');
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

app.post('/subir', upload.single('file'), (req, res) => {
    return res.send(req.file);
});


require("./app/routes/user.routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online')
});