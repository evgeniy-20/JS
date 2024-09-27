// Даний інпут. Після отримання фокусу цим інпутом запишіть у нього число 1, а за втратою фокусу – число 2. Використовуйте об'єкт для звернення до інпута всередині функції-обробника this.
const inputElement = document.querySelector('myInput');

inputElement.addEventListener('focus', function () {
    this.value = 1;
});

inputElement.addEventListener('blur', function () {
    this.value = 2;
});
