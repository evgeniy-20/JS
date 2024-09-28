// Модифікуйте попередню задачу так, щоб кожна liзбільшувала своє значення лише після першого натискання на неї.

let elems = document.querySelectorAll('ul li');

for (let elem of elems) {
    elem.addEventListener('click', function func() {
        let currentNumber = Number(this.textContent);
        this.textContent = currentNumber + 1;
        this.removeEventListener('click', func);
    });
}
