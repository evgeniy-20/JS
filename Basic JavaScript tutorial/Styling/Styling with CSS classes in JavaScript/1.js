// Дано абзац. Дано кнопки 'перекреслити', 'зробити жирним', 'зробити червоним'. Нехай після натискання на кожну кнопку задана дія відбувається з абзацом (стає червоним, наприклад).
let elems = document.querySelectorAll('p');
let coloLineThrough = document.querySelector('#coloLineThrough');
let coloGetBold = document.querySelector('#coloGetBold');
let coloRed = document.querySelector('#coloRed');

coloLineThrough.addEventListener('click', function () {
    for (let elem of elems) {
        elem.style.textDecoration = 'line-through';
    }
})

coloGetBold.addEventListener('click', function () {
    for (let elem of elems) {
        elem.style.fontWeight = 'bold';
    }
})

coloRed.addEventListener('click', function () {
    for (let elem of elems) {
        elem.style.color = 'red';
    }
})
