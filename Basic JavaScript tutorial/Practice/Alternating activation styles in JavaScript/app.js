// Дано HTML список ul. Зробіть так, щоб після натискання на будь-який пункт списку він активувався червоним фоном.

let list = document.querySelectorAll('.elem li');
let color = 'blue';
for (let li of list) {
    li.addEventListener('click', function () {
        color = (color === 'blue') ? 'yellow' : 'blue';
        this.style.backgroundColor = color;
    });
}
