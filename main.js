function sendTelegrambot() {
    let firstName = document.getElementById('name').value
    let email = document.getElementById('email').value
    let number = document.getElementById('number').value
    let nick = document.getElementById('nick').value
    let messageText = document.getElementById('message').value
    event.preventDefault()
    let telegram_bot_id = "6006923348:AAEz2mz_pQPWYoaFg2z6SwfLF0y-x6IQVgY";
    let chat_id = 5985082619;
    let message = `Ismi: ${firstName}; Email: ${email}; Telefon raqami: ${number}; Telegram user name: ${nick}; Xabar matni: ${messageText}`;
    let setting = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(setting).done(function (response) {
        window.location.href='Thankyou.html'
    })
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    return false;
}