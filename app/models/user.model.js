const sql = require("./db.js");
// constructor
const Users = function(user) {
    this.id_user = user.id_user;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.direction = user.direction;
    this.colony = user.colony;
    this.cp = user.cp;
    this.role = user.role;
    this.email = user.email;
    this.password = user.password;
};
// Create one user
Users.create = (newUser, result) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error1: ", err);
            result(err, null);
            return;
        }

        console.log("Usuario Creado: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};
/*
Users.login = (user, result) => {
    console.log("2.- Model");
    if (user.email && user.password) {
        console.log(user);
        sql.query('SELECT * FROM users WHERE email = ? AND password = ?', [user.email, user.password], (err, res) => {
            if (res.length > 0) {
                console.log('hola');
                user.session.loggedin = true;
                user.session.username = username;
                result.redirect('/home');
            } else {
                console.log('Incorrect Username and/or Password!');
            }
            console.log();
        });
    } else {
        console.log('Please enter Username and Password!');
        console.log();
    }

}
*/

// Get All Users
Users.getAll = result => {
    sql.query("SELECT * FROM users", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Users: ", res);
        result(null, res);
    });
};
// Get 1 User From ID
Users.findById = (userId, result) => {
    sql.query(`SELECT * FROM users WHERE id_user = ${userId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found customer: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};
// update User
Users.updateById = (id_user, user, result) => {
    sql.query(
        "UPDATE users SET first_name = ?, last_name = ?, direction = ?, colony = ?, cp = ?, role = ?, email = ?, password = ? WHERE id_user = ? ", [user.first_name, user.last_name, user.direction, user.colony, user.cp, user.role, user.email, user.password, id_user],
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

            console.log("updated usuario: ", { id_user: id_user, ...user });
            result(null, { id_user: id_user, ...user });
        }
    );
};

Users.remove = (id_user, result) => {
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


module.exports = Users;