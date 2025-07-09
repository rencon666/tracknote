document.getElementById("recordForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const record = {
    date: form.date.value,
    location: form.location.value || "（未入力）",
    fuel: form.fuel.value || "0",
    accommodation: form.accommodation.value || "0",
    maintenance: form.maintenance.value || "（未入力）",
    setting: form.setting.value || "（未入力）",
    memo: form.memo.value || "",
    photo: form.photo.files[0] ? URL.createObjectURL(form.photo.files[0]) : null,
  };

  const recordList = JSON.parse(localStorage.getItem("records") || "[]");
  recordList.push(record);
  localStorage.setItem("records", JSON.stringify(recordList));
  form.reset();
  renderRecords();
});

function renderRecords() {
  const recordList = JSON.parse(localStorage.getItem("records") || "[]");
  const ul = document.getElementById("recordList");
  ul.innerHTML = "";
  recordList
    .slice()
    .reverse()
    .forEach((record) => {
      const li = document.createElement("li");
      li.innerHTML = \`
<strong>\${record.date}</strong> - \${record.location} / \${record.fuel}L / ￥\${record.accommodation}<br />
整備: \${record.maintenance}<br />
セッティング: \${record.setting}<br />
メモ: \${record.memo}<br />
\${record.photo ? '<img src="' + record.photo + '" width="100" />' : ""}
<hr />
\`;
      ul.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", renderRecords);
