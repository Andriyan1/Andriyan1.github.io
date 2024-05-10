//ton cinnect
const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://andriyan1.github.io/tonconnect-manifest.json',
    buttonRootId: 'connect-wallet-btn'
});

//telegram
const tg = window.Telegram.WebApp;
tg.expand();