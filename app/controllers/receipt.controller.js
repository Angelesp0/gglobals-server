const Receipt = require("../models/receipt.model.js");

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
    const receipt = new Receipt({
        id_receipt: req.body.id_receipt,
        url: 'http://192.168.137.1:3000/files/',
        name: req.file.filename,
        num_receipt: req.body.num_receipt,
        company_id_company: req.body.company_id_company,
        upload_date: req.body.upload_date
    });
    // Save Customer in the database
    Receipt.create(receipt, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Algo a currido al crear la Empresa"
            });
        else res.send(data);
    });
};

exports.total = async(req, res) => {
    console.log("1.- Controlador");
    const receipt = await Receipt.total();
    if (receipt === undefined) {
        res.json({
            error: 'Error, no se encontraron documentos'
        });
    } else res.send(receipt);
};

exports.getById = async(req, res) => {
    console.log("1.- Controlador");
    const receipt = await Receipt.getById(req.params.receiptId);
    if (receipt === undefined) {
        res.json({
            error: 'Error, no se encontraron documentos'
        });
    } else res.send(receipt);
};