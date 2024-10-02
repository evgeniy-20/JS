// По кліку на кнопку, якщо чекбокс відзначено, то має вивестися одне значення, а якщо не відзначено - інше:

let checkbox = document.querySelector('[type="checkbox"]');
let button = document.querySelector('button');

button.addEventListener('click', function () {
    if (checkbox.checked === true) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
