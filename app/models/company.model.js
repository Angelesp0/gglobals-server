const sql = require("./db.js");
// constructor
const Companies = function(company) {
    this.id_company = company.id_company;
    this.company = company.company;
    this.rfc = company.rfc;
    this.state = company.state;
    this.city = company.city;
    this.type_colony = company.type_colony;
    this.colony = company.colony;
    this.type_street = company.type_street;
    this.street = company.street;
    this.cp = company.cp;
    this.tel = company.tel;
    this.num_ext = company.num_ext;
    this.num_int = company.num_int;
    this.invoice = company.invoice;
    this.users_id_user = company.users_id_user;
    this.img = company.img;
    this.floor = company.floor;
    this.local_number = company.local_number;
    this.type_mall = company.type_mall;
    this.name_mall = company.name_mall;
    this.type_street1 = company.type_street1;
    this.street1 = company.street1;
    this.type_street2 = company.type_street2;
    this.street2 = company.street2;
    this.type_street3 = company.type_street3;
    this.street3 = company.street3;
};


// Create one company
Companies.create = (newCompany, newInf, result) => {
    console.log("2.- Model");
    //console.log(newCompany);
    sql.query("INSERT INTO company SET ?", newCompany, (err, res) => {
        if (err) {
            console.log("error1: ", err);
            result(err, null);
            return;
        }
        const company = res.insertId;
        newInf["company_id_company"] = res.insertId;
        sql.query("INSERT INTO information SET ?", newInf, (err, res) => {
            if (err) {
                console.log("errorw: ", err);
                result(err, null);
                return;
            }
            result(null, { newInf, newCompany });
        })
    });
};
// Get 1 User From ID
Companies.findById = (id_company, result) => {
    console.log("2.- Model");
    sql.query(`SELECT * FROM company WHERE id_company = ${id_company}`, (err, res) => {
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
        result({ kind: "Empresa no encontrada" }, null);
    });
};
// Get All Users
Companies.getAll = result => {
    console.log("2.- Model");
    sql.query("SELECT * FROM company, information WHERE company_id_company = id_company", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

Companies.getAllfiles = result => {
    console.log("2.- Model");
    sql.query("SELECT * FROM company", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

// update User
Companies.updateById = (id_company, company, result) => {
    sql.query(
        "UPDATE company SET rfc = ?, street = ?, cp = ?, city = ?, tel = ?, company = ?, num_ext = ?, num_int = ?, state = ?, colony = ?, name = ?, last_name = ?, mobile = ?, email = ?, invoice = ?, users_id_user = ? WHERE id_company = ? ", [company.rfc, company.street, company.cp, company.city, company.tel, company.company, company.num_ext, company.num_int, company.state, company.colony, company.name, company.last_name, company.mobile, company.email, company.invoice, company.users_id_user, id_company],
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

            console.log("updated usuario: ", { id_company: id_company, ...company });
            result(null, { id_company: id_company, ...company });
        }
    );
};

// remove companies
Companies.remove = (id_company, result) => {
    sql.query("DELETE FROM company WHERE id_company = ?", id_company, (err, res) => {
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

        console.log("deleted company with id: ", id_company);
        result(null, res);
    });
};

Companies.findByCompanyId = (id_company, result) => {
    sql.query(`SELECT nombre FROM files WHERE company_id_company = ${id_company}`, (err, res) => {
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
        result({ kind: "Empresa no encontrada" }, null);
    });
}
module.exports = Companies;