document.getElementById("recordForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const date = document.getElementById("date").value;
  const location = document.getElementById("location").value;
  const fuel = document.getElementById("fuel").value;
  const accommodation = document.getElementById("accommodation").value;
  const maintenance = document.getElementById("maintenance").value;
  const setting = document.getElementById("setting").value;
  const memo = document.getElementById("memo").value;

  const record = {
    date,
    location,
    fuel,
    accommodation,
    maintenance,
    setting,
    memo
  };

  let records = JSON.parse(localStorage.getItem("records") || "[]");
  records.push(record);
  records.sort((a, b) => new Date(b.date) - new Date(a.date));
  localStorage.setItem("records", JSON.stringify(records));
  displayRecords();
  this.reset();
});

function displayRecords() {
  const records = JSON.parse(localStorage.getItem("records") || "[]");
  const list = document.getElementById("recordList");
  list.innerHTML = "";
  records.forEach(r => {
    const li = document.createElement("li");
    li.textContent = `${r.date} - ${r.location} / ${r.fuel}L / ￥${r.accommodation}
整備: ${r.maintenance}
セッティング: ${r.setting}
メモ: ${r.memo}`;
    list.appendChild(li);
  });
}

window.addEventListener("load", displayRecords);
