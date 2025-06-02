// Після натискання на кнопку виведіть ширину з урахуванням прокрученої частини.

let button = document.querySelector('.button');
button.addEventListener('click', function () {
    let scrollWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    )
    console.log(scrollWidth);
})
