const Contract = require("../models/contract.model.js");

exports.total = async(req, res) => {
    console.log("1.- Controlador");
    const contract = await Contract.total();
    if (contract === undefined) {
        res.json({
            error: 'Error, no se encontraron contratos'
        });
    } else res.send(contract);
};