import telegram
from telegram.ext import Updater, CommandHandler

# Токен вашого бота
TOKEN = '7158497662:AAFq9o1fcQHhlj1sSUdrucKKISunvPt0izU'

# Функція, яка відповідає на команду /pay
def pay(update, context):
    # Адреса для переказу
    address = "UQCJ1FTSnw98RPCGXYxGnSnmfSkjRkFJCqsVbNTQ8qyi5QrO"
    amount = 1000000000  # 1 TON в нанотонах
    text = "Оплата за товар"
    
    # Створення deeplink
    deeplink = f"ton://transfer/{address}?amount={amount}&text={text}"

    # Відправка користувачу посилання на платіж
    update.message.reply_text(
        f"Натисніть на це посилання, щоб здійснити платіж: {deeplink}\n\n"
        "Якщо посилання не відкривається, скопіюйте та вставте адресу в додаток TON Keeper вручну."
    )

# Основна функція для запуску бота
def main():
    # Створення об'єкта бота
    updater = Updater(TOKEN, use_context=True)
    dp = updater.dispatcher

    # Обробка команди /pay
    dp.add_handler(CommandHandler("pay", pay))

    # Запуск бота
    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()
