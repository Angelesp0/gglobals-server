const Users = require("../models/user.model.js");
const { request } = require("express");


// Create One User
exports.create = (req, res) => {
    console.log("controlador");
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a Customer
    const user = new Users({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        direction: req.body.direction,
        colony: req.body.colony,
        cp: req.body.cp,
        role: req.body.role,
        email: req.body.email,
        password: req.body.password
    });
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
/*
exports.login = (req, res) => {
    console.log("1.- Controlador");
    const user = new Users({
        email: req.query.email,
        password: req.query.password
    });

    Users.login(user, (err, data) => {

    })
};
*/

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