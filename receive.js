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


async function transaction() {
    const transaction = {
        validUntil: Math.round(Date.now() / 1000) + 10,
        messages: [{
            address: "0:222d62149fa9c401b45151731f1f1135304bea325cbbc7c3eb64e7806e5a4148", // destination address
            amount: "20000000" //Toncoin in nanotons
        }]
    };
    try {
        await tonConnectUI.sendTransaction(transaction)
    } catch (e) {
        console.error(e);
    }
}
