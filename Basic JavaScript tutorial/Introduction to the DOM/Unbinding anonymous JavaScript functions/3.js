// Модифікуйте попередню задачу так, щоб кожна liзбільшувала своє значення тільки якщо її значення менше 10.

let elems = document.querySelectorAll('ul li');

for (let elem of elems) {
    elem.addEventListener('click', function func() {
        let currentNumber = Number(this.textContent);
        if (currentNumber < 10) {
            this.textContent = currentNumber + 1;
        }
    });
}
