// Додай атрибут disabled до кнопки з ID "submitBtn" та перевір, чи він забороняє натискання.

document.getElementById('submitBtn').disabled = true;

document.getElementById("submitBtn").addEventListener("click", function () {
    console.log("Кнопка заблокована, натискання не відбудеться.");
});
