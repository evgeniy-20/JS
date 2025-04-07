// Дано список ul, у кожному пункті якого записано число. Зробіть так, щоб за кліком на будь-яку li її число збільшувалося на одиницю.

let listItems = document.querySelectorAll('li');
for (let elem of listItems) {
    elem.addEventListener('click', function func() {
        let currentValue = Number(elem.innerHTML);
        currentValue += 1;
        elem.innerHTML = currentValue;
    })
}
