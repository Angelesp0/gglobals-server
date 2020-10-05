const Commission = require('../models/commission.model');

exports.getAll = (req, res) => {
    console.log("1.- Controlador");
    Commission.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

exports.create = (req, res) => {
    console.log("1.- Controlador");
    const commission = new Commission({
        amount: req.body.amount,
        date: req.body.date,
        status: req.body.status,
        payments_id_payments: req.body.payments_id_payments,
        users_id_user: req.body.users_id_user,
    })
    Commission.create(commission, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Algo a currido al registrar la ubicacion"
            });
        else res.send(data);
    });
}


exports.update = (req, res) => {
    console.log("1.- Controlador");
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "El contenido no puede estar vacio!"
        });
    }
    Commission.update(req.params.userId,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Algo a currido al actualizar los pagos"
                });
            else res.send(data);
        }
    );
};

exports.getById = (req, res) => {
    console.log("1.- Controlador");
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "El contenido no puede estar vacio!"
        });
    }
    Commission.getById(req.params.userId,
        (err, data) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Algo a currido al actualizar los pagos"
                });
            else res.send(data);
        }
    );
};