// Дана також кнопка. Після натискання на кнопку отримаєте масив CSS класів нашого дива.

let elem = document.querySelector('#elem');
let submit = document.querySelector('#submit');
submit.addEventListener('click', function () {
    let arr = elem.className.split('');
    console.log(arr);
})
