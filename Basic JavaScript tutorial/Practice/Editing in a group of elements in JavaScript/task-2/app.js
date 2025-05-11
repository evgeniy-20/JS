// Дано HTML таблицю. Зробіть так, щоб за кліком на будь-яку комірку в ній з'являвся інпут для редагування тексту цієї комірки.

let table = document.querySelectorAll('.table td');
for (let elem of table) {
    elem.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = elem.innerHTML;
        elem.innerHTML = '';
        elem.appendChild(input);
        input.addEventListener('blur', function () {
            elem.innerHTML = this.value;
            elem.addEventListener('click', func);
        })
        elem.removeEventListener('click', func);
    })
}
