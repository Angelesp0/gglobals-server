const Services = require("../models/services.model.js");
const Company_has_Services = require("../models/company_has_services");
const Payment = require("./../models/payment")

// Crea el recibo para el cliente
exports.create = (req, res) => {
    if (!req.body) { res.status(400).send({ message: "Content can not be empty!" }); }
    const service = new Services({
        id_service: req.body.id_service,
        name_service: req.body.name_service,
        desc_service: req.body.desc_service,
        price: req.body.price,
    });
    Services.create(service, (err, data) => {
        if (err) res.status(500).send({ message: err.message || "Algo a currido al crear la Empresa" });
        else res.send(data);
    });
};

// Crea el recibo para el cliente
exports.create1 = (req, res) => {
    if (!req.body) { res.status(400).send({ message: "Content can not be empty!" }); }
    const service = new Services({
        id_service: req.body.id_service,
        name_service: req.body.name_service,
        desc_service: req.body.desc_service,
        price: req.body.price,
        img: req.file.filename
    });
    // Save Customer in the database
    Services.create1(service, (err, data) => {
        if (err) res.status(500).send({ message: err.message || "Algo a currido al crear la Empresa" });
        else res.send(data);
    });
};

// Busca el servicio de la empresa apor el ID de la empresa
exports.findByCompanyId = (req, res) => {
    Services.findById(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `No se encontro servicios con la id: ${req.params.id_company}.` });
            } else {
                res.status(500).send({ message: "La empresa no tienen servicios registrados" });
            }
        } else res.send(data);
    });
};

// Obtiene todos los servicios
exports.findAll = (req, res) => {
    Services.getAll((err, data) => {
        if (err) res.status(500).send({ message: err.message || "Some error occurred while retrieving customers." });
        else res.send(data);
    });
};

// Actualiza el servicio por ID
exports.update = (req, res) => {
    if (!req.body) { res.status(400).send({ message: "Content can not be empty!" }); }
    Services.updateById(
        req.params.serviceId,
        new Services(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({ message: `Not found Customer with id ${req.params.serviceId}.` });
                } else {
                    res.status(500).send({ message: "Error updating Customer with id " + req.params.companyId });
                }
            } else res.send(data);
        }
    );
};

// Borra un servicio por su Id
exports.delete = (req, res) => {
    Services.remove(req.params.serviceId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `no se encontro el servicio con el id ${req.params.serviceId}.` });
            } else {
                res.status(500).send({ message: "No se pudo eliminar el servicio " + req.params.serviceId });
            }
        } else res.send({ message: `Servicio eliminado correctamenete` });
    });
};

// Busca el servicio de la empresa apor el ID de la empresa
exports.getById = (req, res) => {
    Services.findByCompanyId(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `No se encontraron servicios` });
            } else {
                res.status(500).send({ message: "No Hay servicios para esta empresa " });
            }
        } else res.send(data);
    });
}

// Busca el servicio por su ID
exports.getServiceById = (req, res) => {
    Services.findServiceById(req.params.serviceId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `No se encontraron servicios` });
            } else {
                res.status(500).send({ message: "No Hay servicios para esta empresa " });
            }
        } else res.send(data);
    });
}

// Busca un servicio por el id del usuario
exports.findByUserId = (req, res) => {
    Services.findServiceByUserId(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `No se encontraron servicios` });
            } else {
                res.status(500).send({ message: "No Hay servicios para este usuario " });
            }
        } else res.send(data);
    });

}

// Registra el servicio a una empresa
exports.companyhasservice = (req, res) => {
    if (!req.body) { res.status(400).send({ message: "Content can not be empty!" }); }
    const company_has_Services = new Company_has_Services({
        company_id_company: req.body.company_id_company,
        services_id_service: req.body.services_id_service,
        status: req.body.status,
        start_date: req.body.start_date,
        end_date: req.body.end_date
    });

    Services.createRelation(company_has_Services, (err, data) => {
        if (err) res.status(500).send({ message: err.message || "Algo a currido al crear la Empresa" });
        else res.send(data);
    });

};

// Actualiza los pagos
exports.payment = (req, res) => {
    if (!req.body) { res.status(400).send({ message: "Content can not be empty!" }); }
    Services.payment(req.params.companyId, req.body, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Customer with id ${req.params.companyId}.` });
            } else {
                res.status(500).send({ message: "Error updating Customer with id " + req.params.companyId });
            }
        } else res.send(data);
    });
}

// Registra un nuevo pago
exports.payment_register = (req, res) => {
    if (!req.body) { res.status(400).send({ message: "Content can not be empty!" }); }
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
                res.status(404).send({ message: `Not found Customer with id ${req.params.companyId}.` });
            } else {
                res.status(500).send({ message: "Error updating Customer with id " + req.params.companyId });
            }
        } else res.send(data);
    });
}