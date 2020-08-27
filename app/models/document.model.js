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


module.exports = Documents;