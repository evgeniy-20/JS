// По кліку на кнопку має вивестись сума чисел з абзаців:
let button = document.querySelector('button');
let elems = document.querySelectorAll('p');

button.addEventListener('click', function () {
    let sum = 0;

    for (let elem of elems) {
        sum += Number(elem.textContent);
    }

    console.log(sum);
});
