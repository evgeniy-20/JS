// Дано елемент і кнопку. Після натискання на кнопку виведіть у консоль клієнтську ширину і висоту елемента.

let elem = document.querySelector('.elem');
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    console.log(elem.clientHeight);
    console.log(elem.clientWidth);
})
