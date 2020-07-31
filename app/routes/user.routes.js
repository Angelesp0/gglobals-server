const { request } = require("express");

module.exports = app => {
    const users = require("../controllers/users.controller.js");
    const documents = require('./../controllers/documents.controller');
    const company = require("../controllers/companies.controller.js");
    const service = require("../controllers/services.controller.js");

    const checkToken = require("./middleware");
    var multer = require('multer')
    const sql = require("./../models/db.js");

    const path = require('path')

    let storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './public')
        },
        filename: (req, file, cb) => {
            if (file.originalname == 'blob') {
                file.originalname = 'hola.png';
            }
            console.log(file);
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
    })

    const upload = multer({ storage });

    // auth user route
    app.post('/auth', users.login);

    app.use(checkToken);
    //========================================Users================================================================================//

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


    //========================================Company================================================================================//


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

    app.post("/companies/location", company.postLocation);

    app.post("/companies/img", upload.single('file'), company.img);

    app.get('/contract/:companyId', company.contract);


    //========================================Documents================================================================================//


    app.get('/imagenes/:userId', documents.imagenes);

    //app.get('/files/:userId', documents.findAll);

    app.get('/company/files/:companyId', company.findByCompanyId);

    app.get('/user/files/:userId', documents.findAll);


    //========================================ADMIN================================================================================//

    app.post('/files', upload.single('file'), (req, result) => {
        console.log(req.file.company_id_company);

        sql.query("INSERT INTO files SET url = ?, nombre = ?, category = 'file', company_id_company = ?", [req.file.destination, req.file.filename, req.body.company_id_company], (err, res) => {
            if (err) {
                console.log("error1: ", err);
                return;
            }
            console.log(res.insertId);
            //result(null, { id_files: res.id_files, ...req.file.destination });
        });
        return result.send(req.file);
    });

    //========================================Services================================================================================//
    app.post('/services1', upload.single('file'), service.create1);

    app.post("/services", service.create);

    app.get('/services', service.findAll);

    app.get('/services/:serviceId', service.getServiceById);

    app.put('/services/:serviceId', service.update);

    app.delete('/services/:serviceId', service.delete);

    app.get('/company/services/:companyId', service.findByCompanyId);

    app.get('/user/:userId/services', service.findByUserId);

    app.post('/company_services', service.companyhasservice);

    app.put('/company_services/:companyId', service.payment);

    app.post('/payment/:companyId', service.payment_register)







};