// assets/js/books.js
document.addEventListener("DOMContentLoaded", function () {
    loadGenericList("../data/books.json", ["title", "author", "year", "stock", "category"]);
});