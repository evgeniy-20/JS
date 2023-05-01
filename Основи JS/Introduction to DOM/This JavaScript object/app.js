//Даний інпут. Після отримання фокусу цим інпутом запишіть у нього число 1, а за втратою фокусу – число 2. Використовуйте об'єкт для звернення до інпута всередині функції-обробника this.

let elem = document.querySelector('#elem');

elem.addEventListener('focus', function() {
    this.value = 1;
})
elem.addEventListener('blur', function() {
    this.value = 2;
})

//Дана кнопка, значенням якої є число 1. Зробіть так, щоб натиснути на цю кнопку її значення щоразу збільшувалося на одиницю.

let submit = document.querySelector('#submit');

submit.addEventListener('click', function() {
    this.value = parseInt(this.value) + 1;
})