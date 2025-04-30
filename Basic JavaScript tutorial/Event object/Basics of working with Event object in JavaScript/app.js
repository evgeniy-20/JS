// Самостійно виконайте описані маніпуляції і виведіть об'єкт із подією в консоль. Вивчіть структуру цього об'єкта.

let elem = document.querySelector('#elem');
elem.addEventListener('click', function (event) {
    console.log(event); // object Event
})
