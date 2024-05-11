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
    buttonRootId: 'transfer'
});

const transaction = {
    messages: [{
        address: "0:f3b69a1891acd2d653206e0af69e1f3430c2732b66368385c18d8fde4623d24d", // destination address
        amount: "20000000" //Toncoin in nanotons
    }]
}

const result = await tonConnectUI.sendTransaction(transaction)