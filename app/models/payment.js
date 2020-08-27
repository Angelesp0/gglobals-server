const Payment = function(payment) {
    this.id = payment.id;
    this.value = payment.value;
    this.description = payment.description;
    this.status = payment.status;
    this.update_time = payment.update_time;
    this.company_id_company = payment.company_id_company;
    this.company_has_services_id_companys = payment.company_has_services_id_companys;
};
module.exports = Payment;