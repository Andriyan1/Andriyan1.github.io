//ton cinnect
// const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
//     manifestUrl: 'https://andriyan1.github.io/tonconnect-manifest.json',
//     buttonRootId: 'connect-wallet-btn'
// });



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