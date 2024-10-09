// Самостійно напишіть код, який демонструватиме сплив подій. Перевірте на ньому випливання різних типів подій.
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

elem1.addEventListener('click', function () {
    alert('green');
})

elem2.addEventListener('click', function () {
    alert('blue');
})

elem3.addEventListener('click', function () {
    alert('red');
})
