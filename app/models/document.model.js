const sql = require("./db.js");

const Documents = function(document) {
    this.id_files = document.id_files;
    this.url = document.url;
    this.nombre = document.nombre;
    this.category = document.category;
    this.company_id_company = document.company_id_company;
};

Documents.getAll = (userId, result) => {
    return new Promise((resolve, reject) => {
        sql.query(`SELECT files.nombre, company FROM users, company, files WHERE id_user=${userId} and users_id_user=id_user and id_company = company_id_company`, (err, res) => {
            if (err) reject(err)
            resolve(res);
        });
    });
};

Documents.remove = (id_user, result) => {
    sql.query("DELETE FROM users WHERE id_user = ?", id_user, (err, res) => {
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

        // console.log("deleted customer with id: ", id_user);
        result(null, res);
    });
};

Documents.findImage = (id_user) => {
    console.log("2.- Model");
    return new Promise((resolve, reject) => {
        sql.query("SELECT nombre FROM users_has_files, files WHERE users_id_user = ? and files_id_files = id_files", [id_user], (err, res) => {
            if (err) reject(err)
            resolve(res);
        });
    });
}

Documents.getDocumentsById = (companyId, result) => {
    sql.query(`SELECT id_receipt, url, name, num_receipt, value, update_time, status FROM receipt, payments WHERE receipt.company_id_company = ${companyId} AND id_payments = payments_id_payments`, (err, res) => {
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


Documents.getImgById = (companyId, result) => {
    sql.query(`SELECT * FROM files  WHERE company_id_company =${companyId}`, (err, res) => {
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

Documents.exterior = (companyId, result) => {
    sql.query(`SELECT * FROM files  WHERE company_id_company =${companyId} AND  category = 'Establecimiento Exterior'`, (err, res) => {
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

Documents.interior = (companyId, result) => {
    sql.query(`SELECT * FROM files WHERE company_id_company =${companyId} AND category = 'Establecimiento Interior'`, (err, res) => {
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

Documents.ineFrontal = (companyId, result) => {
    sql.query(`SELECT * FROM files WHERE company_id_company =${companyId} AND category = 'INE Frontal'`, (err, res) => {
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


Documents.inePosterior = (companyId, result) => {
    sql.query(`SELECT * FROM files WHERE company_id_company =${companyId} AND category = 'INE Posterior'`, (err, res) => {
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


Documents.comprobante = (companyId, result) => {
    sql.query(`SELECT * FROM files WHERE company_id_company =${companyId} AND category = 'Comprobante'`, (err, res) => {
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




Documents.img = (statements, result) => {
    console.log("2.- Model");
    sql.query("INSERT INTO statements SET ?", statements, (err, res) => {
        if (err) {
            console.log("error1: ", err);
            result(err, null);
            return;
        }
        console.log("Archivo Creado 1111: ", { id: res.id_service, ...statements });
        result(null, { id: res.id_service, ...statements });
    });
}

Documents.getStatements = (companyId, result) => {
    sql.query(`SELECT * FROM statements  WHERE company_id_company =${companyId}`, (err, res) => {
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











module.exports = Documents;