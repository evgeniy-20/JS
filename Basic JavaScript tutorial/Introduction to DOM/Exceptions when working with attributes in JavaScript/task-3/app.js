// Дана також кнопка. Дана також кнопка. Після натискання на кнопку отримаєте масив CSS класів нашого діва.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let classArray = Array.from(elem.classList);
    console.log(classArray);
})
