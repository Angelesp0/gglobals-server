const sql = require("./db.js");

const Commission = function(commission) {
    this.amount = commission.amount;
    this.date = commission.date;
    this.status = commission.status;
    this.payments_id_payments = commission.payments_id_payments;
    this.users_id_user = commission.users_id_user;
};

// Registra una nueva comision
Commission.create = (commission, result) => {
    sql.query("INSERT INTO commission SET ?", commission, (err, res) => {
        if (err) {
            console.log("commission: ", err);
            result(err, null);
            return;
        }
        result(null, commission);
    });
};

// Obtiene todas las comisiones
Commission.getAll = result => {
    sql.query("SELECT * FROM commission", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

// Actualiza una comision por el id del usuario
Commission.update = (id_user, result) => {
    sql.query(
        `UPDATE commission SET status = 'cobrado' WHERE users_id_user = ${id_user}`,
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { message: 'comisión actualizado' });
        }
    );
};

// Obtener comision por ID
Commission.getById = (id_user, result) => {
    sql.query(
        `SELECT * FROM commission WHERE users_id_user = ${id_user} ORDER BY date DESC`,
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                result(null, res);
                return;
            }
            result({ kind: "not_found" }, null);
        });

};

module.exports = Commission;