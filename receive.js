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