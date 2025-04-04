// Дано інпут. Після отримання фокуса цим інпутом запишіть у нього число 1, а після втрати фокуса - число 2. Для звернення до інпуту всередині функції-обробника використовуйте об'єкт this.

let elem = document.querySelector('#elem');
elem.addEventListener('focus', function () {
    this.value = 1;
})

elem.addEventListener('blur', function () {
    this.value = 2;
})
