// Модифікуйте попереднє завдання так, щоб повторне натискання на кнопку скасовувало дію цієї кнопки.
let elems = document.querySelectorAll('p');
let coloLineThrough = document.querySelector('#coloLineThrough');
let coloGetBold = document.querySelector('#coloGetBold');
let coloRed = document.querySelector('#coloRed');

coloLineThrough.addEventListener('click', function () {
    for (let elem of elems) {
        elem.classList.toggle('line-through');
    }
});

coloGetBold.addEventListener('click', function () {
    for (let elem of elems) {
        elem.classList.toggle('bold');
    }
});

coloRed.addEventListener('click', function () {
    for (let elem of elems) {
        elem.classList.toggle('red');
    }
});
