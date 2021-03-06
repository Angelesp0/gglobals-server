const Commission = require('../models/commission.model');

// Obtiene todas las comision
exports.getAll = (req, res) => {
    Commission.getAll((err, data) => {
        if (err) res.status(500).send({ message: err.message || "Some error occurred while retrieving customers." });
        else res.send(data);
    });
};

// Agregar nuevas  
exports.create = (req, res) => {
    const commission = new Commission({
        amount: req.body.amount,
        date: req.body.date,
        status: req.body.status,
        payments_id_payments: req.body.payments_id_payments,
        users_id_user: req.body.users_id_user,
    });
    Commission.create(commission, (err, data) => {
        if (err) res.status(500).send({ message: err.message || "Algo a currido al registrar la ubicacion" });
        else res.send(data);
    });
}

// Actualizar comisiones 
exports.update = (req, res) => {
    if (!req.body) { res.status(400).send({ message: "El contenido no puede estar vacio!" }); }
    Commission.update(req.params.userId,
        (err, data) => {
            if (err) res.status(500).send({ message: err.message || "Algo a currido al actualizar los pagos" });
            else res.send(data);
        }
    );
};

// Obtener por ID
exports.getById = (req, res) => {
    if (!req.body) { res.status(400).send({ message: "El contenido no puede estar vacio!" }); }
    Commission.getById(req.params.userId,
        (err, data) => {
            if (err) res.status(500).send({ message: err.message || "Algo a currido al actualizar los pagos" });
            else res.send(data);
        }
    );
};