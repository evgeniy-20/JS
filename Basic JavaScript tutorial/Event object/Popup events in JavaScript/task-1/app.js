// Самостійно напишіть код, який демонструватиме спливання подій. Перевірте на ньому спливання різних типів подій.
let elem1 = document.getElementById('elem1');
let elem2 = document.getElementById('elem2');
let elem3 = document.getElementById('elem3');

elem1.addEventListener('click', function () {
    alert('Зелений (elem1)');
});

elem2.addEventListener('click', function () {
    alert('Синій (elem2)');
});

elem3.addEventListener('click', function () {
    alert('Червоний (elem3)');
});
