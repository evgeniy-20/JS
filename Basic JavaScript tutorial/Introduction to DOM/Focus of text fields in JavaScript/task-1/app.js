// Дано інпут. Після отримання фокуса запишіть у нього число 1, а після втрати фокуса - число 2.

let elem = document.querySelector('#elem');
elem.addEventListener('focus', function () {
    elem.value = 1;
})
elem.addEventListener('blur', function () {
    elem.value = 2;
})
