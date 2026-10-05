// assets/js/utils.js

// Fungsi generik untuk fetch data JSON dan render tabel secara dinamis
async function loadGenericList(jsonPath, columns) {
    const tbody = document.querySelector(".table-responsive table tbody");
    const loading = document.getElementById("loading-indicator");
    if (!tbody) return;

    if (loading) loading.style.display = "block";
    tbody.innerHTML = "";

    try {
        // Network delay
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const response = await fetch(jsonPath);
        if (!response.ok) {
            throw new Error("Failed to fetch data (status " + response.status + ")");
        }

        const dataList = await response.json();

        dataList.forEach(function (item) {
            const tr = document.createElement("tr");
            let rowHtml = "";
            
            columns.forEach(function (key) {
                rowHtml += "<td>" + (item[key] !== undefined ? item[key] : "-") + "</td>";
            });
            
            rowHtml += "<td>" +
                "<button type=\"button\" class=\"btn-edit\">Edit</button> " +
                "<button type=\"button\" class=\"btn-detail\">Detail</button>" +
                "<button type=\"button\" class=\"btn-delete\">Delete</button>" +
                "</td>";

            tr.innerHTML = rowHtml;
            tbody.appendChild(tr);
        });
    } catch (err) {
        tbody.innerHTML = "<tr><td colspan=\"" + (columns.length + 1) + "\">Failed to load data: " + err.message + "</td></tr>";
    } finally {
        if (loading) loading.style.display = "none";
    }
}