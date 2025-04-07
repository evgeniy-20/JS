// Модифікуйте попередню задачу так, щоб кожна li збільшувала своє значення тільки після першого натискання на неї.
let listItems = document.querySelectorAll('li');
for (let elem of listItems) {
    elem.addEventListener('click', function func() {
        let currentValue = Number(elem.innerHTML);
        currentValue += 1;
        elem.innerHTML = currentValue;
        elem.removeEventListener('click', func)
    })
}
