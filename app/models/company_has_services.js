const Company_has_Services = function(service) {
    this.company_id_company = service.company_id_company;
    this.services_id_service = service.services_id_service;
    this.status = service.status;
    this.start_date = service.start_date;
    this.end_date = service.end_date;
};
module.exports = Company_has_Services;