function addRecord() {
  const now = new Date().toLocaleString();
  const log = prompt("場所や内容を入力:", "〇〇サーキット走行");
  if (log) {
    const li = document.createElement("li");
    li.textContent = `${now} - ${log}`;
    document.getElementById("logList").appendChild(li);
  }
}
