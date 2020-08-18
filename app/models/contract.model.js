const sql = require("./db.js");
// constructor
const Contract = function(contract) {
    this.id_files = contract.id_rid_fileseceipt;
    this.url = contract.url;
    this.nombre = contract.nombre;
    this.category = contract.category;
    this.company_id_company = contract.company_id_company;
};

Contract.total = (result) => {
    console.log("2.- Model");
    return new Promise((resolve, reject) => {
        sql.query('SELECT id_files FROM files ORDER BY id_files DESC LIMIT 1', (err, res) => {
            if (err) reject(err)
            resolve(res);
        });
    });
};


module.exports = Contract;