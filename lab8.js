function showDate() {
    let out = document.getElementById('current-date');
    let out1 = document.getElementById('current-date1');
    let out2 = document.getElementById('current-date2');
    let out3 = document.getElementById('current-date3');
    let out4 = document.getElementById('current-date4');
    let today = new Date();
    let today1 = new Date();
    let today2 = new Date();
    let today3 = new Date();
    let today4 = new Date();
    out.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');
    out1.innerHTML = 'Дата и время для итальянской локали: ' + today1.toLocaleString('it-IT');
    out2.innerHTML = 'Дата и время для польской локали: ' + today2.toLocaleString('pl-PL');
    out3.innerHTML = 'Дата и время для китайской локали: ' + today3.toLocaleString('zh-HK');
    out4.innerHTML = 'Дата и время для монгольской локали: ' + today4.toLocaleString('mn-MN');
}