const Users = require("../models/user.model.js");
const Notifications = require('../models/notifications.model.js');
const conf = require("./../config/jwt.config");
const bcrypt = require('bcrypt');
const moment = require('moment');
const { generarJWT } = require('../helpers/jwt');


/*const createToken = (user) => { 
    let payload = {
        userId: user.id,
        createAt: moment().unix(),
        expiresAt: moment().add(1, 'day').unix()
    }
    return jwt.encode(payload, conf.TOKEN_KEY);
};*/

async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

// Create One User
exports.create = async(req, res, next) => {
    console.log("controlador");
    console.log('respuesta' + res, 'peticion' + req);
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "El Contenido no puede estar vacio!"
        });
    }

    const password = req.body.password
    const hashedPassword = await hashPassword(password);
    // Create a Customer
    const user = new Users({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        direction: req.body.direction,
        colony: req.body.colony,
        cp: req.body.cp,
        role_id_role: req.body.role_id_role,
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword
    });
    console.log(hashPassword);


    // Save Customer in the database
    Users.create(user, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Algo a currido al crear el usuario"
            });
        else res.send(data);
    });
};

// login 
exports.login = async(request, response) => {

    //const serverTest = await fr.generarJWT();


    console.log("1.- Controlador");
    // const user = await Users.findByEmail(request.body.username);
    const user = await Users.findByUsername(request.body.username);

    //const role_menu = await Users.findRoleMenu(user['role_id_role']);
    if (user === undefined) {
        console.log(user);
        response.json({
            error: 'Error, Email o Contraseña incorrecta'
        });
    } else {
        const equals = bcrypt.compareSync(request.body.password, user.password);
        if (!equals) {
            response.json({
                erro: 'Error, Email o Contraseña incorrecta'
            });
        } else {
            response.json({
                //role_menu,
                user,
                succesfull: await generarJWT(user),
                done: 'Login correcto'
            })
        }
    }

}

exports.imagenes = async(req, res) => {
    console.log('1.- controller');
    const img = await Users.findImage(req.params.userId);
    if (img === undefined) {
        res.json({
            error: 'Error, no se encontraron imagenes'
        });
    } else res.send(img);

}

// Find one user by id
exports.findOne = (req, res) => {
    Users.findById(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontro el usuario con el ID: ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error recibiendo los datos del usuario con el ID: " + req.params.userId
                });
            }
        } else res.send(data);
    });
};

// Find one user by id
exports.findCompany = (req, res) => {
    Users.findCompany(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontro el usuario con el ID: ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error recibiendo los datos del usuario con el ID: " + req.params.userId
                });
            }
        } else res.send(data);
    });
};



// Find one user by id
exports.getExecutive = (req, res) => {
    Users.getExecutive1((err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontro el Ejecutivo con el ID: `
                });
            } else {
                res.status(500).send({
                    message: "Error recibiendo los datos del Ejecutivo"
                });
            }
        } else res.send(data);
    });
};

// Find one user by id
exports.getAdmin = (req, res) => {
    Users.getAdmin((err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontro el Administrador con el ID: `
                });
            } else {
                res.status(500).send({
                    message: "Error recibiendo los datos del Administrador"
                });
            }
        } else res.send(data);
    });
};



// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Users.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Algunos errores ocurrieron al obtener los datos."
            });
        else res.send(data);
    });
};

exports.update = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "El contenido no puede estar vacio!"
        });
    }

    Users.updateById(
        req.params.userId,
        new Users(req.query),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Customer with id ${req.params.userId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Customer with id " + req.params.userId
                    });
                }
            } else res.send(data);
        }
    );

};

exports.delete = (req, res) => {
    Users.remove(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Customer with id " + req.params.userId
                });
            }
        } else res.send({ message: `Customer was deleted successfully!` });
    });
};

exports.getNotifications = (req, res) => {
    Users.getNotifications(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id .`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Customer with id "
                });
            }
        } else res.send(data);
    });
};

exports.getNotificationsById = (req, res) => {
    Users.getNotificationsById(req.params.userId, req.params.notificationId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id .`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Customer with id "
                });
            }
        } else res.send(data);
    });
};


exports.updateNotification = (req, res) => {
    console.log(req.body);
    console.log('1.- controller');
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Users.updateNotification(req.params.notificationId, req.body.data, (err, data) => {
        console.log(req.query);
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error updating Customer with id " + req.params.userId
                });
            }
        } else res.send(data);
    });

};



// Create One User
exports.postNotifications = (req, res) => {
    console.log(req.body);
    console.log("controlador----post");
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Customer
    const notification = new Notifications({
        id_sender: req.params.userId,
        subject: req.body.subject,
        message: req.body.message,
        status: 'unread',
        time: req.body.time,
        users_id_user: req.body.users_id_user,
        data: req.body.data
    });

    // Save Customer in the database
    Users.postNotifications(notification, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Algo a currido al buscar las notificaciones"
            });
        else res.send(data);
    });
};