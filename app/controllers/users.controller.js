const Users = require("../models/user.model.js");
const conf = require("./../config/jwt.config");
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const moment = require('moment');

const createToken = (user) => {
    let payload = {
        userId: user.id,
        createAt: moment().unix(),
        expiresAt: moment().add(1, 'day').unix()
    }
    return jwt.encode(payload, conf.TOKEN_KEY);
};

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
            message: "Content can not be empty!"
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
    console.log("1.- Controlador");
    const user = await Users.findByEmail(request.body.username);
    //const role_menu = await Users.findRoleMenu(user['role_id_role']);
    if (user === undefined) {
        console.log(user);
        response.json({
            error: 'Error, email or password not found'
        });
    } else {
        const equals = bcrypt.compareSync(request.body.password, user.password);
        if (!equals) {
            response.json({
                erro: 'Error, email or password not found'
            });
        } else {
            response.json({
                //role_menu,
                user,
                succesfull: createToken(user),
                done: 'Login correct'
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
                    message: `Not found Customer with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Customer with id " + req.params.userId
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

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Users.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

exports.update = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
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