// Дано інпути. Переберіть ці інпути циклом і створіть колекцію Map, ключами в якій будуть інпути, а значенням - їхній порядковий номер на сторінці. Зробіть так, щоб за кліком на будь-який інпут йому в value записувався його порядковий номер.

const inputs = document.querySelectorAll('input');
const inputMap = new Map();
let i = 1;
for (let input of inputs) {
    inputMap.set(input, i++);
    input.addEventListener('click', function () {
        this.value = inputMap.get(this);
    });
}
