//Натисніть на інпуті різні клавіші і подивіться, які у них значення та коди.

let elem = document.querySelector('#elem');
elem.addEventListener('keydown', function (event) {
    console.log(event.code);
    console.log(event.key);
})
