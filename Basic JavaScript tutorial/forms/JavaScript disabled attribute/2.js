// Даний інпут та дві кнопки. Нехай натискання на першу кнопку блокує інпут, а натискання на другу – відблокує.

let elem = document.querySelector('#elem');
let block = document.querySelector('#block');
let unBlock = document.querySelector('#unBlock');
block.addEventListener('click', function () {
    elem.disabled = true;
})
unBlock.addEventListener('click', function () {
    elem.disabled = false;
})
