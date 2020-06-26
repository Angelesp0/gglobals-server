const Documents = require("../models/document.model.js");


exports.imagenes = async(req, res) => {
    console.log('1.- controller');
    const img = await Documents.findImage(req.params.userId);
    if (img === undefined) {
        res.json({
            error: 'Error, no se encontraron imagenes'
        });
    } else res.send(img);
}

// Find one user by id
exports.findOne = (req, res) => {
    Documents.findById(req.params.userId, (err, data) => {
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
exports.findAll = async(req, res) => {
    const document = await Documents.getAll(req.params.userId);
    if (document === undefined) {
        res.json({
            error: 'Error, no se encontraron documentos'
        });
    } else res.send(document);
};

exports.delete = (req, res) => {
    Documents.remove(req.params.userId, (err, data) => {
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

//file upload