const Services = require("../models/services.model.js");

// Create One Companies
exports.create = (req, res) => {
    console.log("1.- Controlador");
    console.log(req);
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a Customer
    const service = new Services({
        id_service: req.body.id_service,
        name_service: req.body.name_service,
        desc_service: req.body.desc_service,
        price: req.body.price,
    });
    console.log(service);
    // Save Customer in the database
    Services.create(service, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Algo a currido al crear la Empresa"
            });
        else res.send(data);
    });
};

// Find one user by id
exports.findByCompanyId = (req, res) => {
    console.log("1.- Controlador");
    Services.findById(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontro servicios con la id: ${req.params.id_company}.`
                });
            } else {
                res.status(500).send({
                    message: "La empresa no tienen servicios registrados"
                });
            }
        } else res.send(data);
    });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    console.log("1.- Controlador");
    Services.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

// Update Companies.
exports.update = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Services.updateById(
        req.params.serviceId,
        new Services(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Customer with id ${req.params.serviceId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Customer with id " + req.params.companyId
                    });
                }
            } else res.send(data);
        }
    );

};

// Delete Companies
exports.delete = (req, res) => {
    Services.remove(req.params.serviceId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `no se encontro el servicio con el id ${req.params.serviceId}.`
                });
            } else {
                res.status(500).send({
                    message: "No se pudo eliminar el servicio " + req.params.serviceId
                });
            }
        } else res.send({ message: `Servicio eliminado correctamenete` });
    });
};

exports.getById = (req, res) => {
    console.log("1.- Controlador");
    console.log(req.params);
    Services.findByCompanyId(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontraron documentos`
                });
            } else {
                res.status(500).send({
                    message: "No Hay documentos para esta empresa "
                });
            }
        } else res.send(data);
    });
}