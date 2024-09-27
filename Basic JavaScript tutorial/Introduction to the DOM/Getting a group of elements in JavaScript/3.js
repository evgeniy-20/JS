// Дані інпути з числами, абзац та кнопка. Після натискання кнопки знайдіть суму чисел з інпутів і запишіть цю суму в текст абзацу.

function calculateSum() {
    // Отримуємо значення з інпутів
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);

    // Обчислюємо суму
    let sum = num1 + num2;

    // Виводимо результат в абзац
    document.getElementById("result").textContent = "Результат: " + sum;
}
