const sql = require("./db.js");

const Documents = function(document) {
    this.id_files = document.id_files;
    this.url = document.url;
    this.nombre = document.nombre;
    this.category = document.category;
};

// Get All Users
Documents.getAll = (userId, result) => {
    return new Promise((resolve, reject) => {
        sql.query(`SELECT nombre FROM users_has_files, files WHERE users_id_user = ${userId} AND files_id_files = id_files And category = 'file'`, (err, res) => {
            if (err) reject(err)
            resolve(res);
        });
    });
};

// Get 1 User From ID
Documents.findById = (userId, result) => {
    sql.query(`SELECT * FROM users WHERE id_user = ${userId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res[0]);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
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

        console.log("deleted customer with id: ", id_user);
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