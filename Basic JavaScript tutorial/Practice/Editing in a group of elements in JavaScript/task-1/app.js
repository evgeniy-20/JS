// Дано тег ul. Зробіть так, щоб за кліком на будь-яку li в ній з'являвся інпут, за допомогою якого можна буде відредагувати текст цієї li.

let elems = document.querySelectorAll('.elem li');
for (let elem of elems) {
    elem.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = elem.textContent;
        elem.textContent = '';
        elem.appendChild(input);
        input.addEventListener('blur', function () {
            elem.textContent = this.value;
            elem.addEventListener('click', func);
        })
        elem.removeEventListener('click', func);
    })

}
