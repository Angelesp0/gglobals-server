const Notifications = function(notifications) {
    this.id_sender = notifications.id_sender;
    this.subject = notifications.subject;
    this.message = notifications.message;
    this.status = notifications.status;
    this.time = notifications.time;
    this.users_id_user = notifications.users_id_user;
    this.data = notifications.data;
}
module.exports = Notifications;