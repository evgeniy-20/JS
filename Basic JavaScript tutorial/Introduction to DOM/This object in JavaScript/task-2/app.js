// Дано кнопку, значенням якої слугує число 1. Зробіть так, щоб після кліка на цю кнопку її значення щоразу збільшувалося на одиницю.

let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let currentValue = Number(this.textContent) || 0; // Якщо текст не є числом, ставимо 0
    this.textContent = currentValue + 1;
})
