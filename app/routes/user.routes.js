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
    const dashboard = require('../controllers/dashboard.controller');


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

    // Crea un nuevo usuario
    app.post("/users", users.create);

    // Obtiene todos los usuarios
    app.get("/users", users.findAll);

    // Recibe un usuario por su id
    app.get("/users/:userId", users.findOne);

    // Actualiza un usuario por su id
    app.put("/users/:userId", users.update);

    // Borra un usuario por su id
    app.delete("/users/:userId", users.delete);

    // Busca las empresas relacionadas a un usuario
    app.get("/users/:userId/companies", users.findCompany);

    // Obtiene todos los usuarios de clase Ejecutiva
    app.get("/executive", users.getExecutive);

    // Obtiene todos los usuarios de clase Administrativa
    app.get("/admin", users.getAdmin);

    // obtiene las notificaciones 
    app.get('/notifications/:userId', users.getNotifications);

    // obtiene las notificaciones 
    app.get('/notifications/:userId/:notificationId', users.getNotificationsById);

    // Actualiza el estado de la notificacion
    app.put('/notifications/:notificationId', users.updateNotification);

    // Crea notificaciones 
    app.post('/notifications/:userId', users.postNotifications);



    //========================================Company================================================================================//


    // Crea una nueva empresa
    app.post("/companies", company.create);

    // Recibe todas las empresas
    app.get("/companies", company.findAll);

    // Recibe una empresa por su id
    app.get("/companies/:companyId", company.findOne);

    // Actualiza una empresa por su id
    app.put("/companies/:companyId", company.update);

    // Borra una empresa por su id
    app.delete("/companies/:companyId", company.delete);

    // Crea la ubicacion en cordenadas de la empresa
    app.post("/companies/location", company.postLocation);

    // Recibe una empresa por su id
    app.get("/companies/:companyId/payments", company.findPayments);

    // Obtiene las cordenadas de las empresas
    app.get("/location", company.getLocation);

    // Sube las imagenes de (establecimiento, credencial y comprobante de domicilio)
    app.post("/companies/img", upload.single('file'), company.img);

    // Obtiene una empresa por id
    app.get('/contract/:companyId', company.contract);

    // Obtiene los servicios de una empresa
    app.get("/companies/services/:companyId", company.service);

    // Obtiene el contrato de una empresa
    app.get('/getcontract/:companyId', company.getcontract);

    // Obtiene las firmas para los documentos
    app.get('/getfirm/', company.getfirm);

    // Obtiene el contrato
    app.get('/contractByIdCompany', contract.total);



    //========================================Documents================================================================================//

    // Obtiene las imagenes del usuario
    app.get('/imagenes/:userId', documents.imagenes);

    // Busca los archivos de la empresa por su id
    app.get('/company/files/:companyId', company.findByCompanyId);

    //obtiene los archivos del usuario por id
    app.get('/user/files/:userId', documents.findAll);


    //========================================ADMIN================================================================================//

    // Sube archivos
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

    // Sube el recibo del cliente
    app.post('/receipt', upload.single('file'), receipt.create);

    // Obtiene todos los recibos 
    app.get('/receipt', receipt.total);

    // Obtiene un recibo por su id
    app.get('/receipt/:receiptId', receipt.getById);


    //========================================Services================================================================================//

    // Crea un servicio y agrega su imagen
    app.post('/services1', upload.single('file'), service.create1);

    // Crea un servicio sin la imagen
    app.post("/services", service.create);

    // Obtiene todos los servicios
    app.get('/services', service.findAll);

    // Obtiene un servicio por su id
    app.get('/services/:serviceId', service.getServiceById);

    // Actualiza un archivo por su id
    app.put('/services/:serviceId', service.update);

    // Borra un archivo por su id
    app.delete('/services/:serviceId', service.delete);

    // Obtiene los servicios por el id de la empresa
    app.get('/company/services/:companyId', service.findByCompanyId);

    // Obtiene los servicios de un usuario
    app.get('/user/:userId/services', service.findByUserId);

    // Crea la relacion de Empresas y Servicios
    app.post('/company_services', service.companyhasservice);

    // Crea la relacion de Empresas y Servicios con su id
    app.put('/company_services/:companyId', service.payment);

    // Crea la relacion de Empresas y Servicios
    app.post('/payment/:companyId', service.payment_register);

    //========================================Comisiones================================================================================//
    // Obtiene todas las comissiones
    app.get('/commission', commission.getAll);

    // Registra las commissiones 
    app.post('/commission', commission.create);

    // ACtualiza el estado a cobrado de las commissiones 
    app.put('/commission/:userId', commission.update);



    //========================================Email================================================================================//
    // Borra una empresa por su id
    app.post('/email', (req, res) => {
        configMensaje(req.body);
        res.status(200).send();
    })

    //========================================Dashboard================================================================================//
    app.get('/dashboard/contract', dashboard.getContract);
    app.get('/dashboard/sales', dashboard.getSales);
    app.get('/dashboard/executive', dashboard.getExecutive);
    app.get('/dashboard/executive/:executiveId', dashboard.getExecutiveById);
    app.get('/dashboard/commission', dashboard.getcommission);




};