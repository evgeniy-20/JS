// Модифікуйте попередню задачу так, щоб кожна li збільшувала своє значення тільки якщо її значення менше за 10.

let listItems = document.querySelectorAll('li');
for (let elem of listItems) {
    elem.addEventListener('click', function func() {
        let currentValue = Number(elem.innerHTML);
        if (currentValue < 10) {
            currentValue += 1;
            elem.innerHTML = currentValue;
        }
    })
}
