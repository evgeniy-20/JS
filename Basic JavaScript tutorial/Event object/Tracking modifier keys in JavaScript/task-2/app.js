// Зробіть так, щоб за кліком на будь-яку li, у кінець її тексту додавалося число 1, якщо натиснуто клавішу Ctrl, і число 2, якщо натиснуто клавішу Shift.

let elem = document.querySelectorAll('#elem li');

for (let item of elem) {
    item.addEventListener('click', function (event) {
        if (event.ctrlKey) {
            item.innerHTML += '1';
        } else if (event.shiftKey) {
            item.innerHTML += '2';
        }
    });
}
