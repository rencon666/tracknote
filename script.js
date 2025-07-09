document.getElementById("recordForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const date = document.getElementById("date").value;
  const location = document.getElementById("location").value;
  const fuel = document.getElementById("fuel").value;
  const accommodation = document.getElementById("accommodation").value;
  const maintenance = document.getElementById("maintenance").value;
  const setup = document.getElementById("setup").value;
  const memo = document.getElementById("memo").value;
  const photoFile = document.getElementById("photo").files[0];

  const reader = new FileReader();
  reader.onloadend = function () {
    const photoData = reader.result;
    const record = { date, location, fuel, accommodation, maintenance, setup, memo, photoData };
    const records = JSON.parse(localStorage.getItem("records") || "[]");
    records.push(record);
    records.sort((a, b) => new Date(b.date) - new Date(a.date));
    localStorage.setItem("records", JSON.stringify(records));
    displayRecords();
    e.target.reset();
  };

  if (photoFile) {
    reader.readAsDataURL(photoFile);
  } else {
    reader.onloadend();
  }
});

function displayRecords() {
  const records = JSON.parse(localStorage.getItem("records") || "[]");
  const container = document.getElementById("records");
  container.innerHTML = "";
  records.forEach(r => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${r.date}</strong> - ${r.location} / ${r.fuel}L / ¥${r.accommodation}<br>
      整備: ${r.maintenance}<br>
      セッティング: ${r.setup}<br>
      メモ: ${r.memo}<br>` +
      (r.photoData ? `<img src="${r.photoData}" alt="記録写真">` : "");
    container.appendChild(div);
  });
}

window.onload = displayRecords;
