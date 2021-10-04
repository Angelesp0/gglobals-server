const sql = require("./db.js");
const Companies = function(company) {
    this.id_company = company.id_company;
    this.company = company.company;
    this.razon = company.razon;
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
    this.sat = company.sat;
    this.last_payment = company.last_payment;
};


// Crea una nueva empresa
Companies.create = (newCompany, newInf, result) => {
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

// Busca una empresa por id 
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

// Get 1 User From ID
Companies.findPayments = (id_company, result) => {
    console.log("2.- Model");
    sql.query(`SELECT id_payments, value, description, status, update_time, name FROM payments, receipt WHERE payments.company_id_company = ${id_company} AND id_payments = payments_id_payments`, (err, res) => {
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
};



// Get 1 User From ID
Companies.service = (id_company, result) => {
    console.log("2.- Model");
    console.log(id_company);
    sql.query(`SELECT id_service, name_service, id_companys, value, end_date FROM services, company_has_services, payments WHERE company_has_services.company_id_company = ${id_company} AND id_service = services_id_service AND id_companys = company_has_services_id_companys`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log(res);
            result(null, res[0]);
            return;
        }

        // not found Customer with the id
        result({ kind: "Empresa no encontrada" }, null);
    });
};

// Get All Users
Companies.getAll = async(result) => {
    console.log("2.- Model getAll");
    return new Promise((resolve, reject) => {
        sql.query("SELECT * FROM company, information WHERE company_id_company = id_company", (err, res) => {
            if (err) reject(err)
            resolve(res);
        });
    });
};

Companies.getHistorialPagos = async(id_company, result) => {
    return new Promise((resolve, reject) => {
        sql.query("SELECT * FROM payments WHERE company_id_company = ?", [id_company], (err, res) => {
            if (err) reject(err)
            resolve(res);
        });
    });
};


// Get All Users
Companies.getLocation = result => {
    console.log("2.- Model-------------------------------------");
    sql.query("SELECT company, razon, rfc, tel, files.nombre, lat, lng, first_name, last_name FROM location, company, files, payments, commission, users WHERE location.company_id_company = id_company AND files.company_id_company = id_company AND category = 'Establecimiento Exterior' AND id_company = payments.company_id_company AND id_payments = payments_id_payments AND id_user = commission.users_id_user", (err, res) => {
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
        "UPDATE company SET rfc = ?, street = ?, cp = ?, city = ?, tel = ?, company = ?, num_ext = ?, num_int = ?, state = ?, colony = ?, name = ?, last_name = ?, mobile = ?, email = ?, users_id_user = ? WHERE id_company = ? ", [company.rfc, company.street, company.cp, company.city, company.tel, company.company, company.num_ext, company.num_int, company.state, company.colony, company.name, company.last_name, company.mobile, company.email, company.users_id_user, id_company],
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

// update User
Companies.updateSat = (id_company, sat, result) => {
    sql.query(
        "UPDATE company SET sat = ? WHERE id_company = ? ", [sat, id_company],
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

            console.log("updated usuario: ", { id_company: id_company });
            result(null, { id_company: id_company });
        }
    );
};




// update User
Companies.updatePayment = (id_payment, result) => {
    sql.query(
        "UPDATE payments SET status = ? WHERE id_payments = ? ", ['COMPLETED', id_payment],
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

            console.log("updated usuario: ", { id_payment: id_payment });
            result(null, { id_payment: id_payment });
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
Companies.setLocation = (location, result) => {
    console.log('2.- Model');
    sql.query("INSERT INTO location SET ?", location, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, { newInf, location });
            return;
        }
    });
}
Companies.img = (img, result) => {
    console.log("2.- Model");
    sql.query("INSERT INTO files SET ?", img, (err, res) => {
        if (err) {
            console.log("error1: ", err);
            result(err, null);
            return;
        }
        console.log("Archivo Creado 1111: ", { id: res.id_service, ...img });
        result(null, { id: res.id_service, ...img });
    });
}

// Get 1 User From ID
Companies.contract = (id_company, result) => {
    console.log("2.- Model");
    console.log("hola");

    //    sql.query(`SELECT first_name, last_name, company, street, num_ext, num_int, company.colony, company.cp, city, state, main_activity FROM company, information,users WHERE id_company = ${id_company} AND id_user = users_id_user AND id_company = company_id_company`, (err, res) => {

    sql.query(`SELECT id_service, first_name, rfc, last_name, company, company.razon, street, num_ext, num_int, company.colony, company.cp, city, state, main_activity, name_service, nombre  FROM company, information,users, company_has_services, services, files WHERE id_user=users_id_user AND id_company =information.company_id_company AND id_company =  ${id_company} AND id_company = company_has_services.company_id_company AND id_service=services_id_service AND files.company_id_company=id_company AND category = 'Firma'
    `, (err, res) => {
        console.log(res);

        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            //////////////////////////////////////////////////// 
            console.log(res);
            result(null, res[0]);
            return;
        }

        // not found Customer with the id
        result({ kind: "Empresa no encontrada" }, null);
    });
};

// Get 1 User From ID
Companies.getcontract1 = (id_company, result) => {
    console.log("2.- Model");
    //     sql.query(`SELECT nombre FROM files WHERE category = 'Contrato' and company_id_company =  ${id_company}`, (err, res) => {
    sql.query(`SELECT * FROM files WHERE category = 'Contrato' and company_id_company =  ${id_company}`, (err, res) => {
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



Companies.getCer = (id_company, result) => {
    console.log("2.- Model firmas");
    let cer = 'CER'
    sql.query("SELECT * FROM firms WHERE company_id_company= ? AND categoria= 'CER' ", id_company, (err, res) => {
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

Companies.getKey = (id_company, result) => {
    console.log("2.- Model firmas");
    sql.query("SELECT * FROM firms WHERE company_id_company= ? AND categoria = 'KEY' ", id_company, (err, res) => {
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

Companies.getConstancia = (id_company, result) => {
    console.log("2.- Model firmas");
    sql.query("SELECT * FROM firms WHERE company_id_company= ? AND categoria = 'CONSTANCIA' ", id_company, (err, res) => {
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

Companies.getOpinion = (id_company, result) => {
    console.log("2.- Model firmas");
    sql.query("SELECT * FROM firms WHERE company_id_company= ? AND categoria = 'OPINION' ", id_company, (err, res) => {
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

Companies.getDeclaracion = (id_company, result) => {
    console.log("2.- Model firmas");
    sql.query("SELECT * FROM firms WHERE company_id_company= ? AND categoria = 'DECLARACION' ", id_company, (err, res) => {
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
        result({ kind: "No hay firmas" }, null);
    });
};

Companies.getLinea = (id_company, result) => {
    console.log("2.- Model firmas");
    sql.query("SELECT * FROM firms WHERE company_id_company= ? AND categoria = 'LINEA' ", id_company, (err, res) => {
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
        result({ kind: "No hay firmas" }, null);
    });
};

Companies.getFactura = (id_company, result) => {
    console.log("2.- Model firmas");
    sql.query("SELECT * FROM firms WHERE company_id_company= ? AND categoria = 'FACTURA' ", id_company, (err, res) => {
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

Companies.getReceipt = (id_company, result) => {
    console.log("2.- Model getReceipt");
    sql.query("SELECT * FROM receipt WHERE company_id_company= ?", id_company, (err, res) => {
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
        result({ kind: "No hay firmas" }, null);
    });
};








Companies.getfirms = (result) => {
    console.log("2.- Model");

    sql.query('SELECT * FROM firm', (err, res) => {
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
};


// Create one company
Companies.createCer = (firm, result) => {
    console.log("2.- Model createCer");
    sql.query("INSERT INTO firms SET ?", firm, (err, res) => {
        if (err) {
            console.log("error1: ", err);
            result(err, null);
            return;
        }
        console.log(res.insertId);
        firm.id_firms = res.insertId;
        console.log("Registrado: ", {...firm });
        result(null, {...firm });
    });
};

// Create one company
Companies.createConstancia = (firm, result) => {
    console.log("2.- Model createCer");
    sql.query("INSERT INTO firms SET ?", firm, (err, res) => {
        if (err) {
            console.log("error1: ", err);
            result(err, null);
            return;
        }
        console.log(res.insertId);
        firm.id_firms = res.insertId;
        console.log("Registrado: ", {...firm });
        result(null, {...firm });
    });
};

// Create one company
Companies.createOpinion = (firm, result) => {
    console.log("2.- Model createCer");
    sql.query("INSERT INTO firms SET ?", firm, (err, res) => {
        if (err) {
            console.log("error1: ", err);
            result(err, null);
            return;
        }
        console.log(res.insertId);
        firm.id_firms = res.insertId;
        console.log("Registrado: ", {...firm });
        result(null, {...firm });
    });
};

// Create one company
Companies.createArchivos = (firm, result) => {
    console.log("2.- Model createCer");
    sql.query("INSERT INTO firms SET ?", firm, (err, res) => {
        if (err) {
            console.log("error1: ", err);
            result(err, null);
            return;
        }
        console.log(res.insertId);
        firm.id_firms = res.insertId;
        console.log("Registrado: ", {...firm });
        result(null, {...firm });
    });
};




Companies.createKey = (firm, result) => {
    console.log("2.- Model createKey");
    sql.query("INSERT INTO firms SET ?", firm, (err, res) => {
        if (err) {
            console.log("error1: ", err);
            result(err, null);
            return;
        }
        console.log(res.insertId);
        firm.id_firms = res.insertId;
        console.log("Registrado: ", {...firm });
        result(null, {...firm });
    });
};




module.exports = Companies;