const Services = require("../models/services.model.js");
const Company_has_Services = require("../models/company_has_services");
const Payment = require("./../models/payment")

// Create One Companies
exports.create = (req, res) => {
    console.log("1.- Controlador");
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
    // Save Customer in the database
    Services.create(service, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Algo a currido al crear la Empresa"
            });
        else res.send(data);
    });
};
// Create One Companies
exports.create1 = (req, res) => {
    console.log("1.- Controlador-------------");
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
        img: req.file.filename
    });
    // Save Customer in the database
    Services.create1(service, (err, data) => {
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

    findByUserId.service


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
    Services.findByCompanyId(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontraron servicios`
                });
            } else {
                res.status(500).send({
                    message: "No Hay servicios para esta empresa "
                });
            }
        } else res.send(data);
    });
}

exports.getServiceById = (req, res) => {
    console.log("1.- Controlador --------------------");
    Services.findServiceById(req.params.serviceId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontraron servicios`
                });
            } else {
                res.status(500).send({
                    message: "No Hay servicios para esta empresa "
                });
            }
        } else res.send(data);
    });
}

exports.findByUserId = (req, res) => {
    console.log("1.- Controlador");
    Services.findServiceByUserId(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontraron servicios`
                });
            } else {
                res.status(500).send({
                    message: "No Hay servicios para este usuario "
                });
            }
        } else res.send(data);
    });

}

exports.companyhasservice = (req, res) => {
    console.log("1.- Controlador");
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a Customer
    const company_has_Services = new Company_has_Services({
        company_id_company: req.body.company_id_company,
        services_id_service: req.body.services_id_service,
        status: req.body.status,
        start_date: req.body.start_date,
        end_date: req.body.end_date
    });
    // Save Customer in the database
    Services.createRelation(company_has_Services, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Algo a currido al crear la Empresa"
            });
        else res.send(data);
    });

};

exports.payment = (req, res) => {
    console.log("1.- Controlador");
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    Services.payment(req.params.companyId, req.body, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.companyId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error updating Customer with id " + req.params.companyId
                });
            }
        } else res.send(data);
    });
}

exports.payment_register = (req, res) => {
    console.log("1.- Controlador");
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a Customer
    const payment = new Payment({
        id: req.body.id,
        value: req.body.value,
        description: req.body.description,
        status: req.body.status,
        update_time: req.body.update_time,
        company_id_company: req.params.companyId,
        company_has_services_id_companys: req.body.company_has_services_id_companys,
        payment_day: req.body.payment_day
    });
    Services.register(payment, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.companyId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error updating Customer with id " + req.params.companyId
                });
            }
        } else res.send(data);
    });
}