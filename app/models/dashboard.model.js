const sql = require("./db.js");
// constructor
const Dashboard = function(dashboard) {
    this.id_files = dashboard.id_files;
    this.url = dashboard.url;
    this.nombre = dashboard.nombre;
    this.category = dashboard.category;
    this.company_id_company = dashboard.company_id_company;
    this.upload_date = dashboard.upload_date;

};


Dashboard.getContract = (result) => {
    console.log("2.- Model");
    return new Promise((resolve, reject) => {
        sql.query(`SELECT * FROM files where category = 'Contrato'`, (err, res) => {
            if (err) reject(err)
            resolve(res);
        });
    });
};

Dashboard.getSales = (result) => {
    console.log("2.- Model");
    return new Promise((resolve, reject) => {
        sql.query(`SELECT * FROM payments `, (err, res) => {
            if (err) reject(err)
            resolve(res);
        });
    });
};






module.exports = Dashboard;