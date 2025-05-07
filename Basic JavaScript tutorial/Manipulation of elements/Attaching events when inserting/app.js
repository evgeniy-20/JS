// Дано ol і кнопку. Зробіть так, щоб за кліком на кнопку в кінець ol додавався тег li. Зробіть так, щоб за кліком на будь-який із доданих li у кінець його тексту записувався знак оклику.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    let li = document.createElement('li');
    li.textContent = 'Kristina';

    // додаємо обробник події для нового li
    li.addEventListener('click', function () {
        li.textContent += '!';
    });

    elem.appendChild(li);
});
