const Users = require("../models/user.model.js");
const Notifications = require('../models/notifications.model.js');
const conf = require("./../config/jwt.config");
const bcrypt = require('bcrypt');
const moment = require('moment');
const { generarJWT } = require('../helpers/jwt');


async function hashPassword(password) { return await bcrypt.hash(password, 10); }

// Crea un usuario nuevo
exports.create = async(req, res, next) => {
    if (!req.body) {
        res.status(400).send({ message: "El Contenido no puede estar vacio!" });
    }
    const password = req.body.password
    const hashedPassword = await hashPassword(password);
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
    Users.create(user, (err, data) => {
        if (err) res.status(500).send({ message: err.message || "Algo a currido al crear el usuario" });
        else res.send(data);
    });
};

// Hace la peticion del ingreso del usuario
exports.login = async(request, response) => {
    const user = await Users.findByUsername(request.body.username);
    if (user === undefined) {
        response.json({ error: 'Error, Email o Contraseña incorrecta' });
    } else {
        const equals = bcrypt.compareSync(request.body.password, user.password);
        if (!equals) {
            response.json({ erro: 'Error, Email o Contraseña incorrecta' });
        } else {
            response.json({
                user,
                succesfull: await generarJWT(user),
                done: 'Login correcto'
            })
        }
    }

}

// Busca las imagenes por id del usuario
exports.imagenes = async(req, res) => {
    const img = await Users.findImage(req.params.userId);
    if (img === undefined) {
        res.json({ error: 'Error, no se encontraron imagenes' });
    } else res.send(img);
}

// Busca un usuario por su ID
exports.findOne = (req, res) => {
    Users.findById(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `No se encontro el usuario con el ID: ${req.params.userId}.` });
            } else {
                res.status(500).send({ message: "Error recibiendo los datos del usuario con el ID: " + req.params.userId });
            }
        } else res.send(data);
    });
};

// Busca una empresa con contrato por el id del usuario
exports.findCompany = (req, res) => {
    Users.findCompany(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `No se encontro el usuario con el ID: ${req.params.userId}.` });
            } else {
                res.status(500).send({ message: "Error recibiendo los datos del usuario con el ID: " + req.params.userId });
            }
        } else res.send(data);
    });
};

// Obtiene todos los ejecutivos
exports.getExecutive = (req, res) => {
    Users.getExecutive1((err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `No se encontro el Ejecutivo con el ID: ` });
            } else {
                res.status(500).send({ message: "Error recibiendo los datos del Ejecutivo" });
            }
        } else res.send(data);
    });
};

// Obtiene todos los administradores
exports.getAdmin = (req, res) => {
    Users.getAdmin((err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `No se encontro el Administrador con el ID: ` });
            } else {
                res.status(500).send({ message: "Error recibiendo los datos del Administrador" });
            }
        } else res.send(data);
    });
};

// Busca todos los usarios
exports.findAll = (req, res) => {
    Users.getAll((err, data) => {
        if (err) res.status(500).send({ message: err.message || "Algunos errores ocurrieron al obtener los datos." });
        else res.send(data);
    });
};

// Actualiza un usuario
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "El contenido no puede estar vacio!" });
    }
    Users.updateById(req.params.userId, new Users(req.query),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({ message: `Not found Customer with id ${req.params.userId}.` });
                } else {
                    res.status(500).send({ message: "Error updating Customer with id " + req.params.userId });
                }
            } else res.send(data);
        }
    );

};

// Elimina un usuario
exports.delete = (req, res) => {
    Users.remove(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Customer with id ${req.params.userId}.` });
            } else {
                res.status(500).send({ message: "Could not delete Customer with id " + req.params.userId });
            }
        } else res.send({ message: `Customer was deleted successfully!` });
    });
};

// Obtiene la notificacion por id del usuario
exports.getNotifications = (req, res) => {
    Users.getNotifications(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Customer with id .` });
            } else {
                res.status(500).send({ message: "Error retrieving Customer with id " });
            }
        } else res.send(data);
    });
};

// Obtiene la notificacion por id del remitente
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

// Actualiza el estado de la notificacion a leido
exports.updateNotification = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
    }

    Users.updateNotification(req.params.notificationId, req.body.data, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Customer with id ${req.params.userId}.` });
            } else {
                res.status(500).send({ message: "Error updating Customer with id " + req.params.userId });
            }
        } else res.send(data);
    });

};

// Crea una notificacion nueva
exports.postNotifications = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    const notification = new Notifications({
        id_sender: req.params.userId,
        subject: req.body.subject,
        message: req.body.message,
        status: 'unread',
        time: req.body.time,
        users_id_user: req.body.users_id_user,
        data: req.body.data
    });
    Users.postNotifications(notification, (err, data) => {
        if (err) res.status(500).send({ message: err.message || "Algo a currido al buscar las notificaciones" });
        else res.send(data);
    });
};

// Obtiene los pagos no verificados
exports.getverifications = (req, res) => {
    Users.getverifications((err, data) => {
        if (err) res.status(500).send({ message: err.message || "Algunos errores ocurrieron al obtener los datos." });
        else res.send(data);
    });
};

// Actualiza el estado de los pagos a completado
exports.postverifications = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "El contenido no puede estar vacio!" });
    }
    Users.postverifications(
        req.params.companyId,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({ message: `Not found Customer with id ${req.params.userId}.` });
                } else {
                    res.status(500).send({ message: "Error updating Customer with id " + req.params.userId });
                }
            } else res.send(data);
        }
    );
};