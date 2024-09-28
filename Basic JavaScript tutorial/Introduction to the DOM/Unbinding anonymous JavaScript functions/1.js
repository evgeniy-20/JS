// Даний список ul, у кожному пункті якого записано число. Зробіть так, щоб на кліку на будь-яку liїї кількість збільшувалося на одиницю.

let elems = document.querySelectorAll('ul li');

for (let elem of elems) {
    elem.addEventListener('click', function func() {
        let currentNumber = Number(this.textContent);
        this.textContent = currentNumber + 1;
    });
}
