// assets/js/members.js
document.addEventListener("DOMContentLoaded", function () {
    loadGenericList("../data/members.json", ["member_id", "name", "gender", "address", "phone"]);
});