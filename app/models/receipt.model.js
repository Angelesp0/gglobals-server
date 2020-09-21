const sql = require("./db.js");
// constructor
const Receipt = function(receipt) {
    this.id_receipt = receipt.id_receipt;
    this.url = receipt.url;
    this.name = receipt.name;
    this.num_receipt = receipt.num_receipt;
    this.payments_id_payments = receipt.payments_id_payments;
    this.company_id_company = receipt.company_id_company;
};
// Create one company
Receipt.create = (newReceipt, result) => {
    console.log("2.- Model");
    sql.query("INSERT INTO receipt SET ?", newReceipt, (err, res) => {
        if (err) {
            console.log("error1: ", err);
            result(err, null);
            return;
        }
        console.log(res.insertId);
        newReceipt.id_receipt = res.insertId;
        console.log("Registrado: ", {...newReceipt });
        result(null, {...newReceipt });
    });
};

Receipt.total = (result) => {
    console.log("2.- Model");
    return new Promise((resolve, reject) => {
        sql.query('SELECT id_receipt FROM receipt ORDER BY id_receipt DESC LIMIT 1', (err, res) => {
            if (err) reject(err)
            resolve(res);
        });
    });
};

Receipt.getById = (id, result) => {
    console.log("2.- Model");
    return new Promise((resolve, reject) => {
        sql.query('SELECT * FROM receipt WHERE id_receipt = ?', id, (err, res) => {
            if (err) reject(err)
            resolve(res);
        });
    });
};


module.exports = Receipt;