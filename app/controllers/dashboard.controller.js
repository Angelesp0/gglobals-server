const Dashboard = require("../models/dashboard.model.js");

// Obtiene la cantidad de contratos
exports.getContract = async(req, res) => {
    const dashboard = await Dashboard.getContract();
    if (dashboard === undefined) {
        res.json({ error: 'Error, no se encontraron datos' });
    } else res.send(dashboard);
};
// Obtiene la cantidad de ventas
exports.getSales = async(req, res) => {
    const dashboard = await Dashboard.getSales();
    if (dashboard === undefined) {
        res.json({ error: 'Error, no se encontraron datos' });
    } else res.send(dashboard);
};

// Obtiene la cantidad de ejecutivos
exports.getExecutive = async(req, res) => {
    const dashboard = await Dashboard.getExecutive();
    if (dashboard === undefined) {
        res.json({ error: 'Error, no se encontraron datos' });
    } else res.send(dashboard);
};

// Obtiene la cantidad de las comisiones por ejecutivo
exports.getExecutiveById = async(req, res) => {
    const dashboard = await Dashboard.getExecutiveById(req.params.executiveId);
    if (dashboard === undefined) {
        res.json({ error: 'Error, no se encontraron datos' });
    } else res.send(dashboard);
};

// Obtiene las comisiones por cobrar
exports.getcommission = async(req, res) => {
    const dashboard = await Dashboard.getcommission();
    if (dashboard === undefined) {
        res.json({ error: 'Error, no se encontraron datos' });
    } else res.send(dashboard);
};