// Після натискання на кнопку виведіть, на скільки залишилося до кінця прокрутки по вертикалі.

let button = document.querySelector('.button');
button.addEventListener('click', function () {
    let y = window.pageYOffset;
    let height = document.body.scrollHeight - window.innerHeight;
    console.log(height - y);
})
