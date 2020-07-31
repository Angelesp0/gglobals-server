const sql = require("./db.js");
// constructor
const Services = function(service) {
    this.id_service = service.id_service;
    this.name_service = service.name_service;
    this.desc_service = service.desc_service;
    this.price = service.price;
    this.img = service.img;
};
// Create one company
Services.create1 = (newService, result) => {
    console.log(newService);
    console.log("2.- Model");
    sql.query("INSERT INTO services SET ?", newService, (err, res) => {
        if (err) {
            console.log("error1: ", err);
            result(err, null);
            return;
        }
        console.log("Servicio Creado: ", { id: res.id_service, ...newService });
        result(null, { id: res.id_service, ...newService });
    });
};

// Get 1 User From ID
Services.findById = (id_company, result) => {
    console.log("2.- Model");
    sql.query(`SELECT name_service, desc_service, price, start_date, end_date, status, img FROM company_has_services, services WHERE company_id_company = ${id_company} AND services_id_service = id_service `, (err, res) => {
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
        result({ kind: "La empresa no tiene servicios registrados" }, null);
    });
};

// Get 1 User From ID
Services.findServiceById = (id_service, result) => {
    console.log("2.- Model");
    //     sql.query(`SELECT id_company, company, name_service,desc_service,status,start_date,end_date  FROM users, company, company_has_services, services WHERE id_user= ${userId} AND users_id_user=id_user AND id_company=company_id_company AND services_id_service=id_service`, (err, res) => {

    sql.query(`SELECT *  FROM services WHERE id_service= ${id_service}`, (err, res) => {
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
        result({ kind: "La empresa no tiene servicios registrados" }, null);
    });
};


// Get 1 User From ID
Services.findServiceByUserId = (id_user, result) => {
    console.log("2.- Model");
    sql.query(`SELECT id_company, company, name_service,desc_service,status,start_date,end_date  FROM users, company, company_has_services, services WHERE id_user= ${id_user} AND users_id_user=id_user AND id_company=company_id_company AND services_id_service=id_service`, (err, res) => {
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
        result({ kind: "La empresa no tiene servicios registrados" }, null);
    });
};

// Get All Users
Services.getAll = result => {
    console.log("2.- Model");
    sql.query("SELECT * FROM services", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

// update User
Services.updateById = (id_service, service, result) => {
    sql.query(
        "UPDATE services SET name_service = ?, desc_service = ?, price = ? WHERE id_service = ? ", [service.name_service, service.desc_service, service.price, id_service],
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

            console.log("updated usuario: ", { id_service: id_service, ...service });
            result(null, { id_service: id_service, ...service });
        }
    );
};

// remove companies
Services.remove = (id_service, result) => {
    sql.query("DELETE FROM services WHERE id_service = ?", id_service, (err, res) => {
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

        console.log("servicio eliminado con el id: ", id_service);
        result(null, res);
    });
};

Services.findByCompanyId = (id_company, result) => {
    sql.query(`SELECT * FROM services, company_has_services WHERE company_id_company = ${id_company} AND services_id_service = id_service `, (err, res) => {
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
        result({ kind: "LA empresa no tiene servicios" }, null);
    });
}

// Create one company
Services.createRelation = (company_has_Services, result) => {
    console.log("2.- Model");
    sql.query("INSERT INTO company_has_services SET ?", company_has_Services, (err, res) => {
        if (err) {
            console.log("error1: ", err);
            result(err, null);
            return;
        }
        console.log("Servicio Creado: ", { id: res.id_service, ...company_has_Services });
        result(null, { id: res.id_service, ...company_has_Services });
    });
};

Services.payment = (id_company, id_service, result) => {
    console.log(id_company);
    console.log(id_service);
    let date_ob = new Date();

    // current year
    let year = date_ob.getFullYear();
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let month1 = ("0" + (date_ob.getMonth() + 2)).slice(-2);

    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);
    let datenow = (year + "-" + month + "-" + date);
    let dateend = (year + "-" + month1 + "-" + date);


    sql.query(
        "UPDATE company_has_services SET status = ?, start_date = ?, end_date= ?  WHERE company_id_company = ? AND services_id_service = ? ", [1, datenow, dateend, id_company, id_service.services_id_service, ],
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

            console.log("updated payment: ", { id_company: id_company });
            result(null, { id_company: id_company });
        }
    );
};

Services.register = (payment, result) => {
    console.log("2.- Model");
    sql.query("INSERT INTO payments SET ?", payment, (err, res) => {
        if (err) {
            console.log("error1: ", err);
            result(err, null);
            return;
        }
        result(null, { payment });
    });
};


module.exports = Services;