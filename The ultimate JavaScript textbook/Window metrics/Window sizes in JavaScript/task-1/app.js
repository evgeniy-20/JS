// Після натискання на кнопку виведіть ширину і висоту вікна.

let button = document.querySelector('.button');
button.addEventListener('click', function () {
    let w = window.innerWidth;
    let h = window.innerHeight;
    console.log(w);
    console.log(h);
})
