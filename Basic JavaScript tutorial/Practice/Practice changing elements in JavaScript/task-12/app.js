// Є кнопка та параграф. При кожному натисканні на кнопку в параграфі показується кількість натискань: Ви натиснули 1 раз, Ви натиснули 2 рази і т.д.

let counter = document.querySelector('.counter');
let button = document.querySelector('.button');
let count = 0;
button.addEventListener('click', function () {
    count++;
    counter.textContent = `Ви натиснули ${count} разів`
})
