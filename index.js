//ton cinnect
const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://andriyan1.github.io/tonconnect-manifest.json',
    buttonRootId: 'connect-wallet-btn'
});



//telegram
const tg = window.Telegram.WebApp;
tg.expand();

//block transfer
var myModalTransfer = document.getElementById('myModalTransfer');
var btn = document.getElementById("btnBuy");
var spanTransfer = document.querySelector(".close-Transfer");

var modalReceiv = document.querySelector('.modalReceiv');
var BtnSend = document.getElementById("BtnReceive");
var spanReceiv = document.querySelector(".close-Receiv");

var currentModal = null; // зберігає посилання на поточне відображене модальне вікно

btn.onclick = function() {
    myModalTransfer.style.display = "block";
    currentModal = myModalTransfer;
}

spanTransfer.onclick = function() {
    myModalTransfer.style.display = "none";
    currentModal = null;
}

BtnSend.onclick = function() {
    modalReceiv.style.display = "block";
    currentModal = modalReceiv;
}

spanReceiv.onclick = function() {
    modalReceiv.style.display = "none";
    currentModal = null;
}

window.onclick = function(event) {
    if (event.target == myModalTransfer) {
        myModalTransfer.style.display = "none";
    }
}
function allowOnlyNumbers(event) {
    // Дозволити використання клавіш "Backspace", "Delete", "Tab", "Enter" і "."
    if ([46, 8, 9, 13, 110, 190].includes(event.keyCode) ||
        // Дозволити клавіші від 0 до 9
        (event.keyCode >= 48 && event.keyCode <= 57) ||
        (event.keyCode >= 96 && event.keyCode <= 105)) {
        return true;
    }
    // Інакше заборонити дію клавіші
    return false;
}

function saveValue() {
    // Отримати значення поля вводу
    var inputValue = document.getElementById('input1').value;

    // Зберегти значення у змінну або виконати інші дії
    console.log("Введене значення: " + inputValue);
    // Далі ви можете використовувати значення змінної inputValue для ваших потреб
}
import TonConnectUI from '@tonconnect/ui';

const tonConnectUI = new TonConnectUI({ //connect application
    manifestUrl: 'https://andriyan1.github.io/tonconnect-manifest.json',
    buttonRootId: 'connect-wallet-btn'
});

const transaction = {
    messages: [{
        address: "0:f3b69a1891acd2d653206e0af69e1f3430c2732b66368385c18d8fde4623d24d", // destination address
        amount: "20000000" //Toncoin in nanotons
    }]
}

const result = await tonConnectUI.sendTransaction(transaction)
