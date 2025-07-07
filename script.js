
document.getElementById("recordForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const date = document.getElementById("date").value;
    const place = document.getElementById("place").value;
    const fuel = document.getElementById("fuel").value;
    const stayCost = document.getElementById("stayCost").value;
    const note = document.getElementById("note").value;

    const record = { date, place, fuel, stayCost, note };
    let records = JSON.parse(localStorage.getItem("records") || "[]");
    records.push(record);
    localStorage.setItem("records", JSON.stringify(records));
    renderRecords();
    this.reset();
});

function renderRecords() {
    const list = document.getElementById("recordsList");
    list.innerHTML = "";
    const records = JSON.parse(localStorage.getItem("records") || "[]");
    records.forEach((rec, index) => {
        const item = document.createElement("li");
        item.textContent = `${rec.date} - ${rec.place || "場所なし"} - ${rec.fuel || 0}L - ¥${rec.stayCost || 0} - ${rec.note}`;
        list.appendChild(item);
    });
}

renderRecords();
