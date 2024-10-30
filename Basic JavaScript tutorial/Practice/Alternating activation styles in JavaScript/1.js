// Розберіть мій код, а потім самостійно повторіть розв'язання цієї задачі.

let tds = document.querySelectorAll('#table td');
let color = 'color1';
for (let td of tds) {
    td.addEventListener('click', function () {
        if (color === 'color1') {
            color = 'color2';
        } else {
            color = 'color1';
        }
        td.classList.toggle('color1', color === 'color1');
        td.classList.toggle('color2', color === 'color2');
    });
}
