// Дано тег ul. Зробіть так, щоб за кліком на будь-яку li в ній з'являвся інпут, за допомогою якого можна буде відредагувати текст цієї li.

let elems = document.querySelectorAll('ul li');
for (let li of elems) {
    li.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = li.textContent;
        li.appendChild(input);
        input.addEventListener('blur', function () {
            li.textContent = this.value;
            li.addEventListener('click', func);
        });

        li.removeEventListener('click', func);
    });
}
