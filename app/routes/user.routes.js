const { request } = require("express");

module.exports = app => {
    const users = require("../controllers/users.controller.js");
    const documents = require('./../controllers/documents.controller')
    const company = require("../controllers/companies.controller.js");
    const checkToken = require("./middleware");
    var multer = require('multer')
    const sql = require("./../models/db.js");

    const path = require('path')

    let storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './public')
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
    })
    const upload = multer({ storage });

    // auth user route
    app.post('/auth', users.login);

    app.use(checkToken);

    // Create a new Customer
    app.post("/users", users.create);

    // Retrieve all Customers
    app.get("/users", users.findAll);

    // Retrieve a single Customer with customerId
    app.get("/users/:userId", users.findOne);

    // Update a Customer with customerId
    app.put("/users/:userId", users.update);

    // Delete a Customer with customerId
    app.delete("/users/:userId", users.delete);


    //=======================================================================================//

    // Create a new company
    app.post("/companies", company.create);

    // Retrieve all companies
    app.get("/companies", company.findAll);

    // Retrieve a single company with companyId
    app.get("/companies/:companyId", company.findOne);

    // Update a company with companyId
    app.put("/companies/:companyId", company.update);

    // Delete a company with companyId
    app.delete("/companies/:companyId", company.delete);


    //=============================================================================================================================//

    app.get('/imagenes/:userId', users.imagenes);

    app.get('/files/:userId', documents.findAll);

    app.post('/subirimagen', upload.single('file'), (req, result) => {
        console.log(req.body.users_id_user);
        sql.query("INSERT INTO files SET url = ?, nombre = ?, category = 'perfil' ", [req.file.destination, req.file.filename], (err, res) => {
            if (err) {
                console.log("error1: ", err);
                //result(err, null);
                return;
            }
            console.log(res.insertId);
            sql.query("INSERT INTO users_has_files SET files_id_files = ?, users_id_user = ?", [res.insertId, req.body.users_id_user], (err, res) => {
                if (err) {
                    console.log("error2: ", err);
                    //result(err, null);
                    return;
                }
            });

            //result(null, { id_files: res.id_files, ...req.file.destination });
        });
        return result.send(req.file);
    });
};