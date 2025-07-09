document.getElementById('record-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const location = document.getElementById('location').value;
    const gas = document.getElementById('gas').value;
    const hotel = document.getElementById('hotel').value;
    const maintenance = document.getElementById('maintenance').value;
    const setting = document.getElementById('setting').value;
    const memo = document.getElementById('memo').value;

    const entry = document.createElement('li');
    entry.textContent = `${date} - ${location || '未入力'} / ${gas || '0'}L / ¥${hotel || '0'}\n整備: ${maintenance || 'なし'}\nセッティング: ${setting || 'なし'}\nメモ: ${memo || 'なし'}`;
    document.getElementById('record-list').prepend(entry);
});
