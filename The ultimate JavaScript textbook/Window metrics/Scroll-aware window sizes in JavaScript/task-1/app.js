// Після натискання на кнопку виведіть висоту з урахуванням прокрученої частини.

let button = document.querySelector('.button');
button.addEventListener('click', function () {
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    )
    console.log(scrollHeight);
})
