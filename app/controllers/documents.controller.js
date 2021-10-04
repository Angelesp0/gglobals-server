const Documents = require("../models/document.model.js");
const Statements = require("../models/statements.model")

// Obtiene las imagenes por id
exports.imagenes = async(req, res) => {
    const img = await Documents.findImage(req.params.userId);
    if (img === undefined) {
        res.json({ error: 'Error, no se encontraron imagenes' });
    } else res.send(img);
}

// Find one user by id
exports.findOne = (req, res) => {
    Documents.findById(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Customer with id ${req.params.userId}.` });
            } else {
                res.status(500).send({ message: "Error retrieving Customer with id " + req.params.userId });
            }
        } else res.send(data);
    });
};

// Busca Documentos por su id
exports.getDocumentsById = (req, res) => {
    Documents.getDocumentsById(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Customer with id ${req.params.userId}.` });
            } else {
                res.status(500).send({ message: "Error retrieving Customer with id " + req.params.userId });
            }
        } else res.send(data);
    });
};

// Obtiene las imagenes por ID
exports.getImgById = (req, res) => {
    Documents.getImgById(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Customer with id ${req.params.userId}.` });
            } else {
                res.status(500).send({ message: "Error retrieving Customer with id " + req.params.userId });
            }
        } else res.send(data);
    });
};

// Obtiene la imagen exterior de la empresa
exports.exterior = (req, res) => {
    Documents.exterior(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Customer with id ${req.params.userId}.` });
            } else {
                res.status(500).send({ message: "Error retrieving Customer with id " + req.params.userId });
            }
        } else res.send(data);
    });
};

// Obtiene la imagen interior de la empresa
exports.interior = (req, res) => {
    Documents.interior(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Customer with id ${req.params.userId}.` });
            } else {
                res.status(500).send({ message: "Error retrieving Customer with id " + req.params.userId });
            }
        } else res.send(data);
    });
};

// Obtiene la imagen ine posterior de la empresa
exports.inePosterior = (req, res) => {
    Documents.inePosterior(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Customer with id ${req.params.userId}.` });
            } else {
                res.status(500).send({ message: "Error retrieving Customer with id " + req.params.userId });
            }
        } else res.send(data);
    });
};

// Obtiene la imagen del comprobante de la empresa
exports.comprobante = (req, res) => {
    Documents.comprobante(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Customer with id ${req.params.userId}.` });
            } else {
                res.status(500).send({ message: "Error retrieving Customer with id " + req.params.userId });
            }
        } else res.send(data);
    });
};

// Obtiene la imagen ine frontal de la empresa
exports.ineFrontal = (req, res) => {
    Documents.ineFrontal(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Customer with id ${req.params.userId}.` });
            } else {
                res.status(500).send({ message: "Error retrieving Customer with id " + req.params.userId });
            }
        } else res.send(data);
    });
};

// Postea las declaraciones
exports.img = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    const statements = new Statements({
        url: 'http://74.208.71.98:3000/files/',
        name: req.file.filename,
        date: req.body.date,
        company_id_company: req.params.companyId,
    });
    Documents.img(statements, (err, data) => {
        if (err)
            res.status(500).send({ message: err.message || "Algo a currido al crear la Empresa" });
        else res.send(data);
    });
}

// Obtiene las declaraciones
exports.getStatements = (req, res) => {
    Documents.getStatements(req.params.companyId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Customer with id ${req.params.userId}.` });
            } else {
                res.status(500).send({ message: "Error retrieving Customer with id " + req.params.userId });
            }
        } else res.send(data);
    });
};

// Obtiene todos los documentos de una empresa
exports.findAll = async(req, res) => {
    const document = await Documents.getAll(req.params.userId);
    if (document === undefined) {
        res.json({ error: 'Error, no se encontraron documentos' });
    } else res.send(document);
};

exports.delete = (req, res) => {
    Documents.remove(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Not found Customer with id ${req.params.userId}.` });
            } else {
                res.status(500).send({ message: "Could not delete Customer with id " + req.params.userId });
            }
        } else res.send({ message: `Customer was deleted successfully!` });
    });
};