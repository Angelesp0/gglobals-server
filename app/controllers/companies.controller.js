const Companies = require("../models/company.model.js");
const Inf = require("../models/company_inf.model.js");
const Location = require("./../models/location.model.js");
const Image = require("./../models/img.model.js");
const moment = require('moment'); // require


// crea una empresa
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    // vinculas lo datos de la respuesta con los del modelo COMPANIES
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
        street3: req.body.street3,
        last_payment: req.body.last_payment
    });
    // vinculas lo datos de la respuesta con los del modelo INF
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
        // Llamamos la funcion del modelo y enviamos company e info
    Companies.create(company, inf, (err, data) => {
        if (err)
            res.status(500).send({ message: err.message || "Algo a currido al crear la Empresa" });
        else res.send(data);
    });
};

// Buscamos una empresa por su id
exports.findOne = (req, res) => {
    Companies.findById(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Customer with id ${req.params.id_company}.` });
            } else {
                res.status(500).send({ message: "Error retrieving Customer with id 2 " + req.params.id_company });
            }
        } else res.send(data);
    });
};

// Buscamos un pago por el id de la empresa
exports.findPayments = (req, res) => {
    Companies.findPayments(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Customer with id ${req.params.companyId}.` });
            } else {
                res.status(500).send({ message: "Error al buscar pagos con el id de la empresa =" + req.params.companyId });
            }
        } else res.send(data);
    });
};

// Buscamos los servicios de la empresa por su id
exports.service = (req, res) => {
    Companies.service(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Customer with id ${req.params.id_company}.` });
            } else {
                res.status(500).send({ message: "Error retrieving Customer with id " + req.params.id_company });
            }
        } else res.send(data);
    });
};

// Buscamos todas las empresas
exports.findAll = async(request, response) => {
    try {
        let todasEmpresas = await Companies.getAll();
        let empresas = [];
        // moment().format()
        for (let i = 0; i < todasEmpresas.length; i++) {
            const empresa = todasEmpresas[i];
            let pago = await Companies.getHistorialPagos(empresa.id_company);
            let totalPagado = 0;
            let fecha2 = moment();
            let d = moment(pago[0].update_time).day();
            let m = moment(pago[0].update_time).month();
            let y = moment(pago[0].update_time).year();
            let fecha1 = moment(d + '-' + m + '-' + y);
            empresa.totalMesesContratados = fecha2.diff(fecha1, 'months');
            pago.forEach(precio => {
                totalPagado = totalPagado + precio.value
                empresa.totalPagado = totalPagado;
            });
            empresa.pagos = pago;
            empresa.adeudo = (empresa.totalMesesContratados * pago[0].value) - empresa.totalPagado
            empresas.push(empresa);
        }
        response.send(empresas);
    } catch (error) {
        response.send(error);
    }

};








// actualizamos una empresa por su id
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    Companies.updateById(req.params.companyId, new Companies(req.query),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({ message: `Not found Customer with id ${req.params.companyId}.` });
                } else {
                    res.status(500).send({ message: "Error updating Customer with id " + req.params.companyId });
                }
            } else res.send(data);
        }
    );
};

// actualizamos una empresa por su id
exports.updateSat = (req, res) => {
    console.log("controlador updateSat")
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    Companies.updateSat(req.params.companyId, req.body.sat,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({ message: `Not found Customer with id ${req.params.companyId}.` });
                } else {
                    res.status(500).send({ message: "Error updating Customer with id " + req.params.companyId });
                }
            } else res.send(data);
        }
    );
};



// Actualiza un pago por su id
exports.updatePayment = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    Companies.updatePayment(
        req.params.paymentId,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({ message: `Not found Customer with id ${req.params.paymentId}.` });
                } else {
                    res.status(500).send({ message: "Error updating Customer with id " + req.params.paymentId });
                }
            } else res.send(data);
        }
    );
};

// Borra una empresa
exports.delete = (req, res) => {
    Companies.remove(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Customer with id ${req.params.companyId}.` });
            } else {
                res.status(500).send({ message: "Could not delete Customer with id " + req.params.companyId });
            }
        } else res.send({ message: `Customer was deleted successfully!` });
    });
};

// Busca una empresa por su id
exports.findByCompanyId = (req, res) => {
    Companies.findByCompanyId(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `No se encontraron documentos` });
            } else {
                res.status(500).send({ message: "No Hay documentos para esta empresa " });
            }
        } else res.send(data);
    });
}

// Registra la ubicacion de la empresa
exports.postLocation = (req, res) => {
    const location = new Location({
        lat: req.body.lat,
        lng: req.body.lng,
        label: req.body.label,
        company_id_company: req.body.company_id_company,
    })
    Companies.setLocation(location, (err, data) => {
        if (err)
            res.status(500).send({ message: err.message || "Algo a currido al registrar la ubicacion" });
        else res.send(data);
    });
}

// Obtiene todas las ubicaciones de las empresas
exports.getLocation = (req, res) => {
    Companies.getLocation((err, data) => {
        if (err)
            res.status(500).send({ message: err.message || "Some error occurred while retrieving customers." });
        else res.send(data);
    });
};


// Resgistra las imagenes 
exports.img = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    const imagen = new Image({
        url: './public',
        nombre: req.file.filename,
        category: req.body.category,
        company_id_company: req.body.company_id_company,
        upload_date: req.body.upload_date
    });
    Companies.img(imagen, (err, data) => {
        if (err)
            res.status(500).send({ message: err.message || "Algo a currido al crear la Empresa" });
        else res.send(data);
    });
}

// Obtiene los datos para el contrato
exports.contract = (req, res) => {
    Companies.contract(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `No se encontraron documentos` });
            } else {
                res.status(500).send({ message: "No Hay documentos para esta empresa " });
            }
        } else res.send(data);
    });
}

// Obtiene un contrato por id
exports.getcontract = (req, res) => {
    Companies.getcontract1(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `No se encontraron documentos` });
            } else {
                res.status(500).send({ message: "No Hay documentos para esta empresa" });
            }
        } else res.send(data);
    });
}

// Obtiene un contrato por id
exports.getCer = (req, res) => {
        console.log("1.- controller firmas")
        Companies.getCer(req.params.companyId, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.send([]);
                } else {
                    res.status(500).send({ message: "No Hay documentos para esta empresa" });
                }
            } else res.send(data);
        });
    }
    // Obtiene un contrato por id
exports.getKey = (req, res) => {
    console.log("1.- controller firmas")
    Companies.getKey(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.send([]);
            } else {
                res.status(500).send({ message: "No Hay documentos para esta empresa" });
            }
        } else res.send(data);
    });
}

exports.getConstancia = (req, res) => {
    console.log("1.- controller firmas")
    Companies.getConstancia(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.send([]);
            } else {
                res.status(500).send({ message: "No Hay documentos para esta empresa" });
            }
        } else res.send(data);
    });
}

exports.getOpinion = (req, res) => {
    console.log("1.- controller firmas")
    Companies.getOpinion(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.send([]);
            } else {
                res.status(500).send({ message: "No Hay documentos para esta empresa" });
            }
        } else res.send(data);
    });
}

exports.getDeclaracion = (req, res) => {
    console.log("1.- controller firmas")
    Companies.getDeclaracion(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `No se encontraron documentos` });
            } else {
                res.status(500).send({ message: "No Hay documentos para esta empresa" });
            }
        } else res.send(data);
    });
}

exports.getLinea = (req, res) => {
    console.log("1.- controller firmas")
    Companies.getLinea(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `No se encontraron documentos` });
            } else {
                res.status(500).send({ message: "No Hay documentos para esta empresa" });
            }
        } else res.send(data);
    });
}

exports.getFactura = (req, res) => {
    console.log("1.- controller firmas")
    Companies.getFactura(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.send([]);
            } else {
                res.status(501).send({ message: "No Hay documentos para esta empresa" });
            }
        } else res.send(data);
    });
}

exports.getReceipt = (req, res) => {
    console.log("1.- controller firmas")
    Companies.getReceipt(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `No se encontraron documentos` });
            } else {
                res.status(500).send({ message: "No Hay documentos para esta empresa" });
            }
        } else res.send(data);
    });
}















// obtiene las firmas de los colaboradores
exports.getfirm = (req, res) => {
    Companies.getfirms((err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `No se encontraron documentos` });
            } else {
                res.status(500).send({ message: "No Hay documentos para esta empresa " });
            }
        } else res.send(data);
    });
}

exports.createCer = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const firm = ({
        url: 'http://74.208.71.98:3000/files/',
        nombre: req.file.filename,
        categoria: "CER",
        upload_date: req.body.date,
        company_id_company: req.body.company_id_company,
    });
    Companies.createCer(firm, (err, data) => {
        if (err) res.status(500).send({ message: err.message || "Algo a currido al crear la Empresa" });
        else res.send(data);
    });
};

exports.createConstancia = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const firm = ({
        url: 'http://74.208.71.98:3000/files/',
        nombre: req.file.filename,
        categoria: "CONSTANCIA",
        upload_date: req.body.date,
        company_id_company: req.body.company_id_company,
    });
    Companies.createConstancia(firm, (err, data) => {
        if (err) res.status(500).send({ message: err.message || "Algo a currido al crear la Empresa" });
        else res.send(data);
    });
};

exports.createOpinion = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const firm = ({
        url: 'http://74.208.71.98:3000/files/',
        nombre: req.file.filename,
        categoria: "OPINION",
        upload_date: req.body.date,
        company_id_company: req.body.company_id_company,
    });
    Companies.createOpinion(firm, (err, data) => {
        if (err) res.status(500).send({ message: err.message || "Algo a currido al crear la Empresa" });
        else res.send(data);
    });
};

exports.createArchivos = (req, res) => {
    console.log(req.file);
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const firm = ({
        url: 'http://74.208.71.98:3000/files/',
        nombre: req.file.filename,
        categoria: req.body.category,
        upload_date: req.body.date,
        company_id_company: req.body.company_id_company,
    });
    Companies.createArchivos(firm, (err, data) => {
        if (err) res.status(500).send({ message: err.message || "Algo a currido al crear la Empresa" });
        else res.send(data);
    });
};







exports.createKey = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const firm = ({
        url: 'http://74.208.71.98:3000/files/',
        nombre: req.file.filename,
        categoria: "KEY",
        upload_date: req.body.date,
        company_id_company: req.body.company_id_company,
    });
    Companies.createKey(firm, (err, data) => {
        if (err) res.status(500).send({ message: err.message || "Algo a currido al crear la Empresa" });
        else res.send(data);
    });
};