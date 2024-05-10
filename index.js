//ton cinnect
const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://andriyan1.github.io/tonconnect-manifest.json',
    buttonRootId: 'connect-wallet-btn'
});

//telegram
const tg = window.Telegram.WebApp;
tg.expand();
var myModalTransfer = document.getElementById('myModalTransfer');
var btn = document.getElementById("btnBuy"); // Вибираємо кнопку з ідентифікатором "btnBuy"
var span = document.querySelector(".close-Transfer"); // Вибираємо елемент з класом "close-Transfer"

btn.onclick = function() {
    myModalTransfer.style.display = "block"; // Показуємо модальне вікно при кліці на кнопку
}

span.onclick = function() {
    myModalTransfer.style.display = "none"; // Ховаємо модальне вікно при кліці на елемент
}

window.onclick = function(event) {
    if (event.target == myModalTransfer) {
        myModalTransfer.style.display = "none";
    }
}
