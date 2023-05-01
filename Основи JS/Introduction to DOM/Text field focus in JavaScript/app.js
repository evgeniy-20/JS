//Даний інпут. Після отримання фокуса запишіть у нього число 1, а за втратою фокуса – число 2.

let elem = document.querySelector('#elem');
elem.addEventListener('focus', function() {
    elem.value = 1;
})
elem.addEventListener('blur', function() {
    elem.value = 2;
})

//Даний інпут. Нехай до нього вводиться число. Після втрати фокусу виведіть на екран квадрат цього числа.

let elem1 = document.querySelector('#elem1');
elem1.addEventListener('focus', function() {
    elem1.value = null;
})
elem1.addEventListener('blur', function() {
    elem1.value = Math.pow(elem1.value, 2);
})

//Даний інпут, у якому спочатку є якийсь текст. Після отримання фокусу інпутом очистіть вміст інпуту.

let elem2 = document.querySelector('#elem2');
elem2.addEventListener('focus', function() {
    elem2.value = cle;
})