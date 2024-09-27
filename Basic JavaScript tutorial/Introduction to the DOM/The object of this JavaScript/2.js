// Дана кнопка, значенням якої є число 1. Зробіть так, щоб натиснути на цю кнопку її значення щоразу збільшувалося на одиницю.

let buttonElemnt = document.querySelector('#incrementButton');
buttonElemnt.addEventListener('click', function () {
    this.textContent = Number(this.textContent) + 1;
})
