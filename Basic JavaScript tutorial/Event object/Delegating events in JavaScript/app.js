//  Повторіть наведене рішення. Переконайтеся, що нові liбудуть реагувати на клік.
list.addEventListener('click', function (event) {
    console.log(this);         // наш список
    console.log(event.target); // пункт списка
});

list.addEventListener('click', function (event) {
    event.target.textContent = event.target.textContent + '!';
});
