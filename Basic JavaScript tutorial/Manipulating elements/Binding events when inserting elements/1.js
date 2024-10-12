// Дано ol і кнопка. Зробіть так, щоб по кліку на кнопку до кінця ol додавався тег li. Зробіть так, щоб по кліку на будь-який з доданих liв кінець його тексту записувався знак оклику.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let li = document.createElement('li');
    li.textContent = 'item';
    li.addEventListener('click', function () {
        this.textContent += '!';
    });
    elem.appendChild(li);
})
