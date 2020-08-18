const { request } = require("express");
const { validarJWT } = require('../middlewares/validar-jwt');
const configMensaje = require('./../helpers/configMensaje');


module.exports = app => {
    const users = require("../controllers/users.controller.js");
    const documents = require('./../controllers/documents.controller');
    const company = require("../controllers/companies.controller.js");
    const service = require("../controllers/services.controller.js");
    const commission = require('../controllers/commission.controller.js');
    const receipt = require('../controllers/receipt.controller');
    const contract = require('../controllers/contract.controller');


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
            if (file.mimetype == 'application/pdf') {
                console.log('hola');
                //          servicio rif
                if (file.originalname === 'RCR.pdf') {
                    file.fieldname = 'RCR';
                }
                //          servicio P.fisica
                if (file.originalname === 'RCE.pdf') {
                    file.fieldname = 'RCE';
                } else {
                    file.originalname = 'hola.pdf';
                }
            }
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
    });
    const upload = multer({ storage });

    // auth user route
    app.post('/auth', users.login);

    app.use(validarJWT);
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

    // Delete a Customer with customerId
    app.get("/executive", users.getExecutive);

    // Delete a Customer with customerId
    app.get("/admin", users.getAdmin);

    // obtiene las notificaciones 
    app.get('/notifications/:userId', users.getNotifications);

    app.get('/notifications/:userId/:notificationId', users.getNotificationsById);

    // Update a Customer with customerId
    app.put('/notifications/:notificationId', users.updateNotification);

    app.post('/notifications/:userId', users.postNotifications);



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

    app.get('/getcontract/:companyId', company.getcontract);

    app.get('/getfirm/', company.getfirm);

    app.get('/contractByIdCompany', contract.total);



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
    //========================================Recibos================================================================================//
    app.post('/receipt', upload.single('file'), receipt.create);
    app.get('/receipt', receipt.total);
    app.get('/receipt/:receiptId', receipt.getById);


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

    app.post('/payment/:companyId', service.payment_register);

    //========================================Comisiones================================================================================//

    app.get('/commission', commission.getAll);

    app.post('/commission', commission.create);


    //========================================Email================================================================================//
    app.post('/email', (req, res) => {
        configMensaje(req.body);
        res.status(200).send();
    })
};