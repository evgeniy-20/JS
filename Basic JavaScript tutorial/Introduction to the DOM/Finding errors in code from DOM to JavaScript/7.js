// По кліку на кнопку в консоль повинна вивестись сума чисел з абзаців:
let button = document.querySelector('button');
let elems = document.querySelectorAll('p');

button.addEventListener('click', function () {
    let sum = 0; // Сума оновлюється кожного разу при кліку
    for (let elem of elems) {
        sum += +elem.textContent; // Додаємо значення з кожного абзацу
    }
    console.log(sum); // Виводимо результат в консоль після кліку
});
