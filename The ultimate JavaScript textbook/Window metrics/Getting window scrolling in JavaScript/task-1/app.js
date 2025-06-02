// Після натискання на кнопку виведіть, на скільки прокручено вікно по вертикалі.

let button = document.querySelector('.button');
button.addEventListener('click', function () {
    let y = window.pageYOffset;
    console.log(y);
})
