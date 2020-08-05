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
        console.log("Archivo Creado: ", commission);
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


module.exports = Commission;