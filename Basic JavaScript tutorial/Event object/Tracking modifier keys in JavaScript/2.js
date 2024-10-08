// Нехай у вас є список ul з тегами li: Зробіть так, щоб по кліку на будь-яку li, в кінець її тексту додавалася число 1, якщо клавіша Ctrl, і число 2, якщо натиснута клавіша Shift.

let elem = document.querySelector('#elem');

elem.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        if (event.shiftKey) {
            event.target.textContent += '2';
        }
    }
    if (event.ctrlKey) {
        event.target.textContent += '1';
    }
});
