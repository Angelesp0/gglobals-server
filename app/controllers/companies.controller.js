const Companies = require("../models/company.model.js");
const Inf = require("../models/company_inf.model.js");
const Location = require("./../models/location.model.js");
const Image = require("./../models/img.model.js");


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
    const company = new Companies({
        company: req.body.company,
        razon: req.body.razon,
        rfc: req.body.rfc,
        state: req.body.state,
        city: req.body.city,
        type_colony: req.body.type_colony,
        colony: req.body.colony,
        type_street: req.body.type_street,
        street: req.body.street,
        cp: req.body.cp,
        tel: req.body.tel,
        num_ext: req.body.num_ext,
        num_int: req.body.num_int,
        users_id_user: req.body.users_id_user,
        img: req.body.img,
        floor: req.body.floor,
        local_number: req.body.local_number,
        type_mall: req.body.type_mall,
        name_mall: req.body.name_mall,
        type_street1: req.body.type_street1,
        street1: req.body.street1,
        type_street2: req.body.type_street2,
        street2: req.body.street2,
        type_street3: req.body.type_street3,
        street3: req.body.street3

    });
    const inf = new Inf({
            contact_name: req.body.contact_name,
            job: req.body.job,
            contact_tel: req.body.contact_tel,
            contact_email: req.body.contact_email,
            company_start: req.body.company_start,
            facilities: req.body.facilities,
            scope_of_operations: req.body.scope_of_operations,
            sales_range: req.body.sales_range,
            distribution: req.body.distribution,
            percentage_main: req.body.percentage_main,
            main_activity: req.body.main_activity,
            percentage_secondary: req.body.percentage_secondary,
            secondary_activity: req.body.secondary_activity,
            percentage_tertiary: req.body.percentage_tertiary,
            tertiary_activity: req.body.tertiary_activity,
            activity_code: req.body.activity_code,
            employees: req.body.employees,
            female_employees: req.body.female_employees,
            attention_area: req.body.attention_area,
            financing: req.body.financing,
            digital_equipment: req.body.digital_equipment,
            internet: req.body.internet,
            advertising: req.body.advertising,
            training: req.body.training,
            facebook: req.body.facebook,
            business_group: req.body.business_group,
            users_id_user: req.body.users_id_user,
            cluster: req.body.cluster,
            productive_chain: req.body.productive_chain,
            distinctive: req.body.distinctive,
        })
        /*const company_has_Services = new Company_has_Services({
            company_id_company: req.body.company_id_company,
            services_id_service: req.body.services_id_service,
            status: req.body.status,
            start_date: req.body.start_date,
            end_date: req.body.end_date
        });*/

    // Save Customer in the database
    Companies.create(company, inf, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Algo a currido al crear la Empresa"
            });
        else res.send(data);
    });
};

// Find one user by id
exports.findOne = (req, res) => {
    console.log("1.- Controlador 1");
    Companies.findById(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.id_company}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Customer with id 2 " + req.params.id_company
                });
            }
        } else res.send(data);
    });
};

// Find one user by id
exports.service = (req, res) => {
    console.log("1.- Controlador");
    Companies.service(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.id_company}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Customer with id " + req.params.id_company
                });
            }
        } else res.send(data);
    });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    console.log("1.- Controlador");
    Companies.getAll((err, data) => {
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

    Companies.updateById(
        req.params.companyId,
        new Companies(req.query),
        (err, data) => {
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
        }
    );

};

// Delete Companies
exports.delete = (req, res) => {
    Companies.remove(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.companyId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Customer with id " + req.params.companyId
                });
            }
        } else res.send({ message: `Customer was deleted successfully!` });
    });
};

exports.findByCompanyId = (req, res) => {
    console.log("1.- Controlador");
    Companies.findByCompanyId(req.params.companyId, (err, data) => {
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

exports.postLocation = (req, res) => {
    console.log("1.- Controlador");
    const location = new Location({
        lat: req.body.lat,
        lng: req.body.lng,
        label: req.body.label,
        company_id_company: req.body.company_id_company,
    })
    Companies.setLocation(location, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Algo a currido al registrar la ubicacion"
            });
        else res.send(data);
    });
}

// Retrieve all Customers from the database.
exports.getLocation = (req, res) => {
    console.log("1.- Controlador-------------");
    Companies.getLocation((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};


// Create One Companies
exports.img = (req, res) => {
    console.log("1.- Controlador");
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a Customer
    const imagen = new Image({
        url: './public',
        nombre: req.file.filename,
        category: req.body.category,
        company_id_company: req.body.company_id_company,
        upload_date: req.body.upload_date
    });
    console.log(imagen);
    // Save Customer in the database
    Companies.img(imagen, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Algo a currido al crear la Empresa"
            });
        else res.send(data);
    });
}

exports.contract = (req, res) => {
    console.log("1.- Controlador");
    Companies.contract(req.params.companyId, (err, data) => {
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

exports.getcontract = (req, res) => {
    console.log("1.- Controlador");
    Companies.getcontract1(req.params.companyId, (err, data) => {
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

exports.getfirm = (req, res) => {
    console.log("1.- Controlador");
    Companies.getfirms((err, data) => {
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