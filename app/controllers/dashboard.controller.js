const Dashboard = require("../models/dashboard.model.js");


exports.getContract = async(req, res) => {
    console.log("1.- Controlador");
    const dashboard = await Dashboard.getContract();
    if (dashboard === undefined) {
        res.json({
            error: 'Error, no se encontraron datos'
        });
    } else res.send(dashboard);
};
exports.getSales = async(req, res) => {
    console.log("1.- Controlador");
    const dashboard = await Dashboard.getSales();
    if (dashboard === undefined) {
        res.json({
            error: 'Error, no se encontraron datos'
        });
    } else res.send(dashboard);
};