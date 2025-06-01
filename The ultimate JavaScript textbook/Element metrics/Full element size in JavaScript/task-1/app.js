// Дано елемент і кнопку. Після натискання на кнопку виведіть у консоль повну ширину і висоту елемента.

let elem = document.querySelector('.elem');
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    console.log(elem.offsetWidth);
    console.log(elem.offsetHeight);
})
