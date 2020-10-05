const sql = require("./db.js");

const Commission = function(commission) {
    this.amount = commission.amount;
    this.date = commission.date;
    this.status = commission.status;
    this.payments_id_payments = commission.payments_id_payments;
    this.users_id_user = commission.users_id_user;
};

// Create one company
Commission.create = (commission, result) => {
    console.log("2.- Model");
    //console.log(newCompany);
    sql.query("INSERT INTO commission SET ?", commission, (err, res) => {
        if (err) {
            console.log("commission: ", err);
            result(err, null);
            return;
        }
        // console.log("Archivo Creado: ", commission);
        result(null, commission);
    });
};

// Get All Users
Commission.getAll = result => {
    console.log("2.- Model");
    sql.query("SELECT * FROM commission", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

// update User
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
                // not found Customer with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated usuario: ");
            result(null, { message: 'comisión actualizado' });
        }
    );
};


// update User
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

            // not found Customer with the id
            result({ kind: "not_found" }, null);
        });

};





module.exports = Commission;