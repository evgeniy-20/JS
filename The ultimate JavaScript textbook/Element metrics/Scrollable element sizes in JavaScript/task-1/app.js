// Дано елемент і кнопку. Після натискання на кнопку виведіть у консоль ширину і висоту елемента з прокруткою.

let elem = document.querySelector('.elem');
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    console.log(elem.scrollHeight);
    console.log(elem.scrollWidth);
})
