document.getElementById("recordForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const date = document.getElementById("date").value;
  const location = document.getElementById("location").value;
  const fuel = document.getElementById("fuel").value;
  const accommodation = document.getElementById("accommodation").value;
  const maintenance = document.getElementById("maintenance").value;
  const setting = document.getElementById("setting").value;
  const memo = document.getElementById("memo").value;

  const recordList = document.getElementById("recordList");
  const li = document.createElement("li");
  li.innerHTML = `<strong>${date}</strong> - ${location} / ${fuel} L / ¥${accommodation}<br>
    整備: ${maintenance}<br>
    セッティング: ${setting}<br>
    メモ: ${memo}<br><hr>`;

  recordList.prepend(li);
});
