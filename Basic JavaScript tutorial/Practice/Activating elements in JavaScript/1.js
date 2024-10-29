// Дано HTML список ul. Зробіть так, щоб після натискання на будь-який пункт списку він активувався червоним фоном.

let lis = document.querySelectorAll('#ul li');
for (let li of lis) {
    li.addEventListener('click', function () {
        this.classList.add('active');
    })
}
