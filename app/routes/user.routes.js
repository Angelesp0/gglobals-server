module.exports = app => {
    const users = require("../controllers/users.controller.js");
    const company = require("../controllers/companies.controller.js");
    const checkToken = require("./middleware");

    // auth user route
    app.post('/auth', users.login);

    app.use(checkToken);

    // Create a new Customer
    app.post("/users", users.create);

    // Retrieve all Customers
    app.get("/users", users.findAll);

    // Retrieve a single Customer with customerId
    app.get("/users/:userId", users.findOne);

    // Update a Customer with customerId
    app.put("/users/:userId", users.update);

    // Delete a Customer with customerId
    app.delete("/users/:userId", users.delete);


    //=======================================================================================//

    // Create a new company
    app.post("/companies", company.create);

    // Retrieve all companies
    app.get("/companies", company.findAll);

    // Retrieve a single company with companyId
    app.get("/companies/:companyId", company.findOne);

    // Update a company with companyId
    app.put("/companies/:companyId", company.update);

    // Delete a company with companyId
    app.delete("/companies/:companyId", company.delete);

    // Login
    //app.post("/auth", users.login);

};