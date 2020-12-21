const Receipt = require("../models/receipt.model.js");

// Crea un nuevo recibo
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const receipt = new Receipt({
        id_receipt: req.body.id_receipt,
        url: 'http://192.168.100.71:3000/files/',
        name: req.file.filename,
        num_receipt: req.body.num_receipt,
        payments_id_payments: req.body.payments_id_payments,
        company_id_company: req.body.company_id_company,
        upload_date: req.body.upload_date
    });
    Receipt.create(receipt, (err, data) => {
        if (err) res.status(500).send({ message: err.message || "Algo a currido al crear la Empresa" });
        else res.send(data);
    });
};

// Obtenemos el id del ultimo recibo
exports.total = async(req, res) => {
    const receipt = await Receipt.total();
    if (receipt === undefined) {
        res.json({ error: 'Error, no se encontraron documentos' });
    } else res.send(receipt);
};

// Obtenemos un recibo por id
exports.getById = async(req, res) => {
    const receipt = await Receipt.getById(req.params.receiptId);
    if (receipt === undefined) {
        res.json({ error: 'Error, no se encontraron documentos' });
    } else res.send(receipt);
};