// Зробіть так, щоб по кліку на першу кнопку на екран виводилося число 1, по кліку на другу – число 2, а по кліку на третю – число 3.

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');

button1.addEventListener('click', function () {
    console.log(1);
})

button2.addEventListener('click', function () {
    console.log(2);
})

button3.addEventListener('click', function () {
    console.log(3);
})
